// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package utils

import (
	"context"
	"errors"
	"fmt"
	"github.com/unkeyed/sdks/api/go/v2/retry"
	"math"
	"math/rand"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

// Deprecated: Use retry.BackoffStrategy instead.
type BackoffStrategy = retry.BackoffStrategy

// Deprecated: Use retry.Config instead.
type RetryConfig = retry.Config

type Retries struct {
	Config      *retry.Config
	StatusCodes []string
}

func Retry(ctx context.Context, r Retries, operation func() (*http.Response, error)) (*http.Response, error) {
	switch r.Config.Strategy {
	case "backoff":
		if r.Config.Backoff == nil {
			return operation()
		}

		var resp *http.Response

		err := retryWithBackoff(ctx, r.Config.Backoff, func() error {
			if resp != nil {
				resp.Body.Close()
			}

			select {
			case <-ctx.Done():
				return retry.Permanent(ctx.Err())
			default:
			}

			res, err := operation()
			if err != nil {
				urlError := new(url.Error)
				if errors.As(err, &urlError) {
					if (urlError.Temporary() || urlError.Timeout()) && r.Config.RetryConnectionErrors {
						return err
					}
				}

				return retry.Permanent(err)
			}
			resp = res
			if res == nil {
				return fmt.Errorf("no response")
			}

			for _, code := range r.StatusCodes {
				if strings.Contains(strings.ToUpper(code), "X") {
					codeRange, err := strconv.Atoi(code[:1])
					if err != nil {
						continue
					}

					s := res.StatusCode / 100

					if s >= codeRange && s < codeRange+1 {
						return retry.TemporaryFromResponse("request failed", res)
					}
				} else {
					parsedCode, err := strconv.Atoi(code)
					if err != nil {
						continue
					}

					if res.StatusCode == parsedCode {
						return retry.TemporaryFromResponse("request failed", res)
					}
				}
			}

			resp = res

			return nil
		})

		var tempErr *retry.TemporaryError
		if err != nil && !errors.As(err, &tempErr) {
			return nil, err
		}

		return resp, nil
	default:
		return operation()
	}
}

func retryWithBackoff(ctx context.Context, s *retry.BackoffStrategy, operation func() error) error {
	var (
		err            error
		next           time.Duration
		attempt        int
		start          = time.Now()
		maxElapsedTime = time.Duration(s.MaxElapsedTime) * time.Millisecond
	)

	timer := &defaultTimer{}
	defer func() {
		timer.Stop()
	}()

	for {
		err = operation()
		if err == nil {
			return nil
		}

		var permanent *retry.PermanentError
		if errors.As(err, &permanent) {
			return permanent.Unwrap()
		}

		if time.Since(start) >= maxElapsedTime {
			return err
		}

		var temporary *retry.TemporaryError
		if errors.As(err, &temporary) {
			next = temporary.RetryAfter()
		}

		if next <= 0 {
			next = nextInterval(s, attempt)
		}

		timer.Start(next)

		select {
		case <-ctx.Done():
			return ctx.Err()
		case <-timer.C():
		}

		attempt += 1
	}
}

type Timer interface {
	Start(duration time.Duration)
	Stop()
	C() <-chan time.Time
}

// defaultTimer implements Timer interface using time.Timer
type defaultTimer struct {
	timer *time.Timer
}

// C returns the timers channel which receives the current time when the timer fires.
func (t *defaultTimer) C() <-chan time.Time {
	return t.timer.C
}

// Start starts the timer to fire after the given duration
func (t *defaultTimer) Start(duration time.Duration) {
	if t.timer == nil {
		t.timer = time.NewTimer(duration)
		return
	}

	if !t.timer.Stop() {
		select {
		case <-t.timer.C:
		default:
		}
	}

	t.timer.Reset(duration)
}

// Stop is called when the timer is not used anymore and resources may be freed.
func (t *defaultTimer) Stop() {
	if t.timer != nil {
		t.timer.Stop()
	}
}

func nextInterval(s *retry.BackoffStrategy, attempt int) time.Duration {
	initialInterval := float64(time.Duration(s.InitialInterval) * time.Millisecond)
	maxInterval := float64(time.Duration(s.MaxInterval) * time.Millisecond)
	exponent := s.Exponent
	jitterFactor := float64(0.25)

	interval := initialInterval * math.Pow(float64(attempt+1), exponent)

	jitter := rand.Float64() * jitterFactor * interval
	if rand.Float64() < 0.5 {
		jitter = -1 * jitter
	}

	interval = interval + jitter

	if interval <= 0 {
		interval = initialInterval
	}

	if interval > maxInterval {
		interval = maxInterval
	}

	return time.Duration(interval)
}

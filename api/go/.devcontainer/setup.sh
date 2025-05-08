#!/bin/bash

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

# Go module commands
go mod download
go mod tidy

# Generate starter usage sample with speakeasy
speakeasy generate usage -s https://raw.githubusercontent.com/unkeyed/unkey/refs/heads/main/go/apps/api/openapi/openapi.json -l go -o samples/root.go
export declare class APIError extends Error {
    readonly rawResponse: Response;
    readonly body: string;
    readonly statusCode: number;
    readonly contentType: string;
    constructor(message: string, rawResponse: Response, body?: string);
}
//# sourceMappingURL=apierror.d.ts.map
export interface RetryOptions { retries: number; jitter?: boolean; onRetry?: (err: unknown, attempt: number) => void; }
export async function retry<T>(fn: () => Promise<T>, opts: RetryOptions) {
  // TODO: implement exponential backoff with jitter
  throw new Error("Implement retry");
}

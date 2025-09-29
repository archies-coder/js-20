import { Transform } from "node:stream";
export function rateLimitStream(n: number, perMs: number) {
  let tokens = n;
  let last = Date.now();
  return new Transform({
    transform(chunk, enc, cb) {
      const now = Date.now();
      if (now - last >= perMs) { tokens = n; last = now; }
      if (tokens > 0) { tokens--; cb(null, chunk); } else { setTimeout(() => this.push(chunk) && cb(), perMs); }
    }
  });
}

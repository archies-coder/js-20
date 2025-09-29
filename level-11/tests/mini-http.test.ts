import { describe, it, expect } from "vitest";
import { startServer } from "../tasks/mini-http";
import http from "node:http";

describe("mini-http", () => {
  it("starts and responds", async () => {
    const server = await startServer(0, (req, res) => { res.statusCode = 200; res.end("ok"); });
    const port = (server.address() as any).port as number;
    const body = await new Promise<string>((resolve) => {
      http.get({ port, path: "/" }, (r) => { let d = ""; r.on("data", c => d += c); r.on("end", () => resolve(d)); });
    });
    expect(body).toBe("ok");
    server.close();
  });
});

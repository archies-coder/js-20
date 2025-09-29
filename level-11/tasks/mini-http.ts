import http from "node:http";
export function startServer(port: number, handler: (req: http.IncomingMessage, res: http.ServerResponse) => void) {
  const server = http.createServer(handler);
  return new Promise<http.Server>(resolve => server.listen(port, () => resolve(server)));
}

import { pipeline } from "node:stream";
import { promisify } from "node:util";
export const pipelinePromise = promisify(pipeline);

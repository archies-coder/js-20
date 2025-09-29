import { Dirent, promises as fs } from "node:fs";
import { join } from "node:path";
export async function* walk(dir: string, opts: { followSymlinks?: boolean } = {}) {
  const entries: Dirent[] = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full, opts);
    else if (e.isSymbolicLink() && opts.followSymlinks) yield* walk(await fs.readlink(full), opts);
    else if (e.isFile()) yield full;
  }
}

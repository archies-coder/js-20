export function Ok(value) {
  return { _tag: "Ok", value };
}
export function Err(error) {
  return { _tag: "Err", error };
}
export function isOk(r) { return r && r._tag === "Ok"; }
export function isErr(r) { return r && r._tag === "Err"; }

export function compose<A, B, C>(ab: (a: A) => B, bc: (b: B) => C) {
  return (a: A): C => bc(ab(a));
}
export function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C) {
  return bc(ab(a));
}

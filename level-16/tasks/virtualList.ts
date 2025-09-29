export interface VirtualListInput { itemCount: number; itemHeight: number; viewportHeight: number; scrollTop: number; }
export interface VirtualListOutput { startIndex: number; endIndex: number; offsetTop: number; }
export function computeVirtualList(i: VirtualListInput): VirtualListOutput {
  // TODO: compute windowed range
  throw new Error("Implement computeVirtualList");
}

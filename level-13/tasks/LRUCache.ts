export class LRUCache<K, V> {
  // TODO: implement LRU with O(1) get/put
  constructor(public capacity: number) {}
  get(_k: K): V | undefined { throw new Error("Implement LRUCache.get"); }
  put(_k: K, _v: V): void { throw new Error("Implement LRUCache.put"); }
}

import { expect, test } from "@jest/globals";
// biome-ignore lint/nursery/useImportRestrictions: <explanation>
import { LruCache } from "../src/index";

test("cache put", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(0)).toBe(undefined);
});

test("cache get", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(0)).toBe(undefined);
});

test("cache size", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.size()).toBe(3);
});

test("cache clear", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    cache.clear();
    expect(cache.get(1)).toBe(undefined);
    expect(cache.get(2)).toBe(undefined);
    expect(cache.get(3)).toBe(undefined);
});

test("cache capacity", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
    cache.put(4, 4);
    expect(cache.get(1)).toBe(undefined);
});

test("cache entries", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    expect([...cache.entries()]).toEqual([[1, 1]]);
});

test("cache contains", () => {
    const cache = new LruCache(3);
    expect(cache.contains(1)).toBe(false);
    cache.put(1, 1);
    expect(cache.contains(1)).toBe(true);
});

test("cache keys", () => {
    const cache = new LruCache(3);
    cache.put(1, 1);
    expect([...cache.keys()]).toEqual([1]);
});

import { test, expect } from "@jest/globals";
const lruCache = require("../src/index");

test("cache put", () => {
    const cache = new lruCache(3);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(0)).toBe(undefined);
});

test("cache get", () => {
    const cache = new lruCache(3);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(0)).toBe(undefined);
});

test("cache size", () => {
    const cache = new lruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.size()).toBe(3);
});

test("cache clear", () => {
    const cache = new lruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    cache.clear();
    expect(cache.get(1)).toBe(undefined);
    expect(cache.get(2)).toBe(undefined);
    expect(cache.get(3)).toBe(undefined);
});

test("cache capacity", () => {
    const cache = new lruCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
    cache.put(4, 4);
    expect(cache.get(1)).toBe(undefined);
});

const LRUCache = require("../src/index");

test("cache put", () => {
	const cache = new LRUCache(3);
	cache.put(1, 1);
	expect(cache.get(1)).toBe(1);
	expect(cache.get(0)).toBe(-1);
});

test("cache get", () => {
	const cache = new LRUCache(3);
	cache.put(1, 1);
	expect(cache.get(1)).toBe(1);
	expect(cache.get(0)).toBe(-1);
});

test("cache size", () => {
	const cache = new LRUCache(3);
	expect(cache.size()).toBe(3);
});

test("cache clear", () => {
	const cache = new LRUCache(3);
	cache.put(1, 1);
	cache.put(2, 2);
	cache.put(3, 3);
	cache.clear();
	expect(cache.get(1)).toBe(-1);
	expect(cache.get(2)).toBe(-1);
	expect(cache.get(3)).toBe(-1);
});

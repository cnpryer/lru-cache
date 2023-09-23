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

const LRUCache = require("../src/index");

test("Invalid LRUCache.get (-1)", () => {
	const cache = new LRUCache(3);
	expect(cache.get()).toBe(-1);
});

test("Valid LRUCache.put", () => {
	const cache = new LRUCache(3);
	cache.put(1, 1);
	expect(cache.get(1)).toBe(1);
});

test("Valid LRUCache.get", () => {
	const cache = new LRUCache(3);
	cache.put(1, 1);
	expect(cache.get(1)).toBe(1);
});

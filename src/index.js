/*
 * Ripe: An LRUCache for JavaScript.
 */


class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key) {
		if (this.cache.has(key)) {
			const value = this.cache.get(key);
			this.cache.delete(key);
			this.cache.set(key, value);
			return value;
		}
		return -1;
	}

	put(key, value) {
		if (this.cache.has(key)) {
			this.cache.delete(key);
		} else if (this.cache.size >= this.capacity) {
			const keys = this.cache.keys();
			const firstKey = keys.next().value;
			this.cache.delete(firstKey);
		}

		this.cache.set(key, value);
	}

	size() {
		return this.capacity;
	}

	clear() {
		this.cache.clear();
	}
}

module.exports = LRUCache;

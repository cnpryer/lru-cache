/*
 * Ripe: An LRUCache for JavaScript.
 */

class LruCache<K, V> {
    private _capacity: number;
    private _cache: Map<K, V>;

    constructor(capacity: number) {
        this._capacity = capacity;
        this._cache = new Map<K, V>();
    }

    get(key: K): V | -1 {
        if (this._cache.has(key)) {
            const value = this._cache.get(key);

            if (value === undefined) {
                return -1;
            }

            this._cache.delete(key);
            this._cache.set(key, value);

            return value;
        }

        return -1;
    }

    put(key: K, value: V): void {
        if (this._cache.has(key)) {
            this._cache.delete(key);
        } else if (this._cache.size >= this._capacity) {
            const key = this._cache.keys().next().value;

            if (key !== undefined) {
                this._cache.delete(key);
            }
        }

        this._cache.set(key, value);
    }

    size(): number {
        return this._cache.size;
    }

    clear(): void {
        this._cache.clear();
    }

    capacity(): number {
        return this._capacity;
    }
}

module.exports = LruCache;

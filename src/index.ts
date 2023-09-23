/*
 * Ripe: An LRUCache for JavaScript.
 */

class LruCache<K, V> {
    #capacity: number;
    #cache: Map<K, V>;

    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#cache = new Map<K, V>();
    }

    get(key: K): V | undefined {
        if (this.#cache.has(key)) {
            const value = this.#cache.get(key);

            if (value === undefined) {
                return undefined;
            }

            this.#cache.delete(key);
            this.#cache.set(key, value);

            return value;
        }

        return undefined;
    }

    put(key: K, value: V): void {
        if (this.#cache.has(key)) {
            this.#cache.delete(key);
        } else if (this.#cache.size >= this.#capacity) {
            const key = this.#cache.keys().next().value;

            if (key !== undefined) {
                this.#cache.delete(key);
            }
        }

        this.#cache.set(key, value);
    }

    size(): number {
        return this.#cache.size;
    }

    clear(): void {
        this.#cache.clear();
    }

    get capacity(): number {
        return this.#capacity;
    }
}

module.exports = LruCache;

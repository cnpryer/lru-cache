/*
 * Ripe: An LRUCache for JavaScript.
 */

class LRUCache<K, V> {
    #capacity: number;
    #cache: Map<K, V>;

    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#cache = new Map<K, V>();
    }

    get(key: K): V | -1 {
        if (this.#cache.has(key)) {
            const value = this.#cache.get(key);

            if (value === undefined) {
                return -1;
            }

            this.#cache.delete(key);
            this.#cache.set(key, value);

            return value;
        }

        return -1;
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

module.exports = LRUCache;

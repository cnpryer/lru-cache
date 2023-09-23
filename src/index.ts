/*
 * Ripe: An LRUCache for JavaScript.
 */

/* An `LruCache` for JavaScript.
 *
 * ```js
 * const cache = new lruCache(3);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.put(3, 3);
 * expect(cache.get(1)).toBe(1);
 * expect(cache.get(2)).toBe(2);
 * expect(cache.get(3)).toBe(3);
 * cache.put(4, 4);
 * expect(cache.get(1)).toBe(undefined);
 * ```
 */
class LruCache<K, V> {
    #capacity: number;
    #cache: Map<K, V>;

    /* Initialize an `LruCache` with `capacity`.
     *
     * @param {number} capacity The capacity of the cache.
     *
     * ```js
     * const cache = new lruCache(3);
     * expect(cache.capacity()).toBe(3);
     * ```
     */
    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#cache = new Map<K, V>();
    }

    /* Returns a value from the cache.
     *
     * @param {K} key A key used for a cache entry.
     * @returns {V | undefined} An entry's value.
     *
     * ```js
     * const cache = new lruCache(3);
     * cache.put(1, 1);
     * expect(cache.get(1)).toBe(1);
     * ```
     */
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

    /* Add an entry to the cache.
     *
     * @param {K} key A key used for a cache entry.
     * @param {V} value A value for a cache entry.
     *
     * ```js
     * const cache = new lruCache(3);
     * cache.put(1, 1);
     * expect(cache.get(1)).toBe(1);
     * expect(cache.get(2)).toBe(undefined);
     * ```
     */
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

    /* Get the current size of the cache.
     *
     * @returns {number} The current size of the cache.
     *
     * ```js
     * const cache = new lruCache(3);
     * cache.put(1, 1);
     * expect(cache.size()).toBe(1);
     * ```
     */
    size(): number {
        return this.#cache.size;
    }

    /* Clear the cache.
     *
     * ```js
     * const cache = new lruCache(3);
     * cache.put(1, 1);
     * cache.clear();
     * expect(cache.size()).toBe(0);
     * ```
     */
    clear(): void {
        this.#cache.clear();
    }

    /* Get the capacity of the cache.
     *
     * @returns {number} The capacity of the cache.
     *
     * ```js
     * const cache = new lruCache(3);
     * expect(cache.capacity()).toBe(3);
     * ```
     */
    get capacity(): number {
        return this.#capacity;
    }
}

module.exports = LruCache;

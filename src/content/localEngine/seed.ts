/** Deterministische pseudo-random generator op basis van slug — reproduceerbaar per stad. */
export class SeededRng {
  private state: number;

  constructor(seed: string) {
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    this.state = hash || 1;
  }

  next(): number {
    this.state = (this.state * 1664525 + 1013904223) >>> 0;
    return this.state / 0xffffffff;
  }

  pick<T>(items: readonly T[]): T {
    if (items.length === 0) throw new Error("SeededRng.pick: lege array.");
    return items[Math.floor(this.next() * items.length)];
  }

  pickIndex(max: number): number {
    return Math.floor(this.next() * max);
  }

  pickMany<T>(items: readonly T[], count: number): T[] {
    const pool = [...items];
    const result: T[] = [];
    const limit = Math.min(count, pool.length);
    for (let i = 0; i < limit; i += 1) {
      const idx = Math.floor(this.next() * pool.length);
      result.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return result;
  }

  shuffle<T>(items: readonly T[]): T[] {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(this.next() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

export function createCityRng(slug: string, salt = ""): SeededRng {
  return new SeededRng(`${slug}::${salt}`);
}

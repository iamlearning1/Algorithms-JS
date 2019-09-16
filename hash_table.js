class Hash {
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => []);
  }

  _hash(key) {
    const PRIME = 53;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    this.keyMap[index].push([key, value]);
  }
}

const hash = new Hash();

hash.set("name", "deepak");
hash.set("age", "24");
hash.set("profession", "software engineer");
hash.set("hobby", "learning");

console.log(hash);

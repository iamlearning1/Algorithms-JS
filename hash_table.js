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

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index].length === 0) return undefined;
    const items = this.keyMap[index];
    return items.find(item => item[0] === key)[1];
  }

  values() {
    const arr = [];
    this.keyMap.forEach(item => {
      if (item.length === 1) arr.push(item[0][1]);
      else {
        item.forEach(it => arr.push(it[1]));
      }
    });
    return new Set([...arr]);
  }
}

const hash = new Hash(17);

hash.set("name", "deepak");
hash.set("age", "24");
hash.set("profession", "software engineer");
hash.set("profession", "software engineer");
hash.set("hobby", "learning");
hash.set("another_hobby", "more learning");
hash.set("another_hobby", "more learning");

// console.log(hash.get("age"));
// console.log(hash.get("name"));
// console.log(hash.get("profession"));
// console.log(hash.get("hobby"));
// console.log(hash.get("another_hobby"));

console.log(hash.values());
// console.log(hash);

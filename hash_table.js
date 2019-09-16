class Hash {
  constructor(size = 53) {
    this.keyMap = new Array(size);
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
}

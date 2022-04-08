class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }
}

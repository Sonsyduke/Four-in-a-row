class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces.
   * @returns {array} An array of space objects
   */

  createSpaces() {
    const spaces = [];

    for (let i = 0; i < this.columns; i++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(i, y);
        column.push(space);
      }

      spaces.push(column);
    }

    return spaces;
  }
}

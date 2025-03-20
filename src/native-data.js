/**
 * native-data.js
 * Native JavaScript Array Library for Data Manipulation and Analysis.
 */

/**
 * Data is class for 2D array.
 * @array {Array} 2D array data 
 * Example: [[col1, col2, col3], [col1, col2, col3], ...]
 * @cols {Array} Column names.
 * Example: ["a", "b", "c"]
 */

class Data {

  #array;
  #cols;
  #types;

  constructor(array, cols){
    this.#array = this.#arrayProperty(array, cols);
    this.#types = this.#colDataTypes(array, cols);
    this.#cols = cols;
  }

  /**
   * Private method
   */

  // Generate array property.
  #arrayProperty(array, cols){
    let arr = [];
    let row;
    for (let i = 0; i < array.length; i++) {
      row = [];
      for (let j = 0; j < cols.length; j++) {
        row.push((array[i].length - 1) < j ? "" : array[i][j]);
      }
      arr.push(row);
    }
    return arr;
  }

  // Convert 2D array to object.
  #colObject(array, cols){
    let obj = {};
    let row;
    for (let i = 0; i < array.length; i++) {
      row = array[i];
      for (let j = 0; j < row.length; j++) {
        if (obj[cols[j]] === undefined) {
          obj[cols[j]] = [];
        }
        obj[cols[j]].push(row[j]);
      }
    }
    return obj;
  }

  /* 
   * Generate column data types using array to maintain the order of columns.
   */
  #colDataTypes(array, cols){
    let type = [];
    const colObject = this.#colObject(array, cols)
    let col, colType, rowIndex;
    for (let i = 0; i < cols.length; i++) {
      col = colObject[cols[i]];
      colType = "undefined";
      rowIndex = 0;
      while (colType === "undefined" && rowIndex < col.length) {
        if (col[rowIndex] === "") {
          rowIndex++;
        } else {
          colType = typeof col[rowIndex];
        }
        rowIndex++;
      }
      type.push(colType);
    }
    return type;
  }


  /**
   * Helper method for public print method.
   */
  #print(){
    const colObject = this.#colObject(this.#array, this.#cols);
    const rowsLength = String(this.#array.length-1).length;
    const colsLength = this.#cols.map(x => Math.max(...colObject[x].map(x => x.toString().length).concat(x.length)));

    // Head
    let head = "\n| " + " ".repeat(rowsLength) + " | ";
    for (let i = 0; i < this.#cols.length; i++) {
      head += this.#cols[i] + " ".repeat(colsLength[i] - this.#cols[i].length + 1) + "| ";
    }
    let sep = "\n" + "-".repeat(rowsLength) + "-".repeat(colsLength.reduce((accumulator, currentValue) => accumulator + currentValue + 3, 0) + 4);
    let text = sep + head + sep;
    
    // Body
    for (let i = 0; i < this.#array.length; i++) {
      text += "\n| " + String(i) + " ".repeat(rowsLength - String(i).length) + " | ";
      for (let j = 0; j < this.#array[i].length; j++) {
        text += this.#array[i][j] + " ".repeat(colsLength[j] - this.#array[i][j].toString().length + 1) + "| ";
      }
    }
    text += sep;
    return text;
  }

  /**
   * Public method
   */

  // Get Array
  getArray(){
    return this.#array;
  }

  // Get Col Names
  getColNames(){
    return this.#cols;
  }

  // Get Col Data Types
  getColDataTypes(){
    const colTypes = {};
    this.#cols.forEach((value, index) => {
      colTypes[value] = this.#types[index];
    });
    return colTypes;
  }

  // Get Object
  getObject(){
    return this.#colObject(this.#array, this.#cols);
  }

  // Get Row
  getRow(row){
    return this.#array[row];
  }

  // Get Col
  getCol(col){
    const colObject = this.#colObject(this.#array, this.#cols);
    return colObject[col];
  }

  // Get Cell
  getCell(row, col){
    const colObject = this.#colObject(this.#array, this.#cols);
    return colObject[col][row];
  }

  // Get the shape of data.
  getSize(){
    return [this.#array.length, this.#cols.length];
  }

  // Rename Column 
  renameCol(oldName, newName){
    this.#cols = this.#cols.map(x => x === oldName ? newName : x);
    return this
  }

  // Drop Column
  dropCol(col){
    const dropIndex = this.#cols.indexOf(col);
    if (dropIndex > -1) {
      let arr = [];
      let cols = []
      let types = []

      this.#array.forEach(x => {
        x.splice(dropIndex, 1);
        arr.push(x);
      });

      this.#cols.forEach((value, index) => {
        if (index !== dropIndex) {
          cols.push(value);
          types.push(this.#types[index]);
        }
      });

      this.#array = arr;
      this.#cols = cols;
      this.#types = types;
    }
    return this
  }

  // Drop Row
  dropRow(row){
    this.#array.splice(row, 1);
    return this
  }

  // Copy
  copy(){
    return new Data(this.#array, this.#cols);
  }

  // Console Print for debugging
  print(){
    console.log(this.#print());
    return this
  }

  // Get Print
  getPrint(){
    return this.#print();
  }

}

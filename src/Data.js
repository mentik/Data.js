/**
 * Data.js
 * Native javascript array library for data manipulation and analysis.
 */

/**
 * Data is class for 2D array.
 * @array {Array} 2D array data 
 * Example: [[col1, col2, col3], [col1, col2, col3], ...]
 * @cols {Array} Column names.
 * Example: ["a", "b", "c"]
 */

class Data {

  constructor(array, cols){
    this.array = array;
    this.cols = cols;
  }

  // Private method to convert 2D array to object.
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

  // To Object
  toObject(){
    return this.#colObject(this.array, this.cols);
  }

  // Get Row
  getRow(row){
    return this.array[row];
  }

  // Get Column
  getCol(col){
    const colObject = this.#colObject(this.array, this.cols);
    return colObject[col];
  }
  
  // Get the shape of data.
  getSize(){
    return [this.array.length, Object.keys(this.cols).length];
  }

  // Print
  print(){
    const colObject = this.#colObject(this.array, this.cols);
    const rowsLength = String(this.array.length-1).length;
    const colsLength = this.cols.map(x => Math.max(...colObject[x].map(x => x.toString().length).concat(x.length)));

    // Head
    let head = "\n| " + " ".repeat(rowsLength) + " | ";
    for (let i = 0; i < this.cols.length; i++) {
      head += this.cols[i] + " ".repeat(colsLength[i] - this.cols[i].length + 1) + "| ";
    }
    let sep = "\n" + "-".repeat(rowsLength) + "-".repeat(colsLength.reduce((accumulator, currentValue) => accumulator + currentValue + 3, 0) + 4);
    let text = sep + head + sep;
    
    // Body
    for (let i = 0; i < this.array.length; i++) {
      text += "\n| " + String(i) + " ".repeat(rowsLength - String(i).length) + " | ";
      for (let j = 0; j < this.array[i].length; j++) {
        text += this.array[i][j] + " ".repeat(colsLength[j] - this.array[i][j].toString().length + 1) + "| ";
      }
    }
    text += sep;
    return console.log(text);
  }

}



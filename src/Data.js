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
    function colObject(array, cols){
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

    this.row = array;
    this.col = colObject(array, cols);
    this.name = cols;
  }

  // Get the shape of data.
  size(){
    return [this.row.length, Object.keys(this.name).length];
  }

  // Print
  print(){
    const rowsLength = String(this.row.length-1).length;
    const colsLength = this.name.map(x => Math.max(...this.col[x].map(x => x.toString().length).concat(x.length)));

    // Head
    let head = "\n| " + " ".repeat(rowsLength) + " | ";
    for (let i = 0; i < this.name.length; i++) {
      head += this.name[i] + " ".repeat(colsLength[i] - this.name[i].length + 1) + "| ";
    }
    let sep = "\n" + "-".repeat(rowsLength) + "-".repeat(colsLength.reduce((accumulator, currentValue) => accumulator + currentValue + 3, 0) + 4);
    let text = sep + head + sep;
    
    // Body
    for (let i = 0; i < this.row.length; i++) {
      text += "\n| " + String(i) + " ".repeat(rowsLength - String(i).length) + " | ";
      for (let j = 0; j < this.row[i].length; j++) {
        text += this.row[i][j] + " ".repeat(colsLength[j] - this.row[i][j].toString().length + 1) + "| ";
      }
    }
    text += sep;
    return console.log(text);
  }

}



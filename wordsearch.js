// pair programming with Moshood Saka
const transpose = function(matrix) {
    let result = []
    let newArray = [];
    let numberOfRows = matrix.length;
    let numberOfColumns = matrix[0].length; 
    for (let i = 0; i < numberOfColumns; i++) {
      for (let j = 0; j < numberOfRows; j++) {
         newArray.push(matrix[j][i]);
      }
      result.push(newArray);
      newArray = [];
    }
    return result;
  };

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return undefined;
    } 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            console.log(l);
            return true
        } 
    } for (l of verticalJoin) {
        if (l.includes(word)) {
            console.log(l);
            return true
        } 
    }
    return false;
    
}
console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFIELD'))



module.exports = wordSearch
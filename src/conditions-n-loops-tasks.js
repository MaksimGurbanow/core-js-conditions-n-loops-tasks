/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: x1, y: y1 } = queen;
  const { x: x2, y: y2 } = king;
  return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isValidTriangle = a + b > c && b + c > a && a + c > b;
  return isValidTriangle && (a === b || b === c || a === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const dict = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  let result = '';
  let temp = num;
  while (temp > 10) {
    temp -= 10;
    result += dict[9];
  }

  if (temp !== 0) {
    result += dict[temp - 1];
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numToWord = (size) => {
    switch (size) {
      case '.':
        return 'point';
      case ',':
        return 'point';
      case '-':
        return 'minus';
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return 'error';
    }
  };

  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    str = `${str}${i > 0 ? ' ' : ''}${numToWord(numberStr[i])}`;
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let searchNum = num;
  while (searchNum > 0) {
    const currentDigit = searchNum % 10;
    if (currentDigit === digit) {
      return true;
    }
    searchNum = (searchNum - currentDigit) / 10;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const leftSum = (pivot) => {
    let sum = 0;
    for (let i = 0; i < pivot; i += 1) sum += arr[i];
    return sum;
  };
  const rightSum = (pivot) => {
    let sum = 0;
    for (let i = pivot + 1; i < arr.length; i += 1) sum += arr[i];
    return sum;
  };

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (leftSum(i) === rightSum(i)) return i;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function createMatrix(n) {
  return Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
}

function getSpiralMatrix(size) {
  const rowSize = size;
  const colSize = size;
  const matrix = createMatrix(size);
  const rowMove = [1, 0, -1, 0];
  const colMove = [0, 1, 0, -1];
  let r = 0;
  let c = 0;
  let di = 0;

  for (let i = 1; i <= rowSize * colSize; i += 1) {
    matrix[c][r] = i;
    const curRow = r + rowMove[di];
    const curCol = c + colMove[di];
    if (
      curRow >= 0 &&
      curRow < rowSize &&
      curCol >= 0 &&
      curCol < colSize &&
      !matrix[curCol][curRow]
    ) {
      r = curRow;
      c = curCol;
    } else {
      di = (di + 1) % 4;
      r += rowMove[di];
      c += colMove[di];
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const len = matrix.length;
  const rotatedMatrix = matrix;
  const emptyArray = createMatrix(len);
  for (let c = 0; c < len; c += 1) {
    for (let r = 0; r < len; r += 1) {
      emptyArray[r][c] = rotatedMatrix[c][r];
    }
  }
  for (let c = 0; c < len; c += 1) {
    for (let r = 0; r < len / 2; r += 1) {
      const temp = emptyArray[c][r];
      emptyArray[c][r] = emptyArray[c][len - r - 1];
      emptyArray[c][len - r - 1] = temp;
    }
  }

  for (let i = 0; i < emptyArray.length; i += 1) {
    for (let j = 0; j < emptyArray.length; j += 1) {
      rotatedMatrix[i][j] = emptyArray[i][j];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  const len = arr.length;
  if (len <= 1) return arr;

  const pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < len; i += 1) {
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }

  left = sortByAsc(left);
  right = sortByAsc(right);
  const result = [...left, pivot, ...right];
  for (let i = 0; i < result.length; i += 1) {
    res[i] = result[i];
  }
  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, num) {
  let res = str;
  for (let i = 1; i <= num; i += 1) {
    let evenChars = '';
    let oddChars = '';
    for (let j = 1; j < str.length; j += 2) {
      evenChars += res[j - 1];
      oddChars += res[j];
    }
    res = evenChars + oddChars;
    if (res === str) return shuffleChar(str, num % i);
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let temp = number;

  while (temp) {
    const curDig = temp % 10;
    arr.unshift(curDig);
    temp = (temp - curDig) / 10;
  }

  let index;
  let current;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      index = i - 1;
      current = arr[index];
      break;
    }
  }
  const left = arr.splice(0, index);
  const right = arr.sort((a, b) => a - b);
  let next;
  let indexNext;
  for (let i = 0; i < right.length; i += 1) {
    if (right[i] === current) {
      next = right[i + 1];
      indexNext = i + 1;
    }
  }
  const rightArr = [...right.splice(0, indexNext), ...right.splice(1)];
  const resNumber = +[...left, next, ...rightArr].join('');
  return resNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

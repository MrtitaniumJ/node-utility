/** 
 * Reverse a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
*/
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Check if a string is a palindrome
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

/**
 * Capitalize the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with each word capitalized.
 */
function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

/**
 * Trim leading and trailing whitespace from a string.
 * @param {string} str- The string to trim.
 * @returns {string} The trimmed string.
 */
function trimWhitespace(str) {
    return str.trim();
}

/**
 * Count the occurrences of a substring within a string.
 * @param {string} str - The string to search within.
 * @param {string} subStr -  The substring to count occurrences of.
 * @returns {number} The number of occurrences of the substring.
 */
function countOccurrences(str, subStr) {
    return str.split(subStr).length - 1;
}

/**
 * Generate a random string of a specified length.
 * @param {string} length - The length of the random string to generate.
 * @returns {string} The random string.
 */
function getRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Format a number with commas for thousands separators.
 * @param {number} num - The number to format.
 * @returns {string} The formatted number with commas.
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Convert a string into a URL-friendly slug.
 * @param {string} str - The string to convert
 * @returns {string} The URL-friendly slug.
 */
function slugify(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

/**
 * Randomly shuffle the elements of an array.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  /**
   * Create a deep copy of an object.
   * @param {Object} obj - The object to clone.
   * @returns {Object} The deep copy of the object.
   */
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * Get an array of unique values from an array.
   * @param {Array} array - The array to extract unique values from.
   * @returns {Array} An array of unique values.
   */
  function getUniqueValues(array) {
    return Array.from(new Set(array));
  }
  
  /**
   * Split an array into smaller arrays of a specified size.
   * @param {Array} array - The array to split.
   * @param {number} size - The size of each chunk.
   * @returns {Array} An array of smaller arrays (chunks).
   */
  function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  
  /**
   * Flatten a nested array into a single-level array.
   * @param {Array} array - The nested array to flatten.
   * @returns {Array} The flattened array.
   */
  function flattenArray(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
  }
  
  /**
   * Pad a string with a specified character to a certain length.
   * @param {string} str - The string to pad.
   * @param {number} length - The desired length of the string.
   * @param {string} char - The character to pad with (default: ' ').
   * @returns {string} The padded string.
   */
  function padString(str, length, char = ' ') {
    return str.padStart((str.length + length) / 2, char).padEnd(length, char);
  }
  
  /**
   * Swap the values of two variables.
   * @param {*} a - The first variable.
   * @param {*} b - The second variable.
   */
  function swapValues(a, b) {
    [a, b] = [b, a];
  }
  
  /**
   * Calculate the factorial of a number.
   * @param {number} n - The number to calculate the factorial for.
   * @returns {number} The factorial of the number.
   */
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  /**
   * Check if a number is a prime number.
   * @param {number} num - The number to check.
   * @returns {boolean} True if the number is a prime number, false otherwise.
   */
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * Generate the Fibonacci sequence up to a specified number of terms.
   * @param {number} n - The number of terms in the Fibonacci sequence.
   * @returns {Array} The Fibonacci sequence.
   */
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // Sorting Algorithms
  
  /**
   * Sort an array using the bubble sort algorithm.
   * @param {Array} array - The array to sort.
   * @returns {Array} The sorted array.
   */
  function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  /**
   * Sort an array using the selection sort algorithm.
   * @param {Array} array - The array to sort.
   * @returns {Array} The sorted array.
   */
  function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }
  
  /**
   * Sort an array using the insertion sort algorithm.
   * @param {Array} array - The array to sort.
   * @returns {Array} The sorted array.
   */
  function insertionSort(array) {
    const len = array.length;
    for (let i = 1; i < len; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    return array;
  }
  
  /**
   * Sort an array using the merge sort algorithm.
   * @param {Array} array - The array to sort.
   * @returns {Array} The sorted array.
   */
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  /**
   * Sort an array using the quick sort algorithm.
   * @param {Array} array - The array to sort.
   * @returns {Array} The sorted array.
   */
  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
  }
  
  // Searching Algorithms
  
  /**
   * Perform a linear search on an array.
   * @param {Array} array - The array to search.
   * @param {*} target - The target value to search for.
   * @returns {number} The index of the target value, or -1 if not found.
   */
  function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  /**
   * Perform a binary search on a sorted array.
   * @param {Array} array - The sorted array to search.
   * @param {*} target - The target value to search for.
   * @returns {number} The index of the target value, or -1 if not found.
   */
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  // Other Utility Functions
  
  /**
   * Format a date according to a specified format.
   * @param {Date} date - The date to format.
   * @param {string} format - The format string (e.g., 'YYYY-MM-DD').
   * @returns {string} The formatted date string.
   */
  function formatDate(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }
  
  /**
   * Convert seconds to a human-readable format (e.g., hours, minutes, seconds).
   * @param {number} seconds - The number of seconds.
   * @returns {string} The human-readable time format.
   */
  function convertTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }
  
  /**
   * Encode a string using Base64.
   * @param {string} str - The string to encode.
   * @returns {string} The Base64-encoded string.
   */
  function base64Encode(str) {
    return Buffer.from(str).toString('base64');
  }
  
  /**
   * Decode a Base64-encoded string.
   * @param {string} str - The Base64-encoded string to decode.
   * @returns {string} The decoded string.
   */
  function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('utf-8');
  }
  
  /**
   * Check if a string is a valid email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email address is valid, false otherwise.
   */
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  /**
   * Generate a universally unique identifier (UUID).
   * @returns {string} The UUID.
   */
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  /**
   * Calculate the Levenshtein distance between two strings.
   * @param {string} a - The first string.
   * @param {string} b - The second string.
   * @returns {number} The Levenshtein distance.
   */
  function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
  
  // Export utility functions
  module.exports = {
    reverseString,
    isPalindrome,
    capitalizeWords,
    trimWhitespace,
    countOccurrences,
    getRandomString,
    formatNumber,
    slugify,
    shuffleArray,
    deepClone,
    getUniqueValues,
    chunkArray,
    flattenArray,
    padString,
    swapValues,
    factorial,
    isPrime,
    fibonacci,
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    linearSearch,
    binarySearch,
    formatDate,
    convertTime,
    base64Encode,
    base64Decode,
    validateEmail,
    generateUUID,
    levenshteinDistance
  };
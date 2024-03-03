
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('ascending-order-mrmolley');
const { lib2 } = require('adventuregame-mrmolley');

function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Selection Sort:", selectionSort(array));


module.exports = { selectionSort };

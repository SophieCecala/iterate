//task1
const arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.map(function (elem) {
    return Math.sqrt(elem)
});
console.log('arr1', result1);

//task2
const arr2 = ['apple', 'bag', 'tea', 'bear', 'candle'];

let result2 = arr2.map(function (elem) {
    return elem + '!'
});

console.log('arr2', result2);

//task3
const arr3 = ['apple', 'bag', 'tea', 'bear', 'candle'];

let result3 = arr3.map(function (elem) {
    return elem
});

console.log('arr3', result3.reverse());

//task4
const arr4 = ['123', '456', '789'];

let result4 = arr4.map(function (elem) {
    return elem.split(',');
});

console.log('arr4', result4);

//task5
const arr5 = [1, 2, 3, 4, 5];

let result5 = arr5.map(function(elem, index) {
    return elem * index;
});

console.log('arr5', result5);
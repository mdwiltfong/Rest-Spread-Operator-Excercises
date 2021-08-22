/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  } */

function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
}


const findMin = (...nums) => Math.min(...nums);
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
})

const doubleAndReturnArgs = (arr, num1, num2) => ([...arr, num1 * 2, num2 * 2])

function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length)
    console.log(idx)


    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}


function extend(array1, array2) {
    return [...array1, ...array2]
}


function addKeyVal(obj, key, val) {
    let newObj = {
        ...obj
    };
    newObj[`${key}`] = val;

    return newObj

}
function combine(obj1, obj2) {
    return {...obj1,...obj2}
    }
    

function update(obj, key, val) {
    let newObj = {
        ...obj
    };
    newObj[`${key}`] = val;

    return newObj

}
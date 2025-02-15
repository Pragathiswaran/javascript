// jan 27 2025

// reverse the string and check the string is palindrome or not

const str = "madam";
let reversed = "";

for ( let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

// console.log(reversed === str);

// Find the largest number in an array

const arr = [23, 45, 56, 100, 78, 90];
let largest = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

// console.log(largest);

//call back function

function greet(name, callback){
    callback(`hello ${name}`);
}

// greet("pragathis",msg => console.log(msg))

function findFactorial(num){
    if (num <= 1) return 1;
    return num * findFactorial(num - 1)
}

// console.log(findFactorial(5));

//frequency of numbers

const getFrequnecy = (num) => {
    const freq = {}
    for(let i = 0; i < num.length; i++){
        if(freq[num[i]]){
            freq[num[i]] += 1
        } else {
            freq[num[i]] = 1
        }
    }

    return freq;
}

const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 1, 2, 1]
const str1 = "pragathis"
// console.log(getFrequnecy(str1));

// occurence of the character

const getOccurence = (str, char) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count += 1
        }
    }

    return count;
}

console.log(getOccurence(str1, "a"));

console.log('hello world'.toLocaleUpperCase())

// Sum the numbers that inbetween in the 0
function addInbetween(nums){
    let res = []
    let num = 0
    let flag = 0
    for(let i = 0; i < nums.length; i++){
        if(flag == 1) num += nums[i]
        
        if(nums[i] == 0 && flag == 1){
            if(num != 0) res.push(num)
            num = 0
        }
        
        if(nums[i] == 0 && flag == 0) flag++
    }
    
    return res
}

let arr1 = [0,1,2,0,1,2,3,4,5,0,3,0,2,0,2,0,3,4,5]
console.log(addInbetween(arr1)) // [ 3, 15, 3, 2, 2 ]
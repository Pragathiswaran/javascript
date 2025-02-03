const todo = [
    {
        task: "Learn JavaScript",
        status: "Complete"
    },
    {
        task: "Learn React",
        status: "In Progress"
    },
    {
        task: "Learn Node",
        status: "Not Started"
    },
]

const removeTask = (index) => {
    const removed = todo.filter((task, i) => i !== index);
    return removed;
}

// console.log(removeTask(1));

const obj = { a: " " }
// const obj2 = obj;
// obj2.a = "b";
// console.log(obj);
// console.log(obj2);

let str = " "
// console.log(Boolean(str));
// console.log(str.length)

// const arr = [1, 2, 3, 4, 5];
// const [one, two, ...rest] = arr;
// const [three, four, five] = rest;
// console.log(one, two, three, four, five);

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4,
        f: 5
    }
}

const obj2 = {...obj1};
obj2.d.e = 6;
// console.log(obj1);
// console.log(obj2);
// console.log(b, rest);


function reverseString(str) {
    let res = ""
    for (let i = str.length -1; i >=0; i--) {
        res += str[i]
    }

    return res
 }
 console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


 function firstUniqueChar(str) {
    let res = {}
    for(let i = 0; i < str.length; i++){
        if(res[str[i]]){
            res[str[i]] += 1
        } else {
            res[str[i]] = 1
        }
    }
    
    for(let value in res){
       if(res[value] === 1){
           return value
       }
    }
 }
 
 console.log(firstUniqueChar("aabbccde")); // Output: "d"
 console.log(firstUniqueChar("racecar")); // Output: "e"


 function findMissingNumber(arr, N) {
    for(let i = 0; i < N; i++){
         if(arr[i] != (i + 1)){
             return i + 1
         }
    }
 }
 
 console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3


 function areAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false;
    
    const charSets = {}
    
    for(let char of str1){
      charSets[char] = (charSets[char] || 0) + 1 
    }
    
    for(let value of str2){
      if(!charSets[value]) return false
      charSets[value]--
    }
    
    return true
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world")); 

function findDuplicates(arr) {
    let res = []
    let arrCount = {}
    
    for(let value of arr){
        arrCount[value] = (arrCount[value] || 0) + 1
    }
    
    for(let value in arrCount){
        if(arrCount[value] > 1) {
            res.push(Number(value))
        }
    }
    
    return res
 }
 
 console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])); // Output: [2,3]

 function fibonacci(n) {
    if(n === 0 || n === 1) return n
    let num1 = 0
    let num2 = 1
    let sum = 0
    
    for(let i = 1; i < n; i++){
        sum = (num1 + num2)
        num1 = num2
        num2 = sum
    }
    
    return sum
    
 }
 
 console.log(fibonacci(5)); // Output: 13

 function longestWord(sentence) {
    let lenOfWords = sentence.split(" ")
    let longestWord = ""
    
    for(let words of lenOfWords){
        if(words.length > longestWord.length) longestWord = words
    }
    
    return longestWord
 }
 
 console.log(longestWord("I love JavaScript programming"));
 
 function isPowerOfTwo(num) {
    return num > 0 && (num & (num -1)) === 0
 }

 function arrayIntersection(arr1, arr2) {
    let res = []
    let charCount = {}
    
    for(let value of arr1){
        charCount[value] = (charCount[value] || 0) + 1    
    }
    
    for(let value of arr2){
        charCount[value] = (charCount[value] || 0) + 1    
    }
    
    for(let value in charCount){
        if(charCount[value] > 1) res.push(Number(value))
    }
    
    return res
}
 
 console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 

 
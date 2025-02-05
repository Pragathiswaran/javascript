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

 
 function findLargestNumber(arr) {
    if(arr.length === 0) return 0
    let res = arr[0]
    for(let value of arr){
       if(value > res){
           res = value
       }
    }
    return res
  }
  console.log(findLargestNumber([10, 20, 5, 30, 15])); // Output: 30

  function isPrime(num) {
    if(num <= 1) return false
    if(num === 2) return true
    if(num % 2 === 0) return false
    
   for(let i = 3; i <= Math.sqrt(num); i+=2){
       if(num % i === 0) return false
   }
    
    return true
  }
  console.log(isPrime(11)); 
  console.log(isPrime(337));


  function findMissingNumber(arr) {
    if(arr.length === 0) return undefined
    let n = arr.length + 1
    let expectedSum = (n * (n + 1)) / 2
    let actualSum = arr.reduce((sum,num) => sum + num, 0)
    return expectedSum - actualSum
  }
  console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
  
  const arr = [1, 2, 3, 5]
  const result = arr.reduce((sum,num) => sum + num, 0)
  console.log(result)


  function isPalindrome(str) {
    let left = 0, right = str.length - 1
    
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false


function factorial(num) {
    if(num <= 1) return num
    
    return num * factorial(num - 1)
  }
  console.log(factorial(5)); 

function secondLargest(arr) {
    if(arr.length < 2) return "The Array must have atleast two element"
    firstMax = -Infinity
    secondMax = -Infinity
    
    for(let value of arr){
        if(value > firstMax){
            secondMax = firstMax
            firstMax = value
        } else if (value > secondMax && value < firstMax){
            secondMax = value
        }
    }
    
    if(secondMax === -Infinity) return "All elements are same"
    
    return secondMax
}
console.log(secondLargest([10, 20, 5, 30, 23, 15])); // Output: 23
console.log(secondLargest([10,10,10,10])); // Output: All the elements are same
console.log(secondLargest([10])); // Output: The Array must have atleast two element


function countChar(str, char) {
    if(typeof char !== "string" || char.length < 1) return "Invalid Character"
    let count = 0
    for(let value of str){
       if(value == char) count++
    }
    return count
  }
  console.log(countChar("hello world", "l")); // Output: 3

function areArraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false
    }
    return true
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(areArraysEqual([1, 2, 3], [1, 3, 2])); // Output: false

function removeDuplicates(arr) {
    return Array.from(new Set(arr))
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n
    return [...arr.slice(-k),...arr.slice(0,n -k)]
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
// console.log(1 % 5)

function isPangram(str) {
    let letters = new Set()
    
    for(let char of str.toLowerCase()){
        if(char >= "a" && char <= "z"){
            letters.add(char)
        }
        
        if(letters.size === 26) return true
    }
    
    return false
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
console.log(isPangram("Hello world")); // Output: false


function isNumberPalindrome(num) {
    let original = num
    let reversed = 0
    
    while(num > 0){
        let digit = num % 10
        reversed = reversed * 10 + digit
        num = Math.floor(num / 10)
    }
    
    return reversed === original
  }
  console.log(isNumberPalindrome(121)); // Output: true
  console.log(isNumberPalindrome(123)); // Output: false


  function findSmallestNumber(arr) {
    if(arr.length < 1) return false
    
    return Math.min(...arr)
   }
   console.log(findSmallestNumber([10,2, 20, 5, 30, 15])); // Output: 5

function isValidPalindrome(str) {
let formatedStr = str.replace(/[0-9\s\W_]/g,'').toLowerCase()
let left = 0, right = formatedStr.length - 1

while(left < right){
    if(formatedStr[left] !== formatedStr[right]) return false
    left++
    right--
}

return true
}
console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isValidPalindrome("race a car")); // Output: false


function sumOfEvenNumbers(arr) {
    let res = 0
    for(let num of arr){
        if(num % 2 === 0) res+= num
    }
    
    return res
    
  //   return arr.reduce((sum,num) => num % 2 === 0 ? sum + num : sum, 0)
  }
  console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12


  function firstUniqueChar(str) {
    if(str.length < 1) return null
    
    let letters = {}
    
    for(let char of str){
        letters[char] = (letters[char] || 0) + 1
    }
    
    for(let value of str){
        if(letters[value] === 1) return value
    }
    
    return null
  }
  console.log(firstUniqueChar("leetcode")); // Output: "l"
  console.log(firstUniqueChar("loveleetcode")); // Output: "v"


  function isPerfectSquare(num) {
    if (num < 1) return false;
    
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt); // Check if sqrt is an integer
  }
// var plusOne = function(digits) {
//     let res = digits
//     if(digits[digits.length - 1] != 9){
//         res[res.length - 1] += 1
//         console.log(res[res.length - 1])
//     }
//     else{
//         res[res.length - 1] = 0
//         let i = res.length - 2
//         let needInc = true
//         while(i >= 0){
//             if(res[i] != 9){
//                 res[i] += 1
//                 needInc = false
//                 break
//             }
//             else{
//                 res[i] = 0
//                 i -= 1
//             }
//         }
//         if(needInc){
//             res.unshift(1)
//         }

//     }

//     return res
// };

// console.log(plusOne([8,2,3,9,9]))



// var romanToInt = function(s) {
//     const roman = {
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }

//     let numeric = 0
//     for(let i = 0; i < s.length;i++){
//         if(roman[s[i]] < roman[s[i+1]]){
//             numeric += roman[s[i+1]] - roman[s[i]]
//             i += 1
//         }
//         else{
//             numeric += roman[s[i]] 
//         }
//     }

//     return numeric
// };

// console.log(romanToInt('X'))

var removeDuplicates = function(nums) {
    // var num = nums
    // if(num.length === 0){
    //     return 0
    // }
    // for(let i = 0; i < num.length; i++){
    //     if(num[i] == num[i+1]){
    //         num.splice(i,1)
    //         i -= 1
    //     }
    // }
    // return num.length
    this.nums = nums.sort()
    let i = 0;
    let j = 1; // scouting variable :)
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j--];
            //  console.log(nums[++i] = nums[j--])
        }
        j++;
    }
    return i+1;
};

// console.log(removeDuplicates([-3,-1,0,2,-1,2]))

// var longestCommonPrefix = function(strs) {
//     let value = ''
//     for(let i = 0; i < strs.length; i++){
//        for(let j = 0; j < strs[i].length; j++){
//               if(strs[i][j] != strs[1][j]){
//                 value+= strs[i].slice(0,j)
//               }
//             // console.log(strs[i][j])
//        }
//     }

//     return value
// };

// 

var longestCommonPrefix = function(strs) {
    let j = 0
    let count = 0

    if(strs.length <= 1){
        return strs[0]
    }

    if(strs[0] === ''){
        return strs[0]
    }

    while( j < strs[0].length){
        for(let i = 1; i < strs.length; i++){
            if(strs[0][j] != strs[i][j]){
                count += 1
                return strs[i].slice(0,j)
            }
        }
        j+=1
    }

    return count == 0 ? strs[0] : ''
};

// console.log(longestCommonPrefix(["flower","flower","flight"]))

let array = [2,"_",3,4,"_","_"]

// console.log(array.sort())


var removeElement = function(nums, val) {
    let num = nums
    for (let i = 0; i < nums.length; i++){
        if(num[i] === val){
            num.splice(i,i+1)
        }
    } 
    return num
}
// console.log(removeElement([2,3,3,2],2))


// console.log(array.splice(0,1))

// var isPalindrome = function(s) {
//     let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     let reversedStr = ''
//     for(let i = cleanedStr.length - 1; i >= 0; i--){
//      reversedStr += cleanedStr[i]
//     }
 
//     return cleanedStr === reversedStr ? true : false
//  };

// //  let str = "A man, a plan, a canal: Panama"
//  let str = 'race a car'
//  console.log(isPalindrome(str))



var luckyNumbers  = function(matrix) {
    let array = []
    let max = 0
    for( let i = 0; i < matrix.length; i++){
        for(let j =0; j < matrix[i].length; j++){
            array.push(matrix[j][i])
            max = Math.max(...array)
        }   
        console.log(max)
        
    }

    return ""
};

// let matrix = [[3,7,8],[9,11,13],[15,16,17]]
// let matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// matrix = [[7,8],[1,2]]
// console.log(luckyNumbers(matrix))
// console.log(matrix[1][0])


var isPossibleToSplit = function(nums) {
    let num = nums.sort((n,m)=>{return n-m})
    let num1 = []
    let num2 = []
    let count = 0
    if(nums.length % 2 !== 0){
        return false
    }

    for(let i = 0; i < num.length; i++){
        if( i % 2 === 0){
            num1.push(num[i])
        }else{
            num2.push(num[i])
        }
    }

    for(let j = 0; j < num.length / 2; j++){
        for(let k = 0; k < num.length /2; k++){
            if(j !== k){
                if(num1[j] === num1[k] || num2[j] === num2[k]){
                    count += 1
                }
            }
        }
    }

    return count > 0 ? false : true
};

// console.log(isPossibleToSplit([1,1,2,2,3,4]))

var isArraySpecial = function(nums) {
    let count = 0
    if(nums.length === 1){
        return true
    }

    for(let i = 0; i < nums.length -1 ; i++){
        if(nums[i] % 2 !== 0 && nums[i+1] % 2 !== 0 ){
            console.log(nums[i]+" "+nums[i+1])
            count += 1
        }

        if(nums[i] % 2 === 0 && nums[i+1] % 2 === 0 ){
            return false
        }
    }

    return count > 0 ? false : true
};

// console.log(isArraySpecial([2,1,4]))

var sortArrayByParity = function(nums) {
    const num = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            num.unshift(nums[i])
        }else{
            num.push(nums[i])
        }
    }

    return num
};

// console.log(sortArrayByParity([3,1,2,4]))

var findMaxLength = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0;j < nums.length; j++){
            if(i !== j){
                if(nums[i] === nums[j]){
                    nums.splice(j,1)
                }
            }
        }
    }
    return nums.length
};
// console.log(findMaxLength([0,0,0,1,1,1,0]))

console.log(Math.abs(1))
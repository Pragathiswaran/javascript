// function fruits(){
//     const fruits = [`apple`, `banana`, `cherr`];
//     let count = 0;

//     while (count <fruits.length){
//         console.log(fruits[count]);
//         count++;
//     }
// }

// function sum(){
//     var num1 = 10;
//     var num2 = 35;
//     var sum = num1 + num2;
//     console.log(sum);
// }

// // sum();

// function OddOrEven(){
//     var value = 10.6;

//     if(value % 2 === 0){
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// //OddOrEven();

// function square(){
//     var num = 5.6;
//     var value = num * num;
//     console.log(value.toFixed(2));
// }

// // square();


// function findLargeNumber(){
//     const numbers = [10,56,23,78,66]; 
//     var checkCount = 0;
//     for(var i = 0; i<numbers.length; i++){
//         // if(numbers[i] > checkCount){
//         //     checkCount = numbers[i];
//         // }
//         checkCount = numbers[i] > checkCount ? numbers[i] : checkCount;
//     }

//     console.log(checkCount);
// }

// // findLargeNumber();


// const person = {
//     name:"Pragathis",
//     age:"21",
//     profession:"Developer"
// } 

// function displaySentence(){
//     console.log("My Self "+person.name+" I am "+person.age+" Year old and i am an "+person.profession);
// }

// displaySentence();

const fetchData = async () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    }, 1000)
}

// fetchData().then(data => console.log(data)).catch(error => console.log(error))

const findPrefix = (documents, version) => {
    // console.log('findPrefix called')
    let pattern = `_v${version}_`
    
    let filteredFileName = documents
            .filter(doc => doc.includes(pattern))
            .map(doc => doc.split(pattern)[1])
    
    if(filteredFileName.length === 0) return []
    
    return findCommonPrefix(filteredFileName)
};

const findCommonPrefix = (str) => {
    // console.log('findCommonPrefix called')
    let prefix = str[0]
    
    for(let i = 1; i < str.length; i++){
        while(!str[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1)
            if(!prefix) return []
        }
    }
    
    return prefix
}

let arr = ['_doc1_v1_hello.txt','_doc1_v1_helfo.docs','_doc1_v2_hedlo.txt','_doc1_v1_healo.pdf',]
console.log(findPrefix(arr,1))
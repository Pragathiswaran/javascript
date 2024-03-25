function fruits(){
    const fruits = [`apple`, `banana`, `cherr`];
    let count = 0;

    while (count <fruits.length){
        console.log(fruits[count]);
        count++;
    }
}

function sum(){
    var num1 = 10;
    var num2 = 35;
    var sum = num1 + num2;
    console.log(sum);
}

// sum();

function OddOrEven(){
    var value = 10.6;

    if(value % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

//OddOrEven();

function square(){
    var num = 5.6;
    var value = num * num;
    console.log(value.toFixed(2));
}

// square();


function findLargeNumber(){
    const numbers = [10,56,23,78,66]; 
    var checkCount = 0;
    for(var i = 0; i<numbers.length; i++){
        // if(numbers[i] > checkCount){
        //     checkCount = numbers[i];
        // }
        checkCount = numbers[i] > checkCount ? numbers[i] : checkCount;
    }

    console.log(checkCount);
}

// findLargeNumber();


const person = {
    name:"Pragathis",
    age:"21",
    profession:"Developer"
} 

function displaySentence(){
    console.log("My Self "+person.name+" I am "+person.age+" Year old and i am an "+person.profession);
}

displaySentence();
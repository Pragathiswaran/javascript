const car = ['bmw','audi','mercedies']

const bike = ['pulsar 180', 'pulsar NS 400','pulsar rs 400']

const vehicle = [...car, ...bike]

console.log(vehicle)

function testRestOperator(...input){
    let sum = 0  
    for (let i of input){
        sum += i
    }
    return [input,sum]
}
const num = [1,2,3,4,5,6,7,8,9,10]
console.log(testRestOperator(num,11,12,13))
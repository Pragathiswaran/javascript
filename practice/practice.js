var str = 'praga_';

// var pattern = /^[a-zA-z0-1._%+-]+@gmail.com$/gi;
// var pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
var pattern = /^[a-zA-Z0-9](?!.*__)[a-zA-Z0-9_]{1,14}[a-zA-Z0-9]$/g

try{
    console.lo(str.match(pattern))
}
catch(err){
    console.log(err)
}

// console.log(pattern.test(str))
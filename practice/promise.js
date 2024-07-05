//sequence api call 
// async function fetchApi (){
//     const result = await apiCall()
//     console.log(result)

//     const result1 = await apiCall()
//     console.log(result1)
    
//     const result3 = await apiCall()
//     console.log(result3)
// }

// const apiCall = async()=>{
//      await new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve();
//         }, 1000);
//     });

//     return 'Done'
// }

// fetchApi()


//setTimeout api call
// const messageDelay = async (message,delay)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(message)
//         },delay)
//     })
// }

// messageDelay("success",1000).then(console.log)


//parallel apical
// const apiCall = async()=>{
//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve();
//         }, 1000);
//     });

//     return 'Done'
// }


// async function fetchAPi(){
//     const [result1,result2,result3] = await Promise.all([apiCall(),apiCall(),apiCall()])
//     console.log(result1,result2,result3)
// }

// fetchAPi()

//error handling
const apiCall = async()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(Math.random() > 0.5){
                resolve("success")
           } else {
                reject(new Error("something is wrong"))
           }
        }, 1000);
    });
}


const retries = async(retry = 3)=>{
    for (let i = 0; i < retry; i++){
        try{
            const result = await apiCall();
            // console.log(result);
            return result
        }catch(error){
            if(i === retry-1){
                throw error
            }
            console.log(`Retrying... (${i + 1}/${retry})`);
        }
        
    }
}
async function fetchApi(){
    try{
        const result = await retries()
        console.log(result)
    }catch(error){
        console.log('Error :', error.message)
    }
   
}  
fetchApi()
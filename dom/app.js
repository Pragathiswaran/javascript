const paragraph = document.querySelector("#root");
const buttons =  document.querySelector("#btn");

buttons.addEventListener("click",() =>{
    if(paragraph!== null){
        paragraph.innerHTML = "SUCCESS";
    }
});
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const element = document.querySelector("#value")
const btn3 = document.querySelector("#btn3")

let startValue = 0
btn1.addEventListener("click", function(){
    startValue++;
    element.innerHTML = startValue

    if(startValue == 10){
        element.style.color = "yellow"
    }
    else{
        element.style.color = "black"
    }

})

btn2.addEventListener("click", function(){
    startValue = 0
    element.innerHTML = startValue
})

btn3.addEventListener("click", function(){
    if(startValue >0){
        startValue-=1;
    element.innerHTML = startValue
    
    }

    if(startValue == 10){
        element.style.color = "yellow"
    }
    else{
        element.style.color = "black"
    }
})

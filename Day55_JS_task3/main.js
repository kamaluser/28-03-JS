
let input = document.getElementById("usernameInput");
let isValidUsername=true;

document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    isValidUsername = checkUsername();
})

function checkUsername(){
    input.parentElement.querySelectorAll("span").forEach(elem=>{
        elem.remove();
    })

    let check = true;
    if(input.value.length<3){
        let span = createErrorSpan("Username must be greater or equal than 3")
        input.parentElement.appendChild(span);
        check=false;
    }
    if(input.value.length>20){
        let span = createErrorSpan("Username must be less or equal than 20")
        input.parentElement.appendChild(span);
        check=false;
    }
    return check;
}

function createErrorSpan(message){
    let span = document.createElement("span");
    span.innerText = message;
    span.style.color="red";
    return span;
}

input.addEventListener("input",function(){
    console.log(input.value)
    if(!isValidUsername){
        checkUsername();
    }
})


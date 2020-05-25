//basic math operations
function add(a,b){
    return a+b
};
function subtract(a,b){
    return a-b
};
function multiply(a,b){
    return a*b
};
function divide(a,b){
    return a/b
};

//operate function
function operate(operator,a,b){
    operator(a,b);
};

//Calculator Logic
let inputstring="";

// eventlisteners for button
const nums = Array.from(document.querySelectorAll(".numinp"));
nums.forEach(num => {
    num.addEventListener('click', function(e){
        inputstring+=e.target.value;
        const dtext=document.querySelector(".display");
        dtext.textContent=inputstring;
    });
});
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
    return operator(a,b);
};

//Calculator Logic
let inputstring="";

//Display Text
const dtext=document.querySelector(".display");

// eventlisteners for nums and operators
const nums = Array.from(document.querySelectorAll(".numinp"));
nums.forEach(num => {
    num.addEventListener('click', function(e){
        inputstring+=e.target.value;
        dtext.textContent=inputstring;
    });
});

//eventlistener for clear button
const clear=document.querySelector(".clear");
clear.addEventListener('click',function(e){
    inputstring="0";
    dtext.textContent=inputstring;
    inputstring="";
});

//eventlistener for equal button
const equal=document.querySelector(".equals");
equal.addEventListener('click',function(e){
    let answer=0;
    let breakdown=[];
    let temp="";
    for (let i=0;i<inputstring.length;i++){
        let c=inputstring.charAt(i);
        if (c >= '0' && c <= '9') {
            // it is a digit
            temp+=c;
        } else {
            // it isn't
            breakdown.push(temp);
            temp="";
            breakdown.push(c);
        }
    }
    breakdown.push(temp);
    console.log(breakdown);
    let a=parseFloat(breakdown[0])
    let b=parseFloat(breakdown[2])
    let operator=whichOp(breakdown[1]);
    console.log(operator);
    answer = operate(operator,a,b);
    inputstring=answer;
    dtext.textContent=inputstring;
});

//function to recognize operator
function whichOp(str){
    switch(str) {
        case "+":
            return add;
        case "-":
            return subtract;
        case "/":
            return divide;
        case "*":
            return multiply;
    }
};
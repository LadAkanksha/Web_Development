let val = document.getElementById("result");

//Function to display text in result

function dis(key){
     val = document.getElementById("result").value += key;
};

/// Function to calculate result
a
function calc(){

};

///Function to clear the textbox

function clr(){
    document.getElementById("result").value = "";
};

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x)
    document.getElementById("result").value = y;
}

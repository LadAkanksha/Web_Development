// Question 1

let num = prompt("Enter a Number : ");

if (num % 5 === 0) {
    console.log(num, " is multiple of 5");
}
else {
    console.log(num, " is not multiple of 5");
}

// Question 2

let result = 76;

if (result >= 90) {
    console.log("You have got A Grade");
}
else if (result >= 70 && result <= 89) {
    console.log("You have got B Grade");
}
else if (result >= 60 && result <= 69) {
    console.log("You have got C Grade");
}
else if (result >= 50 && result <= 59) {
    console.log("You have got D Grade");
}
else
{
    console.log("You have got F Grade");
}
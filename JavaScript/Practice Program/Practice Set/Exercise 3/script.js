// Q.1 => Print 0 - 100 all even numbers

// for(let i = 0 ; i <= 100 ; i++)
// {
//     if( i % 2 == 0)
//     {
//         console.log(i);
//     }
// }

//create game 
let number = prompt("Guess the number : ");
let answer = 56;


while(number != answer)
{
    number = prompt("You entered wrong Number !!!Guess again : ");
}
alert("Congratulation !!!You Guess The Number.");


///         Q.1)

function countVowel(str){
    let cnt = 0;
    for(let ltr of str)
    {
        if(ltr == 'a' || ltr == 'A'||ltr == 'e' || ltr == 'E'||ltr == 'i' || ltr == 'I'||ltr == 'o' || ltr == 'O'||ltr == 'u' || ltr == 'U')
        {
            cnt++;
        }
    }
    return cnt;
}

let result = countVowel("India is my country");
console.log(result);


///         Q.2)


countVowel = msg =>{
    let cnt = 0;
    for(let ltr of msg)
    {
        if(ltr == 'a' || ltr == 'A'||ltr == 'e' || ltr == 'E'||ltr == 'i' || ltr == 'I'||ltr == 'o' || ltr == 'O'||ltr == 'u' || ltr == 'U')
        {
            cnt++;
        }
    }
    return cnt;
}

result = countVowel("I like study");
console.log(result);


///     Q.3)

let arr = [1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val+"^2 = "+val*val);
});


///    Q.4)

const marks = [56,82,91,68,95,94,67];

const topper = marks.filter((val) => {
    return val > 90;
});

console.log(topper);


///     Q.5)

let input = prompt("Enter a number : ");

arr = [];

for(let i = 0 ; i < input ; i++)
{
    arr[i] = i+1;
}
console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
});

console.log("Sum is ",sum);


let product = arr.reduce((res,curr) => {
    return res*curr;
});

console.log("Product is ",product);

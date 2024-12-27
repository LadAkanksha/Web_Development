/// Function Definition

function myFunction(num1 , num2){
    let result = num1 + num2;

    return result;
}


/// Function Call

let result = myFunction(5,5);

console.log(result);

/// Arrow Function

const arrowMult = (a,b) => {
    console.log(a*b);
};

console.log(arrowMult);     /// show Function Definition

arrowMult(6,8);             /// 48

/*

            WITHOUT ARROW FUNCTION

    const msg = function(){
        console.log("I Love JavaScript");
    }
    msg();

            WITH ARROW FUNCTION

    const msg = ()=>{
        console.log("I Love JavaScript");
    }
    msg();


*/

///         ARROW FUNCTION WITHOUT PARANTHESIS

    const show = msg =>{
        console.log("I like",msg);
    }
    show("JavaScript");

///     forEach(value , position , array itself) method   - use of parameter is optional.

let cities = ["Delhi" , "Mumbai" , "Pune" , "jaupur"];

cities.forEach(function PrintValue(val,idx,cities){
    console.log(val,idx,cities);
});

let upperCase = (val)=>{
    console.log(val.toUpperCase());
};

cities.forEach(upperCase);

///     map()method     ->      to form new array

let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let newArr = numArr.map((val) => {
    return val*val;
});

console.log(newArr);

///     filter()method      ->   create new array of element that give true for condition

newArr = numArr.filter((val)=>{
    return val%2 === 0;
});

console.log(newArr);


///     reduce() method      -> returns single value

const maxValue = numArr.reduce((res,curr) => {
    if(res > curr)
    {
        return res;
    }
    else
    {
        return curr;
    }
});
console.log(maxValue);
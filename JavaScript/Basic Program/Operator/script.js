//Arithmetic Operator

let Num1 = 15;
let Num2 = 3;

console.log(Num1 +" + "+Num2+" = "+(Num1+Num2));
console.log(Num1 +" - "+Num2+" = "+(Num1-Num2));
console.log(Num1 +" * "+Num2+" = "+(Num1*Num2));
console.log(Num1 +" / "+Num2+" = "+(Num1/Num2));
console.log(Num1 +" % "+Num2+" = "+(Num1%Num2));
console.log(Num1 +" ** "+Num2+" = "+(Num1**Num2));          //Exponentiation
console.log("Num1 = "+Num1+"  Num2 = "+Num2);
Num1++;
console.log("Num1 = "+Num1); 
Num2--;
console.log("Num2 = "+Num2);


//Assignment Operator

let a = 6;
let b = 3;

console.log(Num1 +" += "+Num2+" => "+(Num1+=Num2));
console.log(Num1 +" -= "+Num2+" => "+(Num1-=Num2));
console.log(Num1 +" *= "+Num2+" => "+(Num1*=Num2));
console.log(Num1 +" /= "+Num2+" => "+(Num1/=Num2));
console.log(Num1 +" %= "+Num2+" => "+(Num1%=Num2));
console.log(Num1 +" **= "+Num2+" => "+(Num1**=Num2));

//Comparison Operator

let val1 = "10";
let val2 = 10;
let val3 = 10;
let val4 = 5;

console.log("val1 == val2   ",val1==val2);          //true
console.log("val2 == val3   ",val2==val3);          //true
console.log("val1 != val2   ",val1!=val2);          //false
console.log("val2 == val3   ",val2!=val3);          //false
console.log("val1 === val2  ",val1===val2);         //false
console.log("val2 === val3  ",val2===val3);         //true
console.log("val1 !== val2   ",val1!==val2);        //true
console.log("val2 !== val3   ",val2!==val3);        //false

console.log("val3 > val4    ",val3>val4);
console.log("val3 < val4    ",val3<val4);
console.log("val2 >= val3   ",val2>val3);
console.log("val2 <= val3   ",val2>val3);


///Logical Operator

console.log("val1 === val2 && val1 == val2 ",val1 === val2 && val1 == val2);
console.log("val2 === val3 && val2 == val3 ",val2 === val3 && val2 == val3);
console.log("val1 === val2 || val1 == val2 ",val1 === val2 || val1 == val2);
console.log("!(val2 === val3)",!(val2 === val3));





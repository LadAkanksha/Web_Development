let str = "Akanksha Chandrakant Lad";          //string initialization

console.log(str.length);

console.log(str[7]);

// Template Literal

let sentence = `I Love India`;

console.log(sentence);

const Name = {
    first:"Akanksha",
    middle:"Chandrakant",
    last:"Lad"
};

let res = `My Name is ${Name.first} ${Name.middle} ${Name.last}.`;

console.log(res);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

let user = "  Niku Lad ";

console.log(user.trim());

console.log(str.slice(9,20));

console.log(user.slice(9));

console.log(str.replace("Akanksha","Niku"));

user = user.concat("is a girl.");
console.log(user);

console.log(str.charAt(12));
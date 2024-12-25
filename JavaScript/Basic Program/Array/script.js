let cities = ["Mumbai","Pune","Nagpur","Delhi","Chandigarh"];

console.log(cities.length);


///Using For Loop

for( let i= 0 ; i < cities.length ; ++i)
{
    console.log(cities[i].toUpperCase());
}

///Using For Of Loop

for(let city of cities)
{
    console.log(city);
}


///Usinh For In Loop

for(let city in cities)
{
    console.log(city);
}

/// Array Methods

/// push() -> To add new item in existing array at the end.

cities.push("Banglore","Chennai");

console.log(cities);

/// pop() ->    To remove/delete item from existing array at the end

cities.pop();

console.log(cities);

/// toString  ->  To convert array item into string

console.log(cities.toString());

//concat()  ->  To concate 2 arrays
let country = ["USA","Nepal","Pakistan"];

let combine = cities.concat(country);

console.log(combine);

///  unshift()  ->  To add new item in existing array at the start

cities.unshift("Goa","Karnataka");

console.log(cities);

///  shift()  ->  To delete/remove new item in existing array at the start

cities.shift("Goa");

console.log(cities);

/// slice() ->  To get a particular array element

console.log(cities.slice(2,5));

/// splice()  ->  Used to Add / Remove / Replace array element
/// splice(startindex  , deleteindex , replaceitems)

let num = [1,2,3,4,5,6,7,8];

num.splice(3,2,2005,5002);
console.log(num);

console.log(num.splice(5)); ///If we pass only one parameter then all element after that index are removed.

console.log(num);

num.splice(2,0,100);
console.log(num);

num.splice(1,0,800);       /// To replace array items
console.log(num);

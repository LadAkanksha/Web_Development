const Student = {
    name:"Akanksha",
    surname:"Lad",
    age:22,
    cgpa:9.2,
    isPass:true
}

//For in loop return keys in object such as name,surname,age,cgpa,etc.
for(let key in Student)
{
    console.log("Key : ",key,"  Value: ",Student[key]);
}
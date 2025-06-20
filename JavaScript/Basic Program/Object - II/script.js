///////////////     Array of Object     ///////////////////////

const arr = [
    {fname : "Akanksha",Lname : "Lad" , Age : 23, Gender : "Female"},
    {fname : "Chandrakant",Lname : "Lad" , Age : 50, Gender : "Male"},
    {fname : "Vidya",Lname : "Lad" , Age : 40, Gender : "Female"},
    {fname : "Sushma",Lname : "Gurav" , Age : 23, Gender : "Female"},
    {fname : "Atharv",Lname : "Lad" , Age : 18, Gender : "Male"},
];

console.log(arr);

for(let key in arr)
{
    console.log(arr[key]);
}

const aboutMe = {
    FName : "Akanksha",
    MName : "Chandrakant",
    LName : "Lad",
    Age : 22,
    Gender : "Female",
    favBook : ["Atomic Habit","Wings of Fire" , "Theory of Karma"],
    Fullname : function(){
        return this.FName+" "+this.MName+" "+this.LName;
    }
}

console.log(aboutMe);
console.log(aboutMe.favBook);
console.log(aboutMe.Fullname);
let me = aboutMe.Fullname();
console.log(me);
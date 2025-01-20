///////////////////////////////////////   Create Object   ///////////////////////////////////////////////


const Person = new Object();        // Creating Object with new keyword

Person.Fname = "Niku";
Person.Lname = "Lad";
Person.Age = 23;

for(let key in Person)              // Access Object Properties using FOR IN loop.
{
    console.log(key ," = ",Person[key]);
}

const Car = {                       //  Creating Object with object literals/Initializer.
    Name : "XUV 300",
    Brand : "Mahindra",
    Mileage : 20,
    Fuel_type : "Diesel",
    Feature:{                       //  Creating Nested Object
        Color : "Royal Blue",
        Transmission:"6Gears"
    }
};
//      Above both creation OBJECT LITERAL is better to use than new keyword.
console.log(Car);
console.log(Car["Brand"]);
console.log(Car["Feature"]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//  IN JAVASCRIPT OBJECTS ARE KINGS.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//                  JS OBJECT METHOD                //

const Dog = {
    Name : "Tommy",
    Weight : "15KG",
    Color : "Brown",
    Eyes : "Blue",
    Eat:function(){
        console.log("Tommy eat pedigry");
    },
    Sleep : function(){
        console.log("Tommy sleeps twice in a day");
    }
};

console.log(Dog);
console.log(Dog.Eat);
console.log(Dog["Sleep"]);

Dog.Gender = "Male";            //  Adding Property to Object
Dog.Type = "Huski";
console.log(Dog);
delete Dog.Gender;              //  Deleting Property from Object
delete Dog.Weight;
console.log(Dog);

Dog.data = {                    //  Adding Nested Object
    height : "2ft",
    weight : "18Kg"
};
console.log(Dog);

Dog.About = function(){
    return this.Name +" has "+Dog.data.weight+ " weight and "+Dog.data.height+" height";
}

let info = Dog.About();
console.log(info);
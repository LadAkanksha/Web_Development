
/// Q.1)

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; ++i) {
    sum += marks[i];
}

console.log("Total Marks : ", sum);
sum = sum / marks.length;
console.log("The Average of marks is = ", sum);

///     Q.2)

let items = [250, 645, 300, 900, 50];

console.log(items);
for (let i = 0; i < items.length; ++i)
{
    // items[i] = items[i]-( items[i]/10);
    let value = items[i] - (items[i] / 10);
    items[i] = value;

}
console.log(items);

///     Q.3)

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
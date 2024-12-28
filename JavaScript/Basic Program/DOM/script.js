let ele = document.getElementById("container");
console.log(ele.firstElementChild)
console.log(ele.lastElementChild)
console.log(ele.children)
console.dir(ele)

const myElement = document.getElementById("container");
for(let child of myElement.children)
{
    console.log(child.nodeName);
}

let text = document.getElementById("heading");
console.dir(text);

text.innerText = "DOM Manupulation";

text.innerHTML="<b><i>DOM </i>- Document Object Model</b>";



////////////////////////////////////////////////////////////
///         getAttribute()     -> To get attribute value  //
////////////////////////////////////////////////////////////

const att1 = document.querySelector("h3");
console.log(att1);

let name1 = att1.getAttribute("id");
console.log(name1);

const att2 = document.querySelector("p");
console.log(att2);

let name2 = att2.getAttribute("id");
console.log(name2);

let name3 = att2.getAttribute("name");
console.log(name3);

const att3 = document.querySelector("h1");
console.log(att3);

let name4 = att3.getAttribute("id");
console.log(name4);



/////////////////////////////////////////////////////////////
//    setAttribute(attr,value)   -> To set attribute value //
/////////////////////////////////////////////////////////////

const para = document.querySelector("p");
console.log(para);

console.log(para.setAttribute("name","text"));



//////////////////////////////////////////////////////////
//  createElement()     -> to create new element        //
//////////////////////////////////////////////////////////

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("#container");
div.append(newBtn);

let newlabel = document.createElement("h1");
newlabel.innerHTML = "<b>JavaScript</b>";

document.querySelector("body").prepend(newlabel);


/////////////////////////////////////////////////////////
//                  Access Style                       //
/////////////////////////////////////////////////////////

let change = document.querySelector("#box");
change.style.color = "pink";
change.style.backgroundColor = "darkviolet";


////////////////////////////////////////////////////////
//           remove()   -> Remove Node                //
////////////////////////////////////////////////////////

change = document.querySelector("p");
change.remove();
change = document.querySelector("h1");
change.remove();
change = document.querySelector("h3");
change.remove();
let btn = document.querySelector("button");

// btn.onclick = ()=>{
//     alert("You clicked button");
// }

let box = document.querySelector("div");

box.onmouseover = (event) => {
    box.innerText = "Welcome in JS Events";
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX , event.clientY);
}

btn.addEventListener("click",(event)=>{
    console.log("You Click The Button");
    console.log(event.type);
    console.log(event.target);
})

box.addEventListener("dblclick",()=>{
    alert("You click this box twice");
})

let handler2 = () => {
    console.log("button was clicked - Handler2");
};

btn.addEventListener("click",()=>{
    console.log("button was clicked - Handler1");
})
btn.addEventListener("click",handler2)
btn.addEventListener("click",()=>{
    console.log("button was clicked - Handler3");
})
btn.addEventListener("click",()=>{
    console.log("button was clicked - Handler4");
})

btn.removeEventListener("click",handler2);





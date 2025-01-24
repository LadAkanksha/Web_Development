let btn = document.querySelector("button");
let body = document.querySelector("body");
let mode = "light";

btn.addEventListener("click",() => {
    
    // if( mode === "light")
    // {
    //     mode = "dark";
    //     document.querySelector("body").style.backgroundColor = "black";
    // }
    // else
    // {
    //    mode = "light";
    //     document.querySelector("body").style.backgroundColor = "white";
    // }

    if( mode === "light")
        {
            mode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else
        {
           mode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
    console.log(mode);
})

let heading = document.querySelector("h1");

heading.addEventListener("mouseover",() => {
    heading.style.visibility = "hidden";
})

heading.addEventListener("mouseleave",()=>{
    heading.style.visibility = "visible";
})
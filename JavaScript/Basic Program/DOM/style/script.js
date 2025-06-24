let divs = document.querySelectorAll(".boxes");
// divs.style.backgroundColor = "lightblue";

for(div of divs)
{
    console.log(div);
    div.style.backgroundColor="lightpink";
}

function hide(d){
     d.style.visibility = "hidden"; 
}

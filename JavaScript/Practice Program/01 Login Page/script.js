function myFunction(){
let unm = document.querySelector("#username");
console.log(unm.value)
let pwd = document.querySelector("#password");
console.log(pwd);


    if(unm.value === "" || pwd.value === "")
    {
        alert("Please fill Username or Password");
    }
    else if(unm.value == "Niku" && pwd.value == "1234")
    {
        alert("Login Successfully");
    }
    else
    {
        alert("Please fill correct Username or password !!!")
    }
}
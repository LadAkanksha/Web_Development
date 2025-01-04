function myFunction(){
    let x = document.getElementById('num').value;
    let fact = 1;
    if(x <= 0)
    {
        document.getElementById('result').innerHTML = "Please Enter Positive value !!!";

    }
    else
    {
        for(let i = 1 ; i <= x ; ++i)
        {
            fact *= i;
        }
        document.getElementById('result').innerHTML = "Factorial of "+x+" is "+fact;
    }
}
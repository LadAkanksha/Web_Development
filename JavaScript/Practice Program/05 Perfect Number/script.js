function myFunction(){
    var n = document.getElementById('num').value;
    var sum = 0;

    for(let i = 0 ; i < n ; i++)
    {
        if(n%i == 0 )
        {
            sum += i;
        }
    }

    if(sum == n)
    {
        alert("Number is Perfect");
    }
    else if(sum > n)
    {
        alert("The Number is Abundant");
    }
    else 
    {
        alert("The Number is Deficient");
    }
}
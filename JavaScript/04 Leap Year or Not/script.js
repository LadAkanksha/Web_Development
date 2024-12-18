function myFunction(){
    let year = document.getElementById('num').value;

    if(year % 4 == 0)
    {
        document.getElementById('result').innerHTML = year +" is Leap Year";
    }
    else
    {
        document.getElementById('result').innerHTML = year +" is Not Leap Year";
    }
}
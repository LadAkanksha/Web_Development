function myFunction(){
    let x = document.getElementById('num').value;
    let n1 = 1 , n2 = 0 , n3 = 0;
    
    console.log(n2);
    

    for(let i = 1 ; i <= x ; ++i)
    {
        console.log(n3);
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
    }
}
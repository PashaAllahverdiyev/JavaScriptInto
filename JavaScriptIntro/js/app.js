let date = new Date();
let x = date.getHours();

if(x>=5 && x<=11){
    alert('Good Morning')
    document.body.style.backgroundColor = "blue"
}else if (x>11 && x<=17){
    alert('Good Afternoon')
    document.body.style.backgroundColor = "yellow"
}else if(x>17 && x<5){
    alert('Good Evening')
    document.body.style.backgroundColor = "black"
}


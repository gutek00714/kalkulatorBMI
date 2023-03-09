//wyświetlanie losowego obrazka
onload=function(){
let j=Math.floor(Math.random()*4);

document.querySelector("#zdjecia").innerHTML="<img src='zdjęcia/BMI_"+j+".jpg' width='1000px' height='500px'/>";
}
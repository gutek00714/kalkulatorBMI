//zegar
function wypisz(){
    const moj=new Date();
    //document.querySelector("#zegar").innerHTML="Aktualny czas: <br>"+moj.toLocaleTimeString()+"<br>"+moj.toLocaleDateString();

    if (moj.getHours()<6){
        document.querySelector("#zegar").innerHTML="Aktualny czas: <br>"+moj.toLocaleTimeString('en-GB')+"<br>"+moj.toLocaleDateString()+ "<img src='zdjęcia/noc.jpg'/>";
    }
    else if(moj.getHours()>6 && moj.getHours()<12){
        document.querySelector("#zegar").innerHTML="Aktualny czas: <br>"+moj.toLocaleTimeString('en-GB')+"<br>"+moj.toLocaleDateString()+ "<img src='zdjęcia/rano.jpg'/>";
    }
    else if(moj.getHours()>12 && moj.getHours()<18){
        document.querySelector("#zegar").innerHTML="Aktualny czas: <br>"+moj.toLocaleTimeString('en-GB')+"<br>"+moj.toLocaleDateString()+ "<img src='zdjęcia/dzien.jpg'/>";
    }
    else{
        document.querySelector("#zegar").innerHTML="Aktualny czas: <br>"+moj.toLocaleTimeString('en-GB')+"<br>"+moj.toLocaleDateString()+ "<img src='zdjęcia/wieczor.jpg'/>";
    }
}
window.addEventListener('load', function(){
    this.setInterval("wypisz()",1000);
})



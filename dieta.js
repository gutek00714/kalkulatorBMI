//dodawanie do siebie spożytych kalorii danego dnia
window.onload = () => {
    let button = document.querySelector("#button");
  
    button.addEventListener("click", dodawanie);
};

function dodawanie(){
    let sniadanie = parseInt(document
        .querySelector("#sniadanie").value);

    let obiad = parseInt(document
        .querySelector("#obiad").value);

    let kolacja = parseInt(document
        .querySelector("#kolacja").value);

    var x = document.getElementById("mySelect").value;
   
    var y = document.getElementById("mySelect1").value;

    var z = document.getElementById("mySelect2").value;
   
    let result = document.querySelector("#wynik");

    let dieta = ((sniadanie*x) + (obiad*y) + (kolacja*z));

    result.innerHTML = `W ciągu dnia spożyłeś: <span>${dieta}</span> kalorii.`;
}
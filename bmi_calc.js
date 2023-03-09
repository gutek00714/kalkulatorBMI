//przeliczanie BMI
window.onload = () => {
    let button = document.querySelector("#button");
  
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    let height = parseInt(document
            .querySelector("#wysokosc").value);
  
    let weight = parseInt(document
            .querySelector("#waga").value);
  
    let result = document.querySelector("#wynik");

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Podaj poprawny wzrost!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Podaj poprawną wagę!";
  
    else {

        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(4);
  
        if (bmi < 16.0) result.innerHTML =
            `<p style="color:red;">Wygłodzenie : <span>${bmi}</span>`+ "<br><img src='zdjęcia/wyglodzenie.jpg'/></br></p>";
  
        else if (bmi >= 16.0 && bmi < 16.99) 
            result.innerHTML = 
                `<p style="color:red;">Wychudzenie : <span>${bmi}</span>`+ "<br><img src='zdjęcia/wyglodzenie.jpg'/></br></p>";

        else if (bmi >= 17.0 && bmi < 18.49) 
            result.innerHTML = 
                `<p style="color:orange;">Niedowaga : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/wyglodzenie.jpg'/></br></p>";

        else if (bmi >= 18.5 && bmi < 24.99) 
            result.innerHTML = 
                `<p style="color:green;">Wartość prawidłowa : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/prawidlowa.jpg'/></br></p>";

        else if (bmi >= 25.0 && bmi < 29.99) 
            result.innerHTML = 
                `<p style="color:orange;">Nadwaga : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/nadwaga.jpg'/></br></p>";

        else if (bmi >= 30.0 && bmi < 34.99) 
            result.innerHTML = 
                `<p style="color:red;">I stopień otyłości : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/otylosc1.jpg'/></br></p>";

        else if (bmi >= 35.0 && bmi < 39.99) 
            result.innerHTML = 
                `<p style="color:red;">II stopień otyłości : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/otylosc2.jpg'/></br></p>";
  
        else result.innerHTML =
            `<p style="color:red;">III stopień otyłości : <span>${bmi}</span>`+ "<br></br><img src='zdjęcia/otylosc2.jpg'/></br></p>";
    }
}
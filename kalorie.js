
let k_min =1800;
let k_max=2400;
let m_min=2500;
let m_max=3500;
let min=500;
let max=10000;


function kalorie(form){
    let result = document.querySelector("#wynik");
    let check = parseInt(form.dzienna.value);
    let ilosc = document.querySelector("#ilosc");
    ilosc.innerHTML = `<p>Twoja dzienna ilość kcal to: <span>${check}</span>`;
    if(check >=min && check <=max){
        var plec = document.querySelector("input[name='plec']:checked").value;
        console.log(plec);
        if(plec ==0){
            if(check >= k_min && check <= k_max){
                result.innerHTML = `<p>Prawidłowa ilość kcal</p>`
            }
            else if(check < k_min){
                result.innerHTML = `<p>Za mała liczba kcal</p>`
            }
            else{
                result.innerHTML = `<p>Za duża liczba kcal</p>`
            }
        }
        else if(plec ==1){
            if(check >= m_min && check <= m_max){
                result.innerHTML = `<p>Prawidłowa ilość kcal</p>`
            }
            else if(check < m_min){
                result.innerHTML = `<p>Za mała liczba kcal</p>`
            }
            else{
                result.innerHTML = `<p>Za duża liczba kcal</p>`
            }
        }
        else{
            result.innerHTML = `<p>Nie wybrano płci</p>`
        }
    }
    else{
        result.innerHTML = `<p>Niemożliwa wartość</p>`
    }
    
}
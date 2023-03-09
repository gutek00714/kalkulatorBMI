//dodanie bazy danych oraz stworzenie tabeli
var db = openDatabase('moje', '1.0', 'postepy', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE mytable (waga text, wzrost text, bmi text, data_badania date)');
});


//uzupełnienie tabeli
function insertData(waga, wzrost, bmi){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO mytable (waga, wzrost, bmi, data_badania) VALUES (?,?,?,?)',[waga, wzrost, bmi, Date.now()]);
});}

function accessData(){
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM mytable ORDER BY data_badania DESC', [], function(tx, results){
            var x = document.getElementById("tabela");
            for (const i of results.rows){
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.innerText = i.waga;
                tr.append(td1);
                let td2 = document.createElement("td");
                td2.innerText = i.wzrost;
                tr.append(td2);
                let td3 = document.createElement("td");
                td3.innerText = i.bmi;
                tr.append(td3);
                let td4 = document.createElement("td");
                td4.innerText = new Date(i.data_badania).toString();
                tr.append(td4);
                x.append(tr);
            } 
        });
    });
}

function insertData2(form){
    let height = parseInt(form.wzrost.value);

    let weight = parseInt(form.waga.value);

    let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(4);
    
    insertData(weight, height, bmi);
    console.log(height,weight,bmi);
}

window.addEventListener('load', function(){
    accessData();
})
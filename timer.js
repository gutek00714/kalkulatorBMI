var countDownDate = new Date("Jul 25, 2022 16:37:52").getTime();

    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
//przeliczanie czasu z ms na dni, godziny, minuty, sekundy
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        

    document.getElementById("days").innerHTML = days + " dni "
    document.getElementById("hours").innerHTML = hours + " godzin " 
    document.getElementById("mins").innerHTML = minutes + " minut " 
    document.getElementById("secs").innerHTML = seconds + " sekund " 

    }, 1000);
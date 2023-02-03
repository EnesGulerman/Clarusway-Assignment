var hours = document.getElementById("hrs");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var seasion = document.getElementById("seasion")

var digitalClock = setInterval(
    function time(){
        var dateTime = new Date();
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var seconds = dateTime.getSeconds();


        if(hours >= 12){
            seasion.innerHTML = 'PM';
            }else{
            seasion.innerHTML = 'AM';
            }
        if(hours < 10){
            hours = ("0" + hours);
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        hrs.textContent = hours;
        min.textContent = minutes;
        sec.textContent = seconds;
    }, 1000
);

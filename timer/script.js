'use strict'

let deadline = "2021-07-20";
 console.log(deadline);

function getTimeRemaining(endtime){
    let t = Date.parse(endtime)-Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours   = Math.floor((t/1000/60/60)%60);

        return {
            'total':t,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
}

function setClock(id, endtime){
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInt = setInterval(updateClock,1000);
        
        function updateClock(){
            let t = getTimeRemaining(endtime);
                hours.textContent   = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            if(t.total<=0){
                clearInterval(timeInt);
            }
        }
    }
    setClock('timer', deadline);
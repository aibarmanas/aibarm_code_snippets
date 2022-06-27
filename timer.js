//Simple  timer functionality

let theInterval, timerSec = 0, timerMin = 0, timerTime = "00 : 00";

function startTimer(){
    theInterval = setInterval(() => {
        timerSec++;
        let secondsPrint = timerSec.toString();
        if(timerSec <10 )secondsPrint = "0" + timerSec;
        if(timerSec == 60)secondsPrint="00";

        if(timerSec == 60)timerMin++;
        if(timerSec == 60)timerSec=0;

        let minutesPrint = timerMin.toString();
        if(timerMin <10 )minutesPrint = "0" + timerMin;
        if(timerMin == 0)minutesPrint="00";
        timerTime = minutesPrint + " : " + secondsPrint;
        //Place change to html timer element here
    }, 1000);
}

function pauseTimer(){
    clearInterval(theInterval);
}

function clearTimer(){
    timerSec = 0;
    timerMin = 0;
    timerTime = '00 : 00';
}

// Initially made for client's project
// Need to expand on it
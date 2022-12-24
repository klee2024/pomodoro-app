// code adapted from Tyler Potts' tutorial: https://www.youtube.com/watch?v=49f1cjZWRJA

// global variables
const timer = document.querySelector('.timer');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

let input_minutes = 25;
let totalTime = input_minutes * 60;

// Event listeners
start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset);

// updates the timer
function run_timer(){
    // converting minutes to seconds
    seconds ++;
    remainingTime = totalTime - seconds;

    let mins = Math.floor(remainingTime / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
    // check this 
    //secs = seconds;
    let secs = Math.floor(remainingTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
    timer.innerHTML = `
     <div>${mins}</div>
     <div class = "colon">:</div>
     <div>${secs}</div>
     `

     if (remainingTime <= 0){
        timer.innerHTML = `
        <div>00</div>
        <div class = "colon">:</div>
        <div>00</div>
        `
        pause();
        reset();
     }
}

function start(){
    if (interval){
        return 
    }

    interval = setInterval(run_timer, 1000);
}

function pause(){
    clearInterval(interval);
    interval = null; 
}

// reset function not working properly - doesn't fully restart from 0 
function reset(){
    pause();
    seconds = 0;
    timer.innerHTML = `
    <div>${input_minutes}</div>
    <div class = "colon">:</div>
    <div>00</div>
    `
}



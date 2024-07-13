function make_bubble(){
    var bubble=document.querySelector("#box-bottom");
    var clutter="";
    for(var i=1;i<=102+17;i++){
        var val=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${val}</div>`;
    }
    bubble.innerHTML=clutter;
}

var timer=60;
function runTimer(){
    var time=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#box-bottom").innerHTML=`
            <h1>Game Over</h1>
            <h2> Total Score=${score}</h2>
            <button id="tryAgainBtn">Try Again</button>`

            document.querySelector("#tryAgainBtn").addEventListener("click",function(){
                resetGame();
                
            })
        }

    },1000);
}

var rn=0;
function changeHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=rn;
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

// Ab hamare pass Bhaut saare bubbles hai sur sab pe event listener lagana bahut mushkil hai isliye ham yaha event bubbling ka use karenge
// event bubbling ka concept kehta hai ki agar child pe eventlistener nhi hai tho parent pe check hoga 

document.querySelector("#box-bottom").addEventListener("click",function(dets){
    var clickedNumber=Number(dets.target.textContent);
    if(clickedNumber==rn){
        increaseScore();
        changeHit();
        make_bubble();
    }
})

function resetGame() {
    // Add any logic needed to reset the game state
    timer = 60; // Reset timer
    score = 0; // Reset score
    document.querySelector("#timerVal").textContent=timer;
    document.querySelector("#scoreVal").textContent = score; // Update score display
    runTimer(); // Start the timer again
    make_bubble(); // Create initial bubbles
    changeHit(); // Change the target number
}

runTimer();
make_bubble();
changeHit();

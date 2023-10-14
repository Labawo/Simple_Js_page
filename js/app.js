function showMoreFunction(morebutton, text, lessbutton)
{
    var mb = document.getElementById(morebutton);
    mb.style.display = "none";
    var tx = document.getElementById(text);
    tx.style.display = "block";
    var lb = document.getElementById(lessbutton);
    lb.style.display = "flex";
}

function showLessFunction(morebutton, text, lessbutton)
{
    var mb = document.getElementById(morebutton);
    mb.style.display = "flex";
    var tx = document.getElementById(text);
    tx.style.display = "none";
    var lb = document.getElementById(lessbutton);
    lb.style.display = "none";
}

let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let ressetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i) {
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
});

function updateStats(){
    document.querySelector("#heads-count")
    .textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count")
    .textContent = `Tails: ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

ressetBtn.addEventListener("click", () => {
    coin.style.transform = "rotateX(0)";
    heads = 0;
    tails = 0;
    updateStats();
})

function do_test(test) {
    set_question(test)
    window.open('quiz.html', '_blank');
}

var jobs = document.querySelectorAll('.jobs');

let i = 0;

jobs.forEach(job => {
    if(i % 2 != 0){
        job.classList.toggle("right");
    }
    i++;
});
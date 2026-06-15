// ==========================
// COUNTDOWN
// ==========================

const startDate = new Date(
    "2025-12-12T09:40:00"
);

const paragraphs = [

`Makasih ya sayangku sudah hadir dalam hidupku.`,

`Mungkin tidak setiap hari berjalan sempurna, tetapi banyak hari terasa lebih baik karena ada kamu di dalamnya sayang.`,

`Aku menghargai setiap waktu, cerita, dan hal-hal sederhana yang sudah kita lewati bersama sayang.`,

`Semoga apa pun yang datang ke depan, kita tetap bisa saling mendukung dan menguatkan satu sama lain ya sayang.`,

`Love You Sayangku ❤️`,

`Your Boyfriend`

];

const target =
document.getElementById("loveLetter");

let currentParagraph = 0;

function typeParagraph(text, callback){

    let i = 0;

    target.classList.add(
    "typing-cursor"
    );

    const interval =
    setInterval(()=>{

        target.innerHTML +=
        text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(interval);

            target.innerHTML +=
            "<br><br>";

            setTimeout(()=>{

                callback();

            },1200);
        }

    },35);
}

function showNextParagraph(){

    if(
        currentParagraph <
        paragraphs.length
    ){

        typeParagraph(

            paragraphs[
            currentParagraph
            ],

            ()=>{

                currentParagraph++;

                showNextParagraph();

            }

        );

    }else{

        target.classList.remove(
        "typing-cursor"
        );
    }
}

setTimeout(
    showNextParagraph,
    2000
);

function updateTimer(){

    const now = new Date();

    const diff =
        now.getTime() -
        startDate.getTime();

    const days =
        Math.floor(
            diff / 86400000
        );

    const hours =
        Math.floor(
            (diff % 86400000)
            / 3600000
        );

    const minutes =
        Math.floor(
            (diff % 3600000)
            / 60000
        );

    document.getElementById(
        "timer"
    ).innerHTML =

    `
    ❤️ Bersama selama
    <br><br>
    ${days} Hari
    ${hours} Jam
    ${minutes} Menit
    `;
}

updateTimer();

setInterval(
    updateTimer,
    1000
);


// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

    const heart =
        document.createElement("div");

    const icons = [
        "❤️",
        "✨",
        "💕"
    ];

    heart.classList.add("heart");

    heart.innerHTML =
        icons[
            Math.floor(
                Math.random()*icons.length
            )
        ];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
    (12 + Math.random()*14) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(
    createHeart,
    350
);

const text =
"For My Love ❤️";

let i = 0;

function type(){

    if(i < text.length){

        document
        .getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(type,100);
    }
}

type();


const playBtn =
document.getElementById("playBtn");

const music =
document.getElementById("music");

playBtn.onclick = () => {

    music.play();

    playBtn.style.display = "none";
};



function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days =
    Math.floor(diff/86400000);

    const hours =
    Math.floor(
    (diff%86400000)/3600000);

    const minutes =
    Math.floor(
    (diff%3600000)/60000);

    const seconds =
    Math.floor(
    (diff%60000)/1000);

    document.getElementById("days").innerText =
    days;

    document.getElementById("hours").innerText =
    hours;

    document.getElementById("minutes").innerText =
    minutes;

    document.getElementById("seconds").innerText =
    seconds;
}

setInterval(updateCounter,1000);
updateCounter();
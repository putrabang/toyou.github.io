// SCROLL REVEAL
document.body.style.overflow = "hidden";

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  const trigger =
    window.innerHeight * 0.85;

  reveals.forEach(el => {

    const top =
      el.getBoundingClientRect().top;

    if(top < trigger){

      el.classList.add("active");
    }
  });
}



window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

const ending =
document.querySelector(".ending-screen");

const locked =
document.querySelector(".locked-message");


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

if(glow){

  document.addEventListener(
    "mousemove",
    (e)=>{

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";

    }
  );
}


// CONFETTI

const canvas =
document.getElementById("confetti");

const ctx =
canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let confetti = [];

function createConfetti(){

  confetti = [];

  for(let i=0;i<200;i++){

    confetti.push({

      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,

      size:Math.random()*8+4,

      speed:Math.random()*3+1,

      color:`hsl(${Math.random()*360},
      100%,50%)`
    });
  }
}

function animate(){

  ctx.clearRect(0,0,
  canvas.width,canvas.height);

  confetti.forEach(p=>{

    ctx.fillStyle=p.color;

    ctx.fillRect(
      p.x,p.y,
      p.size,p.size
    );

    p.y += p.speed;

    if(p.y > canvas.height){
      p.y = -20;
    }
  });

  requestAnimationFrame(animate);
}


// REMOVE LOADER

window.addEventListener("load",()=>{

  document.body.style.overflow = "auto";

});



animate();

// PREMIUM COUNTDOWN

const targetDate =
new Date("2026-05-30T03:00:00");

function updateCountdown(){

  const now = new Date();

  const diff =
  targetDate - now;

  if(diff <= 0){

    document.querySelector(".countdown-box").innerHTML = `
    <div style="
    font-size:2rem;
    font-weight:bold;
    color:#facc15;
    ">
    🎓 Hari Wisuda Telah Tiba!
    </div>
    `;

    return;
  }

  const days =
  Math.floor(
  diff/(1000*60*60*24)
  );

  const hours =
  Math.floor(
  (diff%(1000*60*60*24))
  /(1000*60*60)
  );

  const minutes =
  Math.floor(
  (diff%(1000*60*60))
  /(1000*60)
  );

  const seconds =
  Math.floor(
  (diff%(1000*60))
  /1000
  );

  document.getElementById(
  "days").textContent = days;

  document.getElementById(
  "hours").textContent = hours;

  document.getElementById(
  "minutes").textContent = minutes;

  document.getElementById(
  "seconds").textContent = seconds;
}

updateCountdown();

setInterval(
updateCountdown,
1000
);

// ======================
// SECRET GATE
// ======================

const gateScreen =
document.getElementById(
"gate-screen"
);

const gateCountdown =
document.getElementById(
"gateCountdown"
);

const unlockBtn =
document.getElementById(
"unlockBtn"
);

const secretDate =
document.getElementById(
"secretDate"
);

const errorText =
document.getElementById(
"errorText"
);

// GANTI JIKA PERLU
const anniversary =
"hijau";

const graduationDate =
new Date("2026-05-30T03:00:00");

console.log(new Date());
console.log(graduationDate);

if(
  localStorage.getItem(
    "graduationUnlocked"
  ) === "true"
){

  gateScreen.classList.add(
    "hide"
  );

}

function unlockWebsite(){

  localStorage.setItem(
    "graduationUnlocked",
    "true"
  );

  errorText.innerHTML =
  "❤️ Benar...";

  setTimeout(()=>{

    gateScreen.classList.add(
      "hide"
    );

  },1500);
}

function updateGateCountdown(){

  const now =
  new Date();

  const diff =
  graduationDate - now;

  if(diff <= 0){

    unlockWebsite();
    return;
  }

  const days =
  Math.floor(
  diff/(1000*60*60*24)
  );

  const hours =
  Math.floor(
  (diff%(1000*60*60*24))
  /(1000*60*60)
  );

  const minutes =
  Math.floor(
  (diff%(1000*60*60))
  /(1000*60)
  );

  const seconds =
  Math.floor(
  (diff%(1000*60))
  /1000
  );

  gateCountdown.innerHTML =

  `${days}H ${hours}J ${minutes}M ${seconds}D`;
}

updateGateCountdown();

setInterval(
updateGateCountdown,
1000
);

unlockBtn.addEventListener(
"click",
()=>{

  const value =
  secretDate.value.trim();

  if(
    value === anniversary
  ){

    unlockWebsite();

  }else{

    errorText.innerHTML =

    "❤️ wkwkw kena tipu :p, hintnya salah satu warna kesukaan kamu ko.";
  }
});

secretDate.addEventListener(
"keypress",
(e)=>{

  if(e.key==="Enter"){

    unlockBtn.click();
  }
});

const finalContent =
document.getElementById("finalContent");

if(new Date() < graduationDate){

  finalContent.classList.add("locked");

}else{

  finalContent.classList.add("unlocked");
}

const blurOverlay =
document.getElementById(
"blurOverlay"
);

if(new Date() < graduationDate){

  finalContent.classList.add(
    "locked"
  );

}else{

  finalContent.classList.add(
    "unlocked"
  );

  blurOverlay.classList.add(
    "hide"
  );
}

const quoteSection =
document.getElementById("quoteSection");

const letterSection =
document.getElementById("letterSection");

const gallerySection =
document.getElementById(
  "gallerySection"
);

if(new Date() < graduationDate){

  quoteSection.classList.add(
    "locked-content"
  );

  letterSection.classList.add(
    "locked-content"
  );

  gallerySection.classList.add(
    "locked-content"
  );

}else{

  quoteSection.classList.add(
    "unlocked"
  );

  letterSection.classList.add(
    "unlocked"
  );

  gallerySection.classList.add(
    "unlocked"
  );
}

const confettiBtn =
document.getElementById("confettiBtn");

confettiBtn.style.display = "none";

if(new Date() >= graduationDate){

  confettiBtn.style.display = "inline-block";

}

if(new Date() >= graduationDate){

  confettiBtn.classList.add("show");

}

confettiBtn.addEventListener(
  "click",
  ()=>{

    createConfetti();

    ending.classList.add(
      "show"
    );

  }
);

confettiBtn.addEventListener(
  "click",
  async ()=>{

    createConfetti();

    // Fade out lagu pertama

    let fadeOut =
    setInterval(()=>{

      if(mainMusic.volume > 0.05){

        mainMusic.volume -= 0.05;

      }else{

        clearInterval(fadeOut);

        mainMusic.pause();

        mainMusic.currentTime = 0;

      }

    },200);

    setTimeout(async ()=>{

      endingMusic.volume = 0.5;

      try{

        await endingMusic.play();

      }catch(err){}

      ending.classList.add(
        "show"
      );

    },2000);

  }
);

const mainMusic =
document.getElementById("mainMusic");

const endingMusic =
document.getElementById("endingMusic");

const startBtn =
document.querySelector(".btn");

startBtn.addEventListener(
  "click",
  async ()=>{

    try{

      mainMusic.volume = 0.4;

      await mainMusic.play();

    }catch(err){

      console.log(err);

    }

  }
);

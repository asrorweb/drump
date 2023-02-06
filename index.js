let btns = document.querySelectorAll(".drum");
let startBtn = document.querySelector(".start");
let letter = document.querySelector(".letter");

let lettersArray = ["w", "a", "s", "d", "j", "k", "l"];

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    letter.style.display = "block";

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let letterRandom =
                lettersArray[Math.floor(Math.random() * lettersArray.length)];

            if (letter.textContent == e.target.textContent) {
                e.target.classList.add("game-complite");

                setTimeout(() => {
                    e.target.classList.remove("game-complite");
                }, 300);
            } else {
                e.target.classList.add("game-over");

                setTimeout(() => {
                    e.target.classList.remove("game-over");
                }, 600);
            }
            letter.textContent = letterRandom;

            audiolocation(e.target.textContent);
            audioClickAnimation(btn);
        });
    });

    document.body.addEventListener("keydown", (e) => {
        btns.forEach((btn) => {
            if (btn.textContent == e.key) {
                let letterRandom =
                    lettersArray[
                        Math.floor(Math.random() * lettersArray.length)
                    ];

                if (letter.textContent == e.key) {
                    btn.classList.add("game-complite");

                    setTimeout(() => {
                        btn.classList.remove("game-complite");
                    }, 300);
                } else {
                    btn.classList.add("game-over");

                    setTimeout(() => {
                        btn.classList.remove("game-over");
                    }, 600);
                }
                letter.textContent = letterRandom;

                audiolocation(e.key);
                audioClickAnimation(btn);
            }
        });
    });
});

function audiolocation(id) {
    let audioLink;
    switch (id) {
        case "w":
            audioLink = "sounds/crash.mp3";
            break;
        case "a":
            audioLink = "sounds/kick-bass.mp3";
            break;
        case "s":
            audioLink = "sounds/snare.mp3";
            break;
        case "d":
            audioLink = "sounds/tom-1.mp3";
            break;
        case "j":
            audioLink = "sounds/tom-2.mp3";
            break;
        case "k":
            audioLink = "sounds/tom-3.mp3";
            break;
        case "l":
            audioLink = "sounds/tom-4.mp3";
            break;
    }

    let audio = new Audio(`${audioLink}`);
    audio.play();
}

function audioClickAnimation(clickKey) {
    clickKey.classList.add("pressed");

    setTimeout(() => {
        clickKey.classList.remove("pressed");
    }, 100);
}

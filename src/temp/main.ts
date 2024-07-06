import '../style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <body>
        <div class="container">
            <div class="stats">
                <p id="heads-count">Heads: 0</p>
                <p id="tails-count">Tails: 0</p>
            </div>
            <div class="coin" id="coin">
                <div class="heads">
                    <img src="./heads.svg">
                </div>
                <div class="tails">
                    <img src="./tails.svg">
                </div>
            </div>
            <div class="buttons">
                <button id="flip-button">
                    Flip Coin
                </button>
                <button id="reset-button">
                    Reset
                </button>
            </div>
        </div>
   </body>
`

let heads = 0;
let tails = 0;
const coin = document.querySelector(".coin") as HTMLElement;
const flipBtn = document.querySelector("#flip-button") as HTMLButtonElement;
const resetBtn = document.querySelector("#reset-button") as HTMLButtonElement;

flipBtn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(() => {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    const headsCount = document.querySelector("#heads-count") as HTMLElement;
    const tailsCount = document.querySelector("#tails-count") as HTMLElement;
    headsCount.textContent = `Heads: ${heads}`;
    tailsCount.textContent = `Tails: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    flipBtn.disabled = false;
    updateStats();
});

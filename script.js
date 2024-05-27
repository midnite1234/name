let watermelons = 0;
let energy = 100;

const watermelonImage = document.getElementById('watermelon');
const watermelonsSpan = document.getElementById('watermelons');
const energySpan = document.getElementById('energy');

watermelonImage.onclick = () => {
    if (energy > 0) {
        watermelons += 1;
        energy -= 1;
        updateStats();
        showFloatingNumber(watermelonImage);
    } else {
        alert("У тебя закончилась энергия!");
    }
};

function updateStats() {
    watermelonsSpan.innerText = watermelons;
    energySpan.innerText = energy;
}

function resetGame() {
    watermelons = 0;
    energy = 100;
    updateStats();
}

function showFloatingNumber(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    const floatingNumber = document.createElement('div');
    floatingNumber.innerText = '+1';
    floatingNumber.className = 'floating-number';
    floatingNumber.style.left = `${x}px`;
    floatingNumber.style.top = `${y}px`;
    document.body.appendChild(floatingNumber);

    floatingNumber.addEventListener('animationend', () => {
        floatingNumber.remove();
    });
}

setInterval(() => {
    if (energy < 100) {
        energy += 5
        if (energy > 100) {
            energy = 100;
        }
        updateStats();
    }
}, 2000);
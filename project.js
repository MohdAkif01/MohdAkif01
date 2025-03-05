function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log("Random Integer (0-100):", getRandomInt(100));
console.log("Random Color:", getRandomColor());
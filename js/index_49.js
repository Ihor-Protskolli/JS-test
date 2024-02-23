// Shuffle an array
//Fisher-Yates algorithm


const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const shuffledCards = shuffle(cards);
console.log(shuffledCards);

function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    
  }
        return array;
}
for (let i = 0; i < shuffledCards.length; i++) {
console.log(shuffledCards[i]);
}

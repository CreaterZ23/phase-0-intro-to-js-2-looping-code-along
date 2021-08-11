// node inspect
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; ++i) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);


    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(arrStrings, event) {
    let newArr = [];
    for (let i = 0; i < arrStrings.length; i++) {
        newArr.push(`Thank you, ${arrStrings[i]}, for the wonderful ${event} gift!`)


    }
    return newArr;

}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return i;
}
function charRemove(charToRemove, text) {
    let result = text.split(charToRemove).join('');
    return result;
}


let result = charRemove("e", "hej, hur är det");

console.log(result);
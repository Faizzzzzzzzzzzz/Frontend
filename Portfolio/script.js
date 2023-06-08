let dynamicContent = document.querySelector(".dynamic-text");
//   console.log(dynamicContent);
const phrases = ["Software Engineer...", "Web Developer..."];
let letterIndex = 0;
let phraseIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printLetters(phrase) {
  // for (let index = 0; index < phrase.length; index++) {
  //   console.log(phrase.charAt(index));
  // }
  // Clear Letters
  if (letterIndex == phrase.length) {
    clearLetters();
  }
  // Print Letters
  else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetters(phrase);
    }, typingSpeed);
  }
}

function clearLetters() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    printLetters(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, erasingSpeed);
  }
}

printLetters(phrases[0]);

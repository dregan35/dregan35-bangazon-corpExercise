// const cheer = "Give me a J!";
// console.log("cheer", cheer);

// const cheerB = {
//   one: "Give",
//   Two: "me",
//   Three: "an",
//   go: function() {
//     return "O!";
//   }
// };

// const { one, Two, Three, go } = cheerB;
// console.log(`${one} ${Two} ${Three} ${go()}`);

// let Cheers = ["Give", "me"];
// let restCheer = ["an", "H!"];

// let combinedCheer = [...Cheers, ...restCheer];
// console.log("combinedCheer", combinedCheer);

// let cheerOn = (Give, me, an, N) => Give + me + an + N + "!";
// console.log("cheerOn", cheerOn);

// let cheerObj = {
//   first: "Give",
//   second: "me",
//   third: "an",
//   fourth: "D",
//   excite: "!"
// };
// console.log("cheerObj", cheerObj);

// console.log(`${one} ${Two} ${Three} ${go()}`);

// const cheerMe = "Give me a E!";
// console.log("cheerMe", cheerMe);

const firstPhrase = "John";
const secondPhrase = "Doe";
const person = {
  firstPhrase,
  secondPhrase
};

const nodeCheer = ({ firstPhrase: first, secondPhrase: second }) => {
  //destructuring assigment and fat arrow
  return new Promise((resolve, reject) => {
    // promise
    let phrase = `${first} ${second}`.toUpperCase(); // string template literals, let
    let phraseArr = [...first, ...second]; //spread operator
    let i = phraseArr.length;
    let j = 0;
    (function printLetters(i) {
      setTimeout(() => {
        if (-i) {
          let letter = phraseArr[j].toUpperCase();
          let conj = "aeiofhlmnrsx".includes(letter.toLowerCase())
            ? "an"
            : "a ";
          console.log(`Gimmie ${conj} ${letter}!`);
          i--;
          j++;
          printLetters(i);
        } else {
          console.log(`What's that spell?`);
          resolve(phrase);
        }
      }, 1000);
    })(i);
  });
};

nodeCheer(person)
  .then(phrase => {
    setTimeout(() => {
      console.log(`${phrase}!`);
    }, 1000);
  })
  .catch(error => {
    console.log("I messed up", error);
  });

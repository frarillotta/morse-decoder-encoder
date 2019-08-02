const morseCode = { 
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---..."
};

getInput();

function getInput() {

  var prompt = require('prompt');

  console.log('insert morse or words');

  prompt.get("num", function (err, result) {

      num = Object.values(result)[0];

      if (num.indexOf('-') > -1 || num.indexOf('.') > -1) {

        convertMorseToText(num);

      } else {

        convertTextToMorse(num);

    }

  });

}


function convertMorseToText(morse) {

  let result = "";

        const code = morse.split(" ");

        for (let k = 0; k < code.length; k++) {

          for (const i of Object.keys(morseCode))  {

            if (morseCode[i] === code[k]) {

                result = result + i;

            }

            if (code[k] === "/") {

                result = result + " ";

                break;

            }

          }

        }


        console.log(result);

}


function convertTextToMorse(text) {

  let result = "";

  const letters = text.split("");

  var k = 0

  do {

      for (const i of Object.keys(morseCode))  {

          if (i === letters[k]) {

              result = result + morseCode[i] + " ";

          }

          if (letters[k] === " ") {

              result = result + "/ ";

              break;

          }

      }

      k += 1;

  } while (k < letters.length);

  result = result.slice(0, -1);

  console.log('result:  ', result);

}
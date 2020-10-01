const piano = document.querySelector(".piano");

const data = [
  {
    keyColor: "white",
    keyNote: "C",
    keyAudio: "notes/C.mp3",
    keyLetter: "z",
  },
  {
    keyColor: "black",
    keyNote: "Db",
    keyAudio: "notes/Db.mp3",
    keyLetter: "s",
  },
  {
    keyColor: "white",
    keyNote: "D",
    keyAudio: "notes/D.mp3",
    keyLetter: "x",
  },
  {
    keyColor: "black",
    keyNote: "Eb",
    keyAudio: "notes/Eb.mp3",
    keyLetter: "d",
  },
  {
    keyColor: "white",
    keyNote: "E",
    keyAudio: "notes/E.mp3",
    keyLetter: "c",
  },
  {
    keyColor: "white",
    keyNote: "F",
    keyAudio: "notes/F.mp3",
    keyLetter: "v",
  },
  {
    keyColor: "black",
    keyNote: "Gb",
    keyAudio: "notes/Gb.mp3",
    keyLetter: "g",
  },
  {
    keyColor: "white",
    keyNote: "G",
    keyAudio: "notes/G.mp3",
    keyLetter: "b",
  },
  {
    keyColor: "black",
    keyNote: "Ab",
    keyAudio: "notes/Ab.mp3",
    keyLetter: "h",
  },

  {
    keyColor: "white",
    keyNote: "A",
    keyAudio: "notes/A.mp3",
    keyLetter: "n",
  },
  {
    keyColor: "black",
    keyNote: "Bb",
    keyAudio: "notes/Bb.mp3",
    keyLetter: "j",
  },
  {
    keyColor: "white",
    keyNote: "B",
    keyAudio: "notes/B.mp3",
    keyLetter: "m",
  },
  {
    keyColor: "white",
    keyNote: "C",
    keyAudio: "notes/Cs.mp3",
    keyLetter: "p",
  },
];

data.forEach(createPianoKey);

// //create piano keys
function createPianoKey(item) {
  const pianoKey = document.createElement("div");

  //https://stackoverflow.com/questions/11115998/is-there-a-way-to-add-remove-several-classes-in-one-single-instruction-with-clas

  const { keyColor, keyNote, keyAudio, keyLetter } = item;

  const styles = ["key", keyColor];
  pianoKey.classList.add(...styles);
  piano.appendChild(pianoKey);

  pianoKey.innerHTML = `<span style='font-weight:bold;font-size:30px; color:teal; '>${keyLetter}</span>`;

  //https://www.quora.com/How-do-you-play-audio-files-on-Javascript

  // beginning-- making the piano play a sound with a click
  const sound = new Audio();
  pianoKey.addEventListener("click", () => {
    sound.src = keyAudio;
    //  console.log(sound.src)

    sound.play();
    pianoKey.classList.add("active");

    setTimeout(function () {
      pianoKey.classList.remove("active");
    }, 1000);
  });
  //end of this func

  //has to take an event
  document.addEventListener("keydown", (e) => {
    //https://alligator.io/js/listening-to-keyboard/

    //    console.log(`key=${e.key},code=${e.code}`);

    if (e.key == keyLetter) {
      sound.src = keyAudio;

      sound.play();
      pianoKey.classList.add("active");

      setTimeout(function () {
        pianoKey.classList.remove("active");
      }, 1000);
    }
  });
}

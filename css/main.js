document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const audioElement = document.getElementById("audio");
  
    const sounds = {
      a: "ruta/del/sonido/a.mp3",
      e: "ruta/del/sonido/e.mp3",
      i: "ruta/del/sonido/i.mp3",
      o: "ruta/del/sonido/o.mp3",
      u: "ruta/del/sonido/u.mp3",
    };
  
    cards.forEach(card => {
      card.addEventListener("click", function() {
        const vowelSound = this.querySelector(".card-front").getAttribute("data-sound");
        const soundUrl = sounds[vowelSound]; // Obtiene la ruta del sonido desde el objeto 'sounds'
        audioElement.src = soundUrl;
        audioElement.play();
      });
    });
  });
  
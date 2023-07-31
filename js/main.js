document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  const audioElement = document.getElementById("audio");

  const sounds = {
    a: "./audio/a.mp3",
    e: "./audio/e.mp3",
    i: "./audio/i.mp3",
    o: "./audio/o.mp3",
    u: "./audio/u.mp3",
  };

  cards.forEach(card => {
    card.addEventListener("click", function() {
      this.classList.toggle("flipped");
      const vowelSound = this.querySelector(".card-back").getAttribute("data-sound");
      const soundUrl = sounds[vowelSound];
      audioElement.src = soundUrl;
      audioElement.play();
    });
  });

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    cards.forEach(card => {
      card.classList.remove("flipped");
    });
  });
});

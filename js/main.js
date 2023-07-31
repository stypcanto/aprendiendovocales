document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  const audioElement = document.getElementById("audio");
  const resetButton = document.getElementById("reset-button");
  const newImage = document.getElementById("new-image");
  const newImageAudio = document.getElementById("new-image-audio"); // Nuevo elemento de audio para el sonido de la nueva imagen
  
  const sounds = {
    a: "./audio/a.mp3",
    e: "./audio/e.mp3",
    i: "./audio/i.mp3",
    o: "./audio/o.mp3",
    u: "./audio/u.mp3",
  };

  // Función para ocultar todas las tarjetas y mostrar la nueva imagen
  function showNewImage() {
    cards.forEach(card => card.style.display = "none");
    newImage.style.display = "block";
    newImageAudio.play(); // Reproducir el sonido de la nueva imagen
  }

  // Función para contar las tarjetas volteadas y verificar si todas están volteadas
  function checkFlippedCards() {
    let flippedCards = 0;
    cards.forEach(card => {
      if (card.classList.contains("flipped")) {
        flippedCards++;
      }
    });

    if (flippedCards === cards.length) {
      // Si todas las tarjetas están volteadas, mostrar la nueva imagen
      setTimeout(showNewImage, 4000); // Puedes ajustar el tiempo de espera antes de mostrar la nueva imagen (1000ms = 1 segundo)
    }
  }

  cards.forEach(card => {
    card.addEventListener("click", function() {
      this.classList.toggle("flipped");
      const vowelSound = this.querySelector(".card-back").getAttribute("data-sound");
      const soundUrl = sounds[vowelSound];
      audioElement.src = soundUrl;
      audioElement.play();

      // Llamar a la función para verificar si todas las tarjetas están volteadas
      checkFlippedCards();
    });
  });

  resetButton.addEventListener("click", function() {
    cards.forEach(card => {
      card.classList.remove("flipped");
      card.style.display = "block";
    });
    // Ocultar la nueva imagen
    newImage.style.display = "none";
    newImageAudio.pause();
    newImageAudio.currentTime = 0; // Reiniciar el audio a 0 segundos para poder reproducirlo nuevamente desde el principio
  });
});

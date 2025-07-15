loveButton.addEventListener("click", () => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  mostrarFraseAnimada(frase);

  if (audio.paused) {
    audio.volume = 0.5;  // Ajusta el volumen (0 a 1)
    audio.play().catch((err) => {
      console.log("Error al reproducir audio:", err);
    });
  }
});

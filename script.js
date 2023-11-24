//your JS code here. If required.
function playSound(soundFileName) {
      const audio = new Audio(`sounds/${soundFileName}`);
      audio.play();
    }

    function stopSounds() {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => audio.pause());
    }
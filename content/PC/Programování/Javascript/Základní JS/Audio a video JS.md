## Play
```html
<audio id="audio" controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>

<button id="playBtn">Play Audio</button>

<script>
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    audio.play();
  });
</script>
```
## Pause
```html
<audio id="myAudio" controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>

<br>

<button id="pauseBtn">Pause Audio</button>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("myAudio");
    const pauseBtn = document.getElementById("pauseBtn");

    pauseBtn.addEventListener("click", () => {
      audio.pause();
    });
  });
</script>
```
## addTextTrack
Titulky
## Další properties
- `currentTime`: for getting the current playback time of an audio
- `loop`: for making the audio play continuously by automatically restarting when it reaches the end
- `muted`: for silencing the audio output of a media element regardless of volume setting
- playbackRate: rychlost přehrávání
- 
# Codecs
codecs=
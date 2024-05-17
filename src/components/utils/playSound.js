/* 
  Signature
    -> audio: String has audio Path
    -> soundVolume: Intager from 0 to 1 has song volume

  Porpuse
    Play An Audio From The Given Audio Path with current audioVolume
*/
function playSound({ sound, soundVolume = 1 }) {
  const currentAudio = new Audio(sound);
  console.log(currentAudio);
  // set current audio volume
  currentAudio.volume = soundVolume;
  currentAudio.play();
}

export default playSound;

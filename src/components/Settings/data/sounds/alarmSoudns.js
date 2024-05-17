import piano from "/public/sounds/piano.mp3";
import scarey from "/public/sounds/scarey.mp3";
import twitch from "/public/sounds/twitch.mp3";
import victory1 from "/public/sounds/victory-1.mp3";
import victory2 from "/public/sounds/victory-2.mp3";
import quack from "/public/sounds/quack.mp3";
import lofi1 from "/public/sounds/lofi-1.mp3";
import lofi2 from "/public/sounds/lofi-2.mp3";
import timeToStop from "/public/sounds/time-to-stop.mp3";
import drums1 from "/public/sounds/drums-1.mp3";

const alarmSounds = [
  {
    alarmName: "piano",
    alarmSound: piano,
  },
  {
    alarmName: "scarey",
    alarmSound: scarey,
  },
  {
    alarmName: "twitch",
    alarmSound: twitch,
  },
  {
    alarmName: "victory",
    alarmSound: victory1,
  },
  {
    alarmName: "duck",
    alarmSound: quack,
  },
  {
    alarmName: "lofi",
    alarmSound: lofi1,
  },
  {
    alarmName: "lofi",
    alarmSound: lofi2,
  },
  {
    alarmName: "did it",
    alarmSound: victory2,
  },
  {
    alarmName: "stop",
    alarmSound: timeToStop,
  },
  {
    alarmName: "drums",
    alarmSound: drums1,
  },
];

export default alarmSounds;

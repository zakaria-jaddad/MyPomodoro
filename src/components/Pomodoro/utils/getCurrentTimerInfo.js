/* 
  Signature 
    Object
      - timers: Global State Variable Has Timers Informations such isActive, counter
      - timerSettings: Global State Variable Has Settings of Timers such long break interval and more
      -> return []
      
  Porupuse
    returns active timer infomations such: 
      - active timer minuts 
      - active timer name
*/
export default function getCurrentTimerInfo({ timers, timerSettings }) {
  for (const timerType of Object.entries(timers)) {
    if (timerType[1].isActive === true) {
      return {
        minutesTimer: timerSettings[timerType[0]],
        activeTimer: timerType[0],
      };
    }
  }
}

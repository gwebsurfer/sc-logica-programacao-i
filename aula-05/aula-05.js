function convertTo12Hour(hour, minute) {
  let suffix = 'AM';

  if (hour === 0) {
    hour = '12';
  } else if (hour === 12) {
    suffix = 'PM';
  } else if (hour > 12) {
    hour -= 12;
    suffix = 'PM';
  }

  minute = minute < 10 ? '0' + minute : minute;
  return { hour: hour, minute: minute, suffix: suffix };
}

function printTime(time) {
  console.log(`${time.hour}:${time.minute} ${time.suffix}`);
}

const hour = 23;
const minute = 9;
const convertedTime = convertTo12Hour(hour, minute);
printTime(convertedTime);

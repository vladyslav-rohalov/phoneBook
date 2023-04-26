import { TimeDate, DisplayTime, DisplayDate } from './time.styled';

export default function Time() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate();
  const month = date.getMonth();
  let monthName = '';
  switch (month) {
    case 0:
      monthName = 'January';
      break;
    case 1:
      monthName = 'February';
      break;
    case 2:
      monthName = 'March';
      break;
    case 3:
      monthName = 'April';
      break;
    case 4:
      monthName = 'May';
      break;
    case 5:
      monthName = 'June';
      break;
    case 6:
      monthName = 'July';
      break;
    case 7:
      monthName = 'August';
      break;
    case 8:
      monthName = 'September';
      break;
    case 9:
      monthName = 'October';
      break;
    case 10:
      monthName = 'November';
      break;
    case 11:
      monthName = 'December';
      break;

    default:
      monthName = '';
  }
  return (
    <TimeDate>
      <DisplayTime>
        {hour}:{minutes}
      </DisplayTime>
      <DisplayDate>
        {day}&nbsp;{monthName}
      </DisplayDate>
    </TimeDate>
  );
}

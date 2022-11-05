import { parseSchedule } from '../csv/parsers/parseSchedule.js';

const MORNING_START_TIME = '10:00';
const NIGHT_START_TIME = '18:00';
const SHIFT_DURATION_IN_MILLIS = 8 * 60 * 60 * 1000;

export const handleSchedule = async () => {
  const rawSchedule = await parseSchedule();

  const formattedSchedule = rawSchedule.map(schedule => {
    const { ['Quantity']: quantity, ['Shift']: shift, ['Date']: date, ['Squad']: squad } = schedule;

    // TODO move to joiner
    const [year, month, day] = date.split('-');
    const [hours, minutes] = (shift == 'Morning') ?
      MORNING_START_TIME.split(':') :
      NIGHT_START_TIME.split(':');

    const shiftStart = new Date(Date.UTC(year, month, day, parseInt(hours), parseInt(minutes)));
    const shiftEnd = new Date(shiftStart.getTime() + SHIFT_DURATION_IN_MILLIS);

    return { quantity: parseInt(quantity), shift, date, squad, shiftStart, shiftEnd};
  });

  return formattedSchedule
};
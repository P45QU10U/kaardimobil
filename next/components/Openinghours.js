import { translateDays } from '../utils/days';

/* Replace : by h and suppress 00 */
const formatHours = (hour) =>
  hour
    .replace(/:/, '\u00a0h\u00a0')
    .replace(/h\u00a000/, 'h')
    .replace(/^0/, '');

/* 08 h/12 h - 14 h/18 h */
const formatDuration = (tab) =>
  tab
    .map((h) => `${formatHours(h.opens)} / ${formatHours(h.closes)}`)
    .join(' - ');

export default function Openinghours({ opendays }) {
  const assembl = translateDays
    .reduce((acc, curr, index) => {
      const [dayName] = Object.keys(curr);
      const [dayInFrench] = Object.values(curr);

      if (opendays[dayName]) {
        if (Array.isArray(opendays[dayName])) {
          const openHoursString = formatDuration(opendays[dayName]);
          acc.push(`${dayInFrench} ${openHoursString}`);
        }
      }

      return acc;
    }, [])
    .map((el, i) => <li key={i}>{el}</li>);

  return <ul>{assembl}</ul>;
}

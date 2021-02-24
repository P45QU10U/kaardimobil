import { translateDays } from '../utils/days';

export default function Openinghours({ opendays }) {
  const assembl = translateDays
    .reduce((acc, curr, index) => {
      const [dayName] = Object.keys(curr);
      const [dayInFrench] = Object.values(curr);

      if (opendays[dayName]) {
        acc.push(`${dayInFrench} ${opendays[dayName]}`);
      }

      return acc;
    }, [])
    .map((el) => <li>{el}</li>);

  return <ul>{assembl}</ul>;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const convertToReadableDate = ({ day, year, month }) => {
  return `${months[month]} ${day}, ${year}`;
};

export const debounce = (func, timer) => {
  let funcTimer;
  return (...args) => {
    clearTimeout(funcTimer);
    funcTimer = setTimeout(() => {
      func.apply(this, args);
    }, timer);
  };
};

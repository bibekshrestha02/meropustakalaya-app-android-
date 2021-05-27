export const getDay = (start, end) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let difference = new Date(end) - new Date(start);
  if (difference < 1) {
    return 0;
  }
  return Math.round(difference / oneDay);
};

export const getYearMonths = (date) => {
  let result;
  if (date) {
    let dateArry = new Date(date).toDateString().split(' ');
    result = ` ${dateArry[1]} ${dateArry[2]} ${dateArry[3]}`;

    return result;
  } else {
    return '-';
  }
};

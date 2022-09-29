const _padTo2Digits = function (num) {
  return num.toString().padStart(2, "0");
};

const _addMinutes = function (date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
};

const getTodayString = function () {
  const date = new Date();
  return [date.getFullYear(), _padTo2Digits(date.getMonth() + 1), _padTo2Digits(date.getDate())].join("");
};

const getTimeString = function (offset = 0) {
  const date = _addMinutes(new Date(), offset);
  return [date.getFullYear(), _padTo2Digits(date.getMonth() + 1), _padTo2Digits(date.getDate()), _padTo2Digits(date.getHours()), _padTo2Digits(date.getMinutes())].join("");
};

const getFormattedTimeFromString = function (str) {
  let hour = str.substring(8, 10) * 1;
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  const min = str.substring(10, 12);
  return hour + ":" + min;
};

export { getTimeString, getTodayString, getFormattedTimeFromString };

const _padTo2Digits = function (num) {
  return num.toString().padStart(2, "0");
};

const _addSeconds = function (date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
};

const getTodayString = function () {
  const date = new Date();
  return [date.getFullYear(), _padTo2Digits(date.getMonth() + 1), _padTo2Digits(date.getDate())].join("");
};

const getTimeString = function (offset = 0) {
  const date = _addSeconds(new Date(), offset);
  return [
    date.getFullYear(),
    _padTo2Digits(date.getMonth() + 1),
    _padTo2Digits(date.getDate()),
    _padTo2Digits(date.getHours()),
    _padTo2Digits(date.getMinutes()),
    _padTo2Digits(date.getSeconds()),
  ].join("");
};

const getFormattedTimeFromString = function (str) {
  let hour = str.substring(8, 10) * 1;
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  const min = str.substring(10, 12);
  return hour + ":" + min;
};

async function sendAnalytics(type, data) {
  const url = `https://dave-simplecrud.herokuapp.com/${type}`;
  await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function logPageView(userId) {
  const isTouch = window.ontouchstart !== undefined;
  sendAnalytics("pageview", { page: "5minutegames", url: window.location.href, userAgent: navigator.userAgent, width: window.innerWidth, height: window.innerHeight, touch: isTouch, user: userId });
}

async function logAddLink(url, name, description) {
  sendAnalytics("fiveminuteadd", { url, name, description });
}
async function logClickLink(id, url, name) {
  sendAnalytics("fiveminuteclick", { id, url, name });
}

export { getTimeString, getTodayString, getFormattedTimeFromString, logPageView, logAddLink, logClickLink};

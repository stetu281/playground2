export const digitalclock = () => {
  const today = new Date();

  const container = document.querySelector(".digital");

  function weekday() {
    const dayStringDe = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const dayStringEn = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (document.documentElement.lang === "de") {
      return dayStringDe[today.getDay()];
    } else {
      return dayStringEn[today.getDay()];
    }
  }

  function date() {
    return `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
  }

  function time() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  }

  function addZero(i) {
    return i < 10 ? `0${i.toString()}` : i.toString();
  }

  const dayString = document.createElement("p");
  dayString.innerHTML = weekday();
  const dateString = document.createElement("p");
  dateString.innerHTML = date();
  const timeString = document.createElement("p");

  setInterval(() => {
    timeString.innerHTML = time();
  }, 1000);

  container.appendChild(dayString);
  container.appendChild(dateString);
  container.appendChild(timeString);
};

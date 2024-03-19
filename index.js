const updateClock = () => {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} `;

  document.getElementById("clock").textContent = timeString;
  document.getElementById("mer").textContent = `${meridiem}`;
};

setInterval(updateClock, 1000);

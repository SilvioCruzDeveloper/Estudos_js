function updateTime(city, offset) {
  const now = new Date();
  const localTime = now.getTime();
  const localOffset = now.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const newTime = utc + 3600000 * offset;
  const newDate = new Date(newTime);

  const timeElement = document
    .getElementById(`clock-${city}`)
    .querySelector(".time");
  const dateElement = document
    .getElementById(`clock-${city}`)
    .querySelector(".date");

  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");
  const seconds = newDate.getSeconds().toString().padStart(2, "0");
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear();

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${day}/${month}/${year}`;
}

function updateClocks() {
  // Para Nova York (UTC -4)
  updateTime("new-york", -4);

  // Para Londres (UTC +1)
  updateTime("london", 1);

  // Para Tóquio (UTC +9)
  updateTime("tokyo", 9);

  // Para São Paulo (UTC -3)
  updateTime("sao-paulo", -3);

  // Para Sydney (UTC +11)
  updateTime("sydney", 11);

  // Para Moscou (UTC +3)
  updateTime("moscow", 3);

  // Para Dubai (UTC +4)
  updateTime("dubai", 4);

  // Para Los Angeles (UTC -7)
  updateTime("los-angeles", -7);
}

// Atualiza os relógios a cada segundo
setInterval(updateClocks, 1000);

// Atualiza os relógios assim que a página é carregada
updateClocks();

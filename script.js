function isimSor() {
  let username = prompt("Lütfen adınızı giriniz.");
  username != ""
    ? (document.querySelector("#username").innerHTML = username[0].toUpperCase() + username.substring(1) + "!")
    : (document.querySelector("#username").innerHTML = "İsimsiz Kahraman!");
}

document.querySelector("body").addEventListener("load", isimSor());

function saatGun() {
  let hours = new Date().getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = new Date().getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let day = new Date().getDay();

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 2) {
    day = "Perşembe";
  } else if (day == 2) {
    day = "Cuma";
  } else if (day == 2) {
    day = "Cumartesi";
  } else {
    day = "Pazar";
  }

  document.querySelector("#hours").innerHTML = `
${hours}:${minutes}:${seconds}
`;

  document.querySelector("#day").innerHTML = day;
}

setInterval(saatGun, 1000);

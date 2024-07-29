let countdownFunction;
let remainingTime;

document
  .getElementById("countdownForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const startDate = document.getElementById("startDate").value;
    const endDate = new Date(
      document.getElementById("endDate").value
    ).getTime();
    let startDateTime = startDate
      ? new Date(startDate).getTime()
      : new Date().getTime();

    if (isNaN(endDate)) {
      alert("Veuillez entrer une date de fin valide.");
      return;
    }

    if (startDate && isNaN(startDateTime)) {
      alert("Veuillez entrer une date de début valide.");
      return;
    }

    document.getElementById("settings").style.display = "none";
    document.getElementById("timer").style.display = "block";
    startCountdown(startDateTime, endDate);
  });

document
  .getElementById("settingsButton")
  .addEventListener("click", function () {
    document.getElementById("timer").style.display = "none";
    document.getElementById("settings").style.display = "block";
  });

function startCountdown(startDateTime, countDownDate) {
  countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    remainingTime = distance;

    if (now < startDateTime) {
      document.getElementById("days").innerHTML = "-";
      document.getElementById("hours").innerHTML = "-";
      document.getElementById("minutes").innerHTML = "-";
      document.getElementById("seconds").innerHTML = "-";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("timer").style.display = "none";
      document.getElementById("settings").style.display = "block";
    }
  }, 1000);
}

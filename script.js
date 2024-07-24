function updateClock() {
    const now = new Date();
    const digitalClock = document.getElementById("digitalClock");
    const analogClock = document.getElementById("analogClock");
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
  
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    const hourRotation = (360 / 12) * now.getHours() + (360 / 12) * (now.getMinutes() / 60);
    const minuteRotation = (360 / 60) * now.getMinutes() + (360 / 60) * (now.getSeconds() / 60);
    const secondRotation = (360 / 60) * now.getSeconds();
  
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
  }
  setInterval(updateClock, 1000);
  updateClock();


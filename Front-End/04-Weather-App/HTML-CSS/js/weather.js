const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = document.querySelector(".msg");
const list = document.querySelector(".container .cities");

localStorage.setItem("apiKey", "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
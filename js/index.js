let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let search_button = document.getElementById("search");
let oneway_button = document.getElementById("oneway");
let from_cairo_button = document.getElementById("from_cairo");

search_button.addEventListener("click", function(){
    window.location = 'index_flight_type.html';
});

oneway_button.addEventListener("click", function(){
    window.location = 'index_from.html';
});

from_cairo_button.addEventListener("click", function(){
    window.location = 'index_to.html';
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
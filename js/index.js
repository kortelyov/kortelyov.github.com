let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let search_button = document.getElementById("search");
let oneway_button = document.getElementById("oneway");
let from_cairo_button = document.getElementById("from_cairo");
let to_moskow_button = document.getElementById("to_moskow");
let result_button = document.getElementById("result");

let currentPageClass = document.body.className;

if (currentPageClass === "main-menu") {
    search_button.addEventListener("click", function(){
        window.location = 'index_flight_type.html';
    });
} else if (currentPageClass === "flight-type-page") {
    oneway_button.addEventListener("click", function(){
        window.location = 'index_from.html';
    });
} else if (currentPageClass === "from_menu") {
    from_cairo_button.addEventListener("click", function(){
        window.location = 'index_to.html';
    });
} else if (currentPageClass === "to_menu") {
      to_moskow_button.addEventListener("click", function(){
          window.location = 'index_date.html';
    });
} else if (currentPageClass === "date_picker") {
        result_button.addEventListener("click", function(){
            window.location = 'flights.html';
      });
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn10 = document.getElementById("btn10");

btn10.addEventListener("click", function(){
    window.location = 'cargo_flights.html';
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        // tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
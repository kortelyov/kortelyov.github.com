let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// INDEX.HTML

let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");

btn01.addEventListener("click", function(){
    window.location = 'index_from.html';
});

btn02.addEventListener("click", function(){
    window.location = 'index_registration.html';
});

btn03.addEventListener("click", function(){
    window.location = 'index_bonus.html';
});

btn04.addEventListener("click", function(){
    window.location = 'index_return.html';
});

// INDEX_FROM.HTML

let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");

btn11.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn12.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn13.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn14.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn15.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn16.addEventListener("click", function(){
    window.location = 'index_to.html';
});

// INDEX_TO.HTML

let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");

btn21.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn22.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn23.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn24.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn25.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn26.addEventListener("click", function(){
    window.location = 'index_date.html';
});

// INDEX_DATE.HTML

let btn31 = document.getElementById("btn31");

btn31.addEventListener("click", function(){
    window.location = 'index_resul.html';
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
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

let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");

let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");

let btn31 = document.getElementById("btn31");
let btn32 = document.getElementById("btn32");
let btn33 = document.getElementById("btn33");
let btn34 = document.getElementById("btn34");
let btn35 = document.getElementById("btn35");
let btn36 = document.getElementById("btn36");

let btn41 = document.getElementById("btn41");

btn01.addEventListener("click", function(){
    window.location = 'index_flight_type.html';
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

btn11.addEventListener("click", function(){
    window.location = 'index_from.html';
});
btn12.addEventListener("click", function(){
    window.location = 'index_from.html';
});
btn13.addEventListener("click", function(){
    window.location = 'index_from.html';
});


btn21.addEventListener("click", function(){
    window.location = 'index_to.html';
});
btn22.addEventListener("click", function(){
    window.location = 'index_to.html';
});
btn23.addEventListener("click", function(){
    window.location = 'index_to.html';
});
btn24.addEventListener("click", function(){
    window.location = 'index_to.html';
});
btn25.addEventListener("click", function(){
    window.location = 'index_to.html';
});
btn26.addEventListener("click", function(){
    window.location = 'index_to.html';
});

btn31.addEventListener("click", function(){
    window.location = 'index_date.html';
});
btn32.addEventListener("click", function(){
    window.location = 'index_date.html';
});
btn33.addEventListener("click", function(){
    window.location = 'index_date.html';
});
btn34.addEventListener("click", function(){
    window.location = 'index_date.html';
});
btn35.addEventListener("click", function(){
    window.location = 'index_date.html';
});
btn36.addEventListener("click", function(){
    window.location = 'index_date.html';
});

btn41.addEventListener("click", function(){
    window.location = 'index_result.html';
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
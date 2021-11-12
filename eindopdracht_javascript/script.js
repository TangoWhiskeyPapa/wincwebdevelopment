const hamburgericon = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

/* menu verschijnt bij hover over hamburger icon en verdwijnt als je met muis van hamburger af gaat 

hamburgericon.addEventListener('mouseover', function(){
    menu.classList.toggle('menu_visible');
});

hamburgericon.addEventListener('mouseleave', function(){
    menu.classList.toggle('menu_visible');
}); */

hamburgericon.addEventListener('click', function(){
    menu.classList.toggle('menu_visible');
});

function veranderAchtergrondKleur(kleur){
    document.body.style.background = kleur;
}

const home_knop = document.querySelector("#home-knop");
const rode_knop = document.querySelector("#rode-knop");
const gele_knop = document.querySelector("#gele-knop");
const blauwe_knop = document.querySelector("#blauwe-knop");
const groene_knop = document.querySelector("#groene-knop");
const oranje_knop = document.querySelector("#oranje-knop");
const paarse_knop = document.querySelector("#paarse-knop");

home_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('lightgrey');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Lichtgrijs"; 
});

rode_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('red');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Rood"; 
});

gele_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('yellow');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Geel"; 
});

blauwe_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('blue');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Blauw"; 
});

paarse_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('purple');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Paars"; 
});

oranje_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('orange');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Oranje"; 
});

groene_knop.addEventListener('click', function(){
    veranderAchtergrondKleur('green');
    menu.classList.toggle('menu_visible');
    document.getElementById("tekstkleur").innerHTML = "Groen"; 
});

document.addEventListener('keydown', function(e) {
    if (e.key == '1'){
        veranderAchtergrondKleur('lightgrey');
        document.getElementById("tekstkleur").innerHTML = "Lichtgrijs"; 
    }else if (e.key == '2'){
        veranderAchtergrondKleur('red');
        document.getElementById("tekstkleur").innerHTML = "Rood"; 
    }else if (e.key == '3'){
        veranderAchtergrondKleur('yellow');
        document.getElementById("tekstkleur").innerHTML = "Geel";  
    }else if (e.key == '4'){
        veranderAchtergrondKleur('blue');
        document.getElementById("tekstkleur").innerHTML = "Blauw"; 
    }else if (e.key == '5'){
        veranderAchtergrondKleur('purple');
        document.getElementById("tekstkleur").innerHTML = "Paars"; 
    }else if (e.key == '6'){
        veranderAchtergrondKleur('orange');
        document.getElementById("tekstkleur").innerHTML = "Oranje";  
    }else if (e.key == '7'){
        veranderAchtergrondKleur('green');
        document.getElementById("tekstkleur").innerHTML = "Groen"; 
    }
  });
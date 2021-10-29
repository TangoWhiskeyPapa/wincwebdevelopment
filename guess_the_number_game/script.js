let naam = prompt("Welkom! Wat is je naam?", "Je naam");
let pogingen = 1; 
let kleinsteNummer = 0;
let gok = -1; 

if (naam != null) {
    alert("Hey " + naam + ". Leuk dat je de guess the number game gaat spelen. Je hebt 5 pogingen om het nummer te raden.");
    kleinsteNummer = parseInt(prompt("Kies als eerste het kleinste nummer dat je wilt raden.", "0"));
}

let grootsteNummer = parseInt(prompt("Kies nu het grootste nummer dat je wilt raden. Dit nummer moet groter zijn dan het kleinste nummer wat je hiervoor hebt ingevuld.", "0"));

while (grootsteNummer <= kleinsteNummer) {
    grootsteNummer = prompt("Dit nummer is niet groter dan het kleinste nummer dat je had ingevoerd. Kies een nieuw nummer.", "20");
}

alert("Het nummer dat je moet raden ligt tussen de " + kleinsteNummer + " en " + grootsteNummer);
let teRadenNummer = Math.floor(Math.random() * grootsteNummer) + kleinsteNummer;
alert("Te raden nummer: " + teRadenNummer) //Om te testen, commenten bij uiteindelijke versie

while (pogingen <= 5 && gok != teRadenNummer){
    gok = parseInt(prompt("Poging " + pogingen + ". Voer het nummer in dat je wilt raden.", "5"));

    if(gok == teRadenNummer){
        alert("Gefeliciteerd je hebt gewonnen");
        alert("Dag " + naam + ". Tot de volgende keer!");
    }else{
        if(pogingen == 5){
            alert("Dat is helaas niet correct. Je pogingen zijn op.");
            alert("Dag " + naam + ". Tot de volgende keer!");
        }else{
            alert("Dat is niet correct, gok nog een keer.");
        }
    }
    pogingen++;
} 





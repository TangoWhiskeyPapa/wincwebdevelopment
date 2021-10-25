//Checking if a number is big

const checkNummer = function(nummer){

    if(nummer > 100){
        return true;
    }else{
        return false;
    }
}

console.log(checkNummer(80)); //geeft "false" terug
console.log(checkNummer(100)); //geeft "false" terug
console.log(checkNummer(120)); //geeft "true" terug

//Bouncer at a club

const checkToegang = function(maximumBezoekers, huidigAantalBezoekers, leeftijdBezoeker){

    if(huidigAantalBezoekers < maximumBezoekers && leeftijdBezoeker >= 18){
        return "come in";
    }else if(huidigAantalBezoekers >= maximumBezoekers && leeftijdBezoeker >= 18){
        return "it's too busy now, come back later";
    }else if(leeftijdBezoeker < 18){
        return "this is a club for adults";
    }

}

console.log(checkToegang(50, 36, 21)); //"come in"
console.log(checkToegang(50, 46, 26)); //"come in"
console.log(checkToegang(50, 50, 24)); //"it's too busy now, come back later";
console.log(checkToegang(50, 56, 16)); //"this is a club for adults"
console.log(checkToegang(50, 26, 16)); //"this is a club for adults"

//Calculating the average

const berekenGemiddelde = function(nummer1, nummer2, nummer3, nummer4, nummer5){

    const totaal = nummer1 + nummer2 + nummer3 + nummer4 + nummer5;
    const gemiddelde = Math.round(totaal / 5); 

    return gemiddelde;
}

console.log(berekenGemiddelde(5,5,5,5,5)); //gemiddelde is 5
console.log(berekenGemiddelde(5,15,25,35,45)); //gemiddelde is 25
console.log(berekenGemiddelde(7,2,9,14,7)); //gemiddelde is 8 (afgerond)
console.log(berekenGemiddelde(18,202,34,478,50)); //gemiddelde is 156 (afgerond)
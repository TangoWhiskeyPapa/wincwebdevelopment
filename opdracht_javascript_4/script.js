const age = 30;
const isFemale = false;
const driverStatus = "bob";
const firstName = "Sara";
const totalAmount = 26;

if(age >= 18){
    console.log("Je bent oud genoeg om naar binnen te mogen");
}else{
    console.log("Je bent helaas te jong om de kroeg te betreden");
}

if(isFemale){
    console.log("Who run the world? Girls!")
}else{
    console.log("Sorry, deze avond is alleen voor vrouwen bedoelt! ;-)");
}

if(driverStatus == "bob"){
    console.log("Jij bent de bob dus jij kan veilig naar huis rijden!");
}else{
    console.log("Jij bent niet de bob vanavond dus je mag helaas niet naar huis rijden!");
}

if(age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}else{
    console.log("Helaas krijg je geen korting op je biertje, toch zal 'ie net zo lekker smaken! ;-)");
}

if(firstName === "Bram" || firstName === "Abraham" || firstName === "Sarah" || firstName === "Sara"){
    console.log("Met jouw naam krijg je op deze feestelijke dag een gratis biertje van ons! Proost!");  
}

if(totalAmount > 100){
    console.log("Jij krijgt een gratis flesje champagne. Santé!");
}else if(totalAmount > 50){
    console.log("Jij krijgt een gratis portie nachos. ¡Buen provecho!");
}else if(totalAmount > 25){
    console.log("Jij krijgt gratis (vega)bitterballen. Smakelijk!");
}
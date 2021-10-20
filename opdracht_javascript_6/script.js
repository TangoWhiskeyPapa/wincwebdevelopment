console.log("Instructies om een pizza te maken: \n");

const pizzaMaken = function(){

    console.log("Kneed het deeg en maak een bolletje");
    console.log("Vorm een ronde platte pizzabodem van dit bolletje deeg");
    console.log("Pak een volle juslepel tomatensaus en verdeel deze gelijkmatig over de pizzabodem");
    console.log("Beleg de pizza met je gewenste ingrediënten");
    console.log("Top de pizza eventueel af met geraspte kaas en duw hem vervolgens in de (pizza)oven");
    console.log("FF wachten...");
    console.log("OOOOooooohhhhhhhhhh...");
    console.log("PIZZA!!!!!! JALALALAAA \n");

};

//opdr 7: Ja, ik krijg het verwachte resultaat, namelijk alleen de bovenste aankondiging maar niet de stappen. Omdat ik de functie goed declareer maar nog niet op de juiste manier aanroep
pizzaMaken();
//opdr 8: Nou heb ik de functie aangeroepen en zie ik de stappen om pizza te maken wel verschijnen.

console.log("Opdr 9: Call your function three times:\n");

for(aantalKeerPizzaMaken = 0; aantalKeerPizzaMaken <= 2; aantalKeerPizzaMaken++){
    pizzaMaken();
}

const sushiMaken = function(vegetarisch){ //parameter voor vegetarische variant (true) en met vis (false)

    console.log("Beleg het norivel met sushirijst");

    if(vegetarisch){
        console.log("Leg op de rijst nu een strookje komkommer of avocado");
    }else {
        console.log("Leg op de rijst nu een strookje tonijn of zalm");
    }

    console.log("Rol de sushi nou voorzichtig op\n");
}

console.log("Instructies om sushi te maken:\n")
sushiMaken(true);

//2 sushi's met vis, 1 vegetarische variant en 2 pizza's.

console.log("3x sushi en 2x pizza:\n");

sushiMaken(true);
sushiMaken(true);
sushiMaken(false);
pizzaMaken();
pizzaMaken();

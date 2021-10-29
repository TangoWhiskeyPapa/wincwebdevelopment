const colors = ["yellow", "blue", "red", "orange"];

let i = 0;

while(i < colors.length){
    console.log(colors[i]);
    i++;
}

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));

//1: Mijn while loop neemt (zonder lege regels) 5 regels in en mijn for loop 3.
//2: Mijn forEach methode neemt 1 regel in.
//3: Je kunt o.a. niet meer in een oneindige loop terecht komen en de naam van de methode geeft duidelijker aan wat je doet, bij for of while 
//is dat minder duidelijk
//4: Dan gebruik je het woordje "in" voor het doorlopen van het color objecgt. Voorbeeld: for (i in colors) {}. Hij pakt dan alle properties 
//in het color object.
//Ja, maar wel itereren over een object en niet over een array.
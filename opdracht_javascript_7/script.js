
const muurSchilderen = function(kleur){

    console.log("De muur is " + kleur + " geschilderd");
};

muurSchilderen("groen");
muurSchilderen("blauw");
muurSchilderen(); //Als er geen argument mee gegeven wordt aan deze functie dan wordt als kleur "undefined" meegegeven

const muurZijdeSchilderen = function(kleur, zijde){

    if(zijde == "noord" || zijde == "noorden"){
        zijde = "noord";
    }else if(zijde == "zuid" || zijde == "zuiden"){
        zijde = "zuid";
    }else if(zijde == "west" || zijde == "westen"){
        zijde = "west";
    }else if(zijde == "oost" || zijde == "oosten"){
        zijde = "oost";
    }

    console.log("De muur aan de " + zijde + "kant is " + kleur + " geschilderd");
};

muurZijdeSchilderen("oranje", "oost");
muurZijdeSchilderen("west", "geel"); //De volgorde van argumenten maakt uit anders klopt de zin niet meer

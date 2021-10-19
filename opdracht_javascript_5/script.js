//DEEL 1 Objecten

//opdr 1, 2 en 7
let person = {
    name: "Tim",
    age: 30,
    evaluations: [7, 10, 9]
};

//opdr 3
console.log(person);

//opdr 4
console.log(person.name);

//opdr 5
console.log(person.age);

//opdr 6 - dot notation
console.log(person.name);
console.log(person.age);
//opdr 6 - bracket notation
console.log(person['name']);
console.log(person['age']);

//opdr 8 - de waarde is [ 7, 10, 9 ]
console.log(person.evaluations);

//DEEL 2 Arrays

//opdr 1, 2
let kleuren = ['rood', 'wit', 'blauw'];

//opdr 3
console.log(kleuren);

//opdr 4
console.log(kleuren.length);

//opdr 5
console.log(kleuren[0]);

//opdr 6
console.log(kleuren[kleuren.length-1]);

//opdr 7
kleuren.push('oranje');
console.log(kleuren);

//opdr 8
kleuren.push(5);
console.log(kleuren);

//opdr 9
kleuren.push({greeting:"Hi ik ben een object"});
console.log(kleuren);

//opdr 10
console.log(kleuren[kleuren.length-1].greeting);

//DEEL 3 Bekijk een real-life object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

//opdr 1
console.log("Naam kattensoort 3:", catBreeds[2].name);

//opdr 2
console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);

//opdr 3
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);

//opdr 4
console.log("Eerste temperament kat 3:", catBreeds[2].temperament[4]);

//opdr 4
console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);
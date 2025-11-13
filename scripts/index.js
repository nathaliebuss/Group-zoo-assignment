const SIDEBAR = document.querySelector(".side_bar")

let menuLabels = [
  {class: "birds", text: "Birds:"},
  {class: "mammals", text: "Mammals:"},
  {class: "reptiles", text: "Reptiles:"}
]

menuLabels.forEach(({class: groupName, text}) => {
  let animalGroup = document.createElement("div");
  animalGroup.groupName = groupName;
  animalGroup.textContent = text;
  SIDEBAR.appendChild(animalGroup);
})

function ZooAnimals(name, lifespan, group, food, description, length, weight, location) {
  this.name = name,
  this.lifespan = lifespan,
  this.group = group,
  this.food = food,
  this.description = description,
  this.weight = weight,
  this.location = location, 
  this.length = length
}

let echidna = new ZooAnimals("Echidna", "50 years", "mammal", "insects such as ants and termites, beetles, larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
"76cm", "10kg", "throughout Australia")

let tasmanianDevil = new ZooAnimals("Tasmanian Devil", "5 years", "mammal", "A predator, they eat meat from other animals such as wallabies and wombats", "A predator, then eat meat from other animals such as wallabies and wombats",
  "70kg", "10kg", "Tasmania"
)

let quokka = new ZooAnimals("Quokka", "10 years", "mammal", "Plant eaters, they eat mushrooms and grass", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  "50cm", "3kg", "Only found on Rottnest island and a few places in Western Australia"
)

let frillNeckLizard = new ZooAnimals("Frill-necked Lizard", "20 years", "reptile", "Small insects and spiders", "description", "90 cm", "1kg", "Northern Australia")

let hawksbillTurtle = new ZooAnimals("Hawksbill Turtle", "50 years", "reptile", "other animals(sponges & jellyfish), sea plants", "description", "80cm(carapace)", "50kg", "tropical coasts of Queensland, Northern Territory and Western Australia")

let perentie = new ZooAnimals("Perentie", "20 years", "reptile", "Carnivore, they eat animals like kangaroos, rabbits, lizards, and  birds", "description", "2.5m", "20kg", "Deserts")

let cassowary = new ZooAnimals("Cassowary", "20 years", "bird", "Plant matter, fruit, insects and small animals like mice and lizards", "description", "1.7m", "44kg", "Queensland")

let kookaburra = new ZooAnimals("Kookaburra", "20 years", "bird", "bird", "Insects and small animals including snakes, frogs and lizards", "description", "43cm", "300g", "Australia wide")

let  yellowTailedCockatoo = new ZooAnimals("Yellow Tailed Cockatoo", "41 years", "bird", "Fruit, seeds and other plant material", "description", "65cm", "900 grams", "Southeast Australia")

let zooArray = [echidna, tasmanianDevil, quokka, frillNeckLizard, hawksbillTurtle, perentie, cassowary, kookaburra, yellowTailedCockatoo]

let animalGroup = ["bird", "mammal", "reptile"]
let filteredGroup = {} 

animalGroup.forEach(group => {
  filteredGroup[group] = zooArray.filter(animal => animal.group === group)
})

// console.log(filteredGroup.bird)



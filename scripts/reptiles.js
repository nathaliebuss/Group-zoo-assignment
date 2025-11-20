let reptileArray = []

function Reptile(name, lifespan, group, food, description, length, weight, found, image) {
  this.name = name
  this.lifespan = lifespan
  this.group = group
  this.food = food
  this.description = description
  this.length = length
  this.weight = weight
  this.found = found
  this.image = image
  reptileArray.push(this)
}

let frill_necked_lizard = new Reptile("Frill-necked lizard", "20 years", "Reptile", "small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90cm", "1 kg", "Northern Australia", "./images/reptiles/frill-necked-lizard.jpg")
let hawksbill_turtle = new Reptile("Hawksbill Turtle", "50 years", "Reptile", "other animals (sponges & jellyfish), sea plants", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.", "80cm (carapace)", "50kg", "Tropical coasts of Queensland, Northern Territory and Western Australia.", "./images/reptiles/hawksbill-turtle.jpg")
let perentie = new Reptile("Perentie", "20 years", "Reptile", "carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.", "2.5 m", "20kg", "Deserts", "./images/reptiles/Perentie.jpg")

const defaultMessageText = `<h1>Reptiles</h1> Reptile, any member of the class Reptilia, the group of air-breathing vertebrates that have internal fertilization, amniotic development, and epidermal scales covering part or all of their body. The major groups of living reptiles—the turtles, tuatara, lizards and snakes, and crocodiles—account for over 8,700 species.`

let mainContent = document.querySelector(".welcome_container")

let defaultMessage = document.createElement("div")

defaultMessage.className = 'container_text'
defaultMessage.innerHTML = defaultMessageText
mainContent.appendChild(defaultMessage)

let sidebar = document.querySelector(".sidebar")
let selectedAnimal = ""

reptileArray.forEach(reptile => {
  let sidebar_item = document.createElement('h2')

  sidebar_item.className = 'sidebar_item '

  sidebar_item.textContent = reptile.name
  sidebar.appendChild(sidebar_item)

})

const maxLength = description => description.slice(0, 200) + (description.length > 200 ? "..." : "");
const reptileNames = document.querySelectorAll(".sidebar_item")
const reptileNamesArray = Array.from(reptileNames)

reptileNamesArray.forEach(reptileElement => reptileElement.addEventListener("click", () => {

  let isActive = reptileElement.classList.contains("active_item") ? true : false

  document.querySelectorAll(".active_item").forEach(activeReptile => activeReptile.classList.remove("active_item"))

  if (!isActive) {
    reptileElement.classList.add("active_item")

    reptileArray.forEach(reptile => {
      if (reptile.name === reptileElement.textContent) {
        showShortSummary(reptile)
      }
    })
  }
  if (document.querySelectorAll(".active_item").length === 0) {
    defaultMessage.innerHTML = defaultMessageText
  }
}))

function showFullSummary(reptile) {
  defaultMessage.innerHTML = `
       <h1>${reptile.name}</h1>
        <img class="animal_img" src="${reptile.image}">
        <a class="page_link container_text" href="./reptiles.html"> Group: ${reptile.group}</a>
        <p class="container_text"> Food: ${reptile.food}</p>
        <p class="container_text">${reptile.description}</p>
        <p class="container_text"> Length: ${reptile.length}</p>
        <p class="container_text"> Weight: ${reptile.weight}</p>
        <p class="container_text"> Lifespan: ${reptile.lifespan}</p>
        <p class="container_text"> Found: ${reptile.found}</p>
        <button class="Btn" id="backBtn">Read less</button>
    `;

  document.querySelector("#backBtn").onclick = () => showShortSummary(reptile);
}

function showShortSummary(reptile) {
  defaultMessage.innerHTML = `
        <h1>${reptile.name}</h1>
        <img class="animal_img" src="${reptile.image}">
        <a class="page_link container_text" href="./reptiles.html"> Group: ${reptile.group}</a>
        <p class="container_text"> Food: ${reptile.food}</p>
        <p class="container_text">${maxLength(reptile.description)}</p>
        <button class="Btn" id="readMoreBtn">Read more</button>`;

  document.querySelector("#readMoreBtn").onclick = () => showFullSummary(reptile);
}
document.querySelector(".background_image").style.backgroundImage =
  "url('./images/reptile_background.jpg')";

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


let mainContent = document.querySelector(".welcome_container")
const defaultMessageText = mainContent.innerHTML

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
    mainContent.innerHTML = defaultMessageText
  }
}))

function showFullSummary(reptile) {
  mainContent.innerHTML = `
        <h1>${reptile.name}</h1>
        <img class="animal_img" src="${reptile.image}">
        <a class="page_link container_text" href="./reptiles.html"> Group: ${reptile.group}</a>
        <p class="container_text"> Food: ${reptile.food}</p>
        <p class="container_text"> Description: ${reptile.description}</p>
        <p class="container_text"> Length: ${reptile.length}</p>
        <p class="container_text"> Weight: ${reptile.weight}</p>
        <p class="container_text"> Lifespan: ${reptile.lifespan}</p>
        <p class="container_text"> Found: ${reptile.found}</p>
        <button class="Btn" id="backBtn">Read less</button>
    `;

  document.querySelector("#backBtn").onclick = () => showShortSummary(reptile);
}

function showShortSummary(reptile) {
  mainContent.innerHTML = `
        <h1>${reptile.name}</h1>
        <img class="animal_img" src="${reptile.image}">
        <a class="page_link container_text" href="./reptiles.html"> Group: ${reptile.group}</a>
        <p class="container_text"> Food: ${reptile.food}</p>
        <p class="container_text">${maxLength(reptile.description)}</p>
        <button class="Btn" id="readMoreBtn">Read more</button>`;

  document.querySelector("#readMoreBtn").onclick = () => showFullSummary(reptile);
}

///Logic for Seth's searchbar///
const searchButton = document.querySelector('.search')
const searchBox = document.querySelector('.search_box')

const search = (clear = false) => {
  let searchContent = ''
  if (!clear) {
    searchContent = searchBox.value
  } else {
    searchContent = ''
  }
  searchContent = searchContent.toLowerCase()
  let containers = document.querySelectorAll('.container_text')
  let containerArray = Array.from(containers)
  containerArray.forEach(container => {
    let matchedWord = ''
    let indexes = []
    let pageContent = container.textContent.toLowerCase()
    for (let i = 0; i < pageContent.length; i++) {
      matchedWord = ''
      let broken = false
      for (let j = 0, k = i; j < searchContent.length; j++, k++) {
        if (searchContent.charAt(j) === pageContent.charAt(k)) {
          matchedWord += pageContent.charAt(k)
        } else {
          broken = true
          break
        }
      } if (!broken && matchedWord === searchContent) {
        indexes.push(i)
      }
    }
    highlighter(container, indexes, searchContent.length)
  })
}

const highlighter = (container, indexes, wordLength) => {
  let text = container.textContent
  let result = ''
  let lastIndex = 0
  indexes.forEach(start => {
    let end = start + wordLength
    result += text.slice(lastIndex, start)
    result += `<span class='highlight'>${text.slice(start, end)}</span>`
    lastIndex = end
  });
  result += text.slice(lastIndex)
  container.innerHTML = result
}

searchBox.addEventListener('keydown', (e) => {
  e.key === 'Enter' && search(false)
})
searchButton.addEventListener('click', () => search(false))
searchBox.addEventListener('blur', () => search(true))
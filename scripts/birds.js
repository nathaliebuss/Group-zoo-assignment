document.querySelector(".background_image").style.backgroundImage =
    "url('./images/bird_background.jpg')";

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".welcome_container ");
const originContent = content.innerHTML;


function Birds(name, lifespan, group, food, length,  weight, found, image,description) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.image = image;
    this.description = description;
}


let birdsArray = [
    new Birds(
      "Cassowary", "20 years", "Bird", "Plants matter like fruit, insects and small animals like mice amd lizards", "1.7m", "44kg", "Queensland", "./images/birds/cassowary.jpg",

      "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",),

    new Birds(
      "Kookaburra", "20 years", "Bird", "Insects and small animals including snakes, frogs and lizards",  "43cm", "300g", "Australia wide", "./images/birds/Kookaburra.jpg",
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars."
    ),

    new Birds(
      "Yellow Tailed Cockatoo", "41 years", "Bird", "Fruit, seeds and other plant material", "65cm", "900 grams", "SE Australia", "./images/birds/yellow-tailed-black-cockatoo.jpg",
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.")
];

const maxLength = desc => desc.slice(0, 200) + (desc.length > 200 ? "..." : "");

let selectedBirdName = "null"
birdsArray.forEach(birds => {
    let item = document.createElement("div");
        item.classList.add("sidebar_item");
        item.textContent = birds.name;

        item.addEventListener("click", (e) => {
          e.stopPropagation();
          
          if(selectedBirdName === birds.name){
            content.innerHTML = originContent;
            item.classList.remove("active_item");

            selectedBirdName = "null";
          }

          else{
            document.querySelectorAll(".sidebar_item").forEach(i => i.classList.remove("active_item"))
            
            item.classList.add("active_item");
            showShortSummary(birds);
            selectedBirdName = birds.name;
            
          }
    });
      
    sidebar.appendChild(item);
});

// short summary
function showShortSummary(birds) {
    content.innerHTML = `
    <h1>${birds.name}</h1>
    <img class="animal_img" src="${birds.image}">
    <a class="page_link container_text" href="./birds.html"> Group: ${birds.group}</a>
    <p class="container_text">Food: ${birds.food}</p>
    <p class="container_text">Description:${maxLength(birds.description)}</p>
    <button class="Btn" id="readMoreBtn">Read more</button>
    `;

    document.querySelector("#readMoreBtn").onclick = () => showFullSummary(birds);
}

// fullSummary
function showFullSummary(birds) {
    content.innerHTML = `
        <h1>${birds.name}</h1>
        <img class="animal_img" src="${birds.image}">
        <a class="page_link container_text" href="./birds.html"> Group: ${birds.group}</a>
        <p class="container_text">Food: ${birds.food}</p>
        <p class="container_text">Description:${birds.description}</p>
        <p class="container_text">Length: ${birds.length}</p>
        <p class="container_text">Weight: ${birds.weight}</p>
        <p class="container_text">Lifespan: ${birds.lifespan}</p>
        <p class="container_text">Found: ${birds.found}</p>
        
        <button class="Btn" id="backBtn">Read less</button>
    `;

    document.querySelector("#backBtn").onclick = () => showShortSummary(birds);
}

///Logic for the searchbar///
const searchButton = document.querySelector('.search')
const searchBox = document.querySelector('.search_box')

const search = (clear = false) => {
  let searchContent
  if(!clear) {
    searchContent = searchBox.value
  } else {
    searchContent = ''
  }
  searchContent = searchContent.toLowerCase()
  let containers = document.querySelectorAll('.container_text')
  let containerArray = Array.from(containers)
  containerArray.forEach(container => {
    let matchedWord
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
searchButton.addEventListener('click', ()=> search(false))
searchBox.addEventListener('blur', ()=> search(true))

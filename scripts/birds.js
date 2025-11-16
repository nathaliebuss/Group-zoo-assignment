
function Bird (name,lifespan,group,food,length,weight,found,image){
    this.name = name ,
    this.lifespan =lifespan,
    this.group = group,
    this.food = food, 
    this.length =length,
    this.weight = weight,
    this.found = found,
    this.image = image,
    this.detail = () => `${name} ${lifespan} ${group} ${food} ${length} ${weight} ${found} ${image} `
};

let birdsArray = [
    new Bird
    ("Cassowary","20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/birds/cassowary.jpg"
    ),

    new Bird(
    "kookaburra","20 years",
    "birds",
    " Insects and small animals including snakes, frogs and lizards",
    "43cm",
    "300g",
    "Australia wide",
    "./images/birds/kookaburra.jpg"),

    new Bird 
    ("Yellow Tailed Cockatoo","41 years",
    "birds",
    "Fruit, seeds and other plant material",
    "65cm",
    "900 grams",
    "SE Australia",
    "./images/birds/yellow-tailed-black-cockatoo.jpg"
    )]

const sidebar = document.querySelector(".sidebar")

birdsArray.forEach(bird => {
    const item = document.createElement("div")
    item.classList.add("sidebar_item")
    item.textContent = bird.name

    sidebar.appendChild(item)
})



//birds cards//

const birdsContainer = document.querySelector("#birdsContainer")

birdsArray.forEach(bird => {
    const birdCard = document.createElement("div")
    birdCard.classList.add("bird__card")

    const img = document.createElement("img")
    img.src = bird.image;
    img.alt = bird.name;

    const title = document.createElement("h3")
    title.textContent = bird.name;

    const btn = document.createElement("button")
    btn.classList.add("readMore")
    btn.textContent = "read more"

    btn.addEventListener("click", () => {
    openDetail(bird)
    })

    birdCard.append(img,title,btn);
    birdsContainer.appendChild(birdCard)
})

    //birds detail pop up //

    const birdsDetail = document.querySelector("#birdsDetail")

    const detailImage = document.querySelector("#detailImage")

    const backBtn = document.querySelector("#backBtn")
   

function openDetail(bird) {
    console.log("openDetail:", bird.name);
    detailImage.src = bird.image
    birdsDetail.style.display = "flex"
}


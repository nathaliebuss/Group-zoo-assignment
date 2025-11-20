
function Bird (name,lifespan,group,food,length,weight,found,image,description){
    this.name = name,
    this.group = group,
    this.lifespan =lifespan,
    this.food = food, 
    this.length =length,
    this.weight = weight,
    this.found = found,
    this.image = image,
    // this.detail = () => `${name} ${group} ${lifespan} ${food} ${length} ${weight} ${found} ${image} `
    this.description = description
}

let birdsArray = [
    new Bird
    ("Cassowary","20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/birds/cassowary.jpg",
    " It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida"),

    new Bird(
    "kookaburra","20 years",
    "birds",
    " Insects and small animals including snakes, frogs and lizards",
    "43cm",
    "300g",
    "Australia wide",
    "./images/birds/kookaburra.jpg",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars"),

    new Bird 
    ("Yellow Tailed Cockatoo","41 years",
    "birds",
    "Fruit, seeds and other plant material",
    "65cm",
    "900 grams",
    "SE Australia",
    "./images/birds/yellow-tailed-black-cockatoo.jpg",
    " It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker "
    )]

const sidebar = document.querySelector(".sidebar")

birdsArray.forEach(bird => {
    const item = document.createElement("div")
    item.classList.add("sidebar_item")
    item.textContent = bird.name

    item.addEventListener("click", () => {
        openDetail(bird)
    })

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
    const birdsPopup = document.querySelector("#birdsPopup")
    
    const birdName =document.querySelector("#birdName")
    const birdGroup = document.querySelector("#birdGroup")
    const birdLifespan = document.querySelector("#birdLifeSpan")
    const birdFood = document.querySelector("#birdFood")
    const birdLength = document.querySelector("#birdLength")
    const birdWeight = document.querySelector("#birdWeight")
    const birdFound = document.querySelector("#birdFound")
    const birdImage = document.querySelector("#birdImage")
    const birdDescription = document.querySelector("#birdDescription")
    const backBtn = document.querySelector("#backBtn")

    backBtn.addEventListener("click",() => {
        birdsPopup.style.display = "none";
    })
    

    function openDetail(bird) { 
        console.log("openDetail:",bird.name)

        birdName.textContent = bird.name
        birdGroup.textContent = bird.group
        birdLifespan.textContent = bird.lifespan
        birdFood.textContent = bird.food
        birdLength.textContent = bird.length
        birdWeight.textContent = bird.weight
        birdFound.textContent = bird.found
        birdImage.src = bird.image
        birdDescription.textContent = bird.description
        
    
        birdsPopup.style.display = "flex"
        }


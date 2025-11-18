const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content_container");
const originalContent = content.innerHTML; 



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

    new Birds("Kookaburra", "20 years", "Bird", "Insects and small animals including snakes, frogs and lizards",  "43cm", "300g", "Australia wide", "./images/birds/Kookaburra.jpg",
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars."
    ),

    new Birds(
      "Yellow Tailed Cockatoo", "41 years", "Bird", "Fruit, seeds and other plant material", "65cm", "900 grams", "SE Australia", "./images/birds/yellow-tailed-black-cockatoo.jpg",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida")
];

const maxLength = desc => desc.slice(0, 200) + (desc.length > 200 ? "..." : "");


//sidebar
let birdGroup = document.createElement("birdGroup");
    birdGroup.classList.add("animal_group")
    birdGroup.textContent ="Birds:"

    sidebar.appendChild(birdGroup)

    birdGroup.addEventListener("click",() =>{
      content.innerHTML = originalContent;
    })

birdsArray.forEach(birds => {
    let item = document.createElement("div");
        item.classList.add("animal_item");
        item.textContent = birds.name;

        item.addEventListener("click", (e) => {
          e.stopPropagation();

        document.querySelectorAll(".animal_item").forEach(i => i.classList.remove("active_item"));
        item.classList.add("active_item");
        
        showShortSummary(birds);
    });

        birdGroup.appendChild(item);
});

// short summary
function showShortSummary(birds) {
    content.innerHTML = `
    <h1>${birds.name}</h1>
    <p class="container_text"><strong>Lifespan:</strong> ${birds.lifespan}</p>
    <p class="container_text"><strong>group:</strong> ${birds.group}</p>
    <img class="animal_img" src="${birds.image}">
    <button id="readMoreBtn" class="page_link">Read More</button>
    `;

    document.querySelector("#readMoreBtn").onclick = () => showFullSummary(birds);
}

// fullSummary
function showFullSummary(birds) {
    content.innerHTML = `
        <h1>${birds.name}</h1>
        <p class="container_text"><strong>Lifespan:</strong> ${birds.lifespan}</p>
        <p class="container_text"><strong>group:</strong> ${birds.group}</p>
        <p class="container_text"><strong>food:</strong> ${birds.food}</p>
        <p class="container_text"><strong>Length:</strong> ${birds.length}</p>
        <p class="container_text"><strong>Weight:</strong> ${birds.weight}</p>
        <p class="container_text"><strong>found:</strong> ${birds.found}</p>
        <img class="animal_img" src="${birds.image}">
        <p class="container_text"><strong>Description:</strong> ${birds.description}</p>
        
        <button id="backBtn" class="page_link">back for summary</button>
    `;

    document.querySelector("#backBtn").onclick = () => showShortSummary(birds);
}
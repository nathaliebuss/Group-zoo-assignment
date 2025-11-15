
const SIDEBAR = document.querySelector(".sidebar")

let menuLabels = [
    {group:"birds",text:"Birds:"}
]










//我写的

function Bird (name,lifespan,group,food,length,weight,found,image){
    this.name = name ,
    this.lifespan =lifespan,
    this.group = group,
    this.food = food, 
    this.length =length,
    this.weight = weight,
    this.found = found,
    this.detail = () => `${name} ${lifespan} ${group} ${food} ${length} ${weight} ${found} ${image} `
}


let birdsArray = [
    new Bird
    ("Cassowary","20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "1.7m",
    "44kg",
    "Queensland",
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
    ("YellowTailedBlackCockatoo","41 years",
    "birds",
    "Fruit, seeds and other plant material",
    "65cm",
    "900 grams",
    "SE Australia",
    )]


birdsArray.forEach(bird => {
    console.log(bird.detail());
});




// let birds = [cassowary,Kookaburra,YellowTailedBlackCockatoo];



// // read more

// let detailList = document.querySelector(".detail__list");
// let detailImage = document.querySelector("img");


// let gridSection = document.querySelector("#birdsContainer");
// let detailDescription = document.querySelector("#birdsDetail")

// birdsDetail.style.display = "none";


// detailList.textContent = cassowary.detail();
// detailImage.src = cassowary.image;
// detailImage.alt = cassowary.name;

// let readMoreBtn = document.querySelector(".bird__card .btns")

// readMoreBtn.addEventListener("click", function () {
//     birdsDetail.style.display ="none";
//     birdsDetail.style.display ="block"
// });
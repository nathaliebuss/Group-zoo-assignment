////Constructor////
let teamMates = []

function teamMate(first, last, country, description, pet) {
  this.first = first
  this.last = last
  this.country = country
  this.description = description
  this.pet = pet
  teamMates.push(this)
}

////Creating each member////
let callum = new teamMate('Callum', 'Jones', 'Callum is from Australia', 'Callum has been fascinated by animals all his life. Having been raised by kangaroos, he knows what it is like to truly be part of mother nature. Callum was originally featured in an exhibit, but after several court cases we included him on our staff. You will find him hopping between exhibits.', 'Callum has a pet crocodile whom he named "Rob" - after his favorite teacher.')
let seth = new teamMate('Seth', 'Armistead', 'Seth is from USA', 'Seth has worked for Quokka zoo for three years. Since then, he has "become one" with the tasmanian devils. Being one of our primary tour guides here at the zoo, Seth introduces visitors to the idea of "true environmentalism", and what it means to get in the mind of some of our most interesting species.', "Seth doesn't have any pets.")
let clara = new teamMate('Clara', 'Swann', 'Clara is from Sweden.', 'Clara is a volunteer here at Quokka zoo. After repeatedly climbing over fences late at night to visit the quokka exhibit, the personell decided to allow Clara access. She is almost always inside the quokka exhibit, obsessing over their cuteness.', 'Clara has two pet guinea pigs.')
let brianna = new teamMate('Brianna', 'Fraser', 'Brianna is from China', 'Brianna is our zoos bird enthusiast. She can make over 300 bird sounds, and some people even think she can communicate with the birds at the zoo. Brianna spends most of her time scrambling up trees in pursuit of kookaburras, who generally avoid her. ', 'Brianna has a cat.')
let nathalie = new teamMate('Nathalie', 'Buss', 'Nathalie is from Sweden', 'Nathalie became a part of Quokka zoo after falling into the Perentie exhibit and being too afraid to climb out. You will find her desperately avoiding the Perentie, who have become indifferent to her presence. Since she has been here for so long, we decided to make her part of the team.', 'Nathalie has a cat.')
let defaultMessage = new teamMate('Team', 'Members', '', 'Our team has members from all over the world! We work together to maintain a healthy and safe environment for all of the animals that we are responsible for. Our goal is to present the most interesting species in Australia in an engaging and authentic way to everyone who steps through our gate.', '')

teamMates.pop(teamMates.findLast)

////Functions////

///adds each key-value pair with the key as the classname and the value as the text content, also adds title///
const appendMember = (member) => {
  let memberArea = document.querySelector('.welcome_container')
  //resets the content//
  memberArea.innerHTML = ''
  let subtitle = document.createElement('h1')
  subtitle.className = 'subtitle'
  subtitle.textContent = `${member.first} ${member.last}`
  memberArea.appendChild(subtitle)
  //converts to an array, and skips the first and last name [0 and 1]//
  let memberPairs = Object.entries(member)
  for (let i = 2; i < memberPairs.length; i++) {
    let memberData = document.createElement('div')
    memberData.textContent = memberPairs[i][1]
    memberData.className = (memberPairs[i][0] + ' intro_text') //We might end up changing this class name//
    memberArea.appendChild(memberData)
  }
  listTeamMates(member)
}

///Adds team members to the sidebar///
const listTeamMates = (active = defaultMessage) => {
  let sidebar = document.querySelector('.sidebar')
  //resets the content//
  sidebar.innerHTML = ''
  teamMates.forEach(member => {
    let teamMate = document.createElement('h2')
    teamMate.textContent = member.first
    teamMate.className = 'sidebar_item'
    //Adds active class and event listener to go to default message if clicked again//
    if (member === active) {
      teamMate.addEventListener('click', () => { appendMember(defaultMessage) }, { once: true })
      teamMate.className = 'sidebar_item active_item'
    } else {
      teamMate.addEventListener('click', () => { appendMember(member) }, { once: true })
    }
    sidebar.appendChild(teamMate)
  });
}

console.log(teamMates)

//initializes the default message//
appendMember(defaultMessage)
/*
    Rules: 
    1. Don't edit or add rules that arent very good and simple
    2. You can bypass a rule if the others allow you
    3. The original owner was @montidg & alts
    4. Control your own country to a reasonable extent
    5. Be reasonable
    6. Group ownership for now
    7. If you want to you can branch off and make your own chain out of a project
*/

// Make sure to order this properly when submitting a pull request!
const COSTUMES = [
    "The Old Island is shown.",
    "Colors change",
    "A nation forms speaking mostly a version of Kgnb'arht under influence from a version of Zenmoroni. It is named Artmrum and its language is Arverdok. Everyone there is homeless for now, ironically.",
    "A nation called Hwlylltphrwl appears with so many people that if each one had a car tire, they would have a lethal dose of car tires. Unfortunately, each person has 0 car tires.",
    "The people of Hwlylltphrwl haven't yet figured out how to change the shape of their nation, so they are trying to dig up the coastline to match their nation's shape.",
    "Dajzoka is formed on the top of the island. It has 16 people for now.",
    "Dajzoka people are really fascinated with triangles and decide to always let their nation be a triangle shape. They expand it and make sure its border is still a triangle.",
    "Dajzoka hates squares so they decide to let another person in because 16 is a square number.",
    "Artmrum spreads along the coast northward. People start to cluster into spots shown with dots",
    "A town is made",
    "During the time the other nations did stuff, the coastline got changed. Unfortunately, it's useless because Hwlylltphrwl figured out how to change their border so that it no longer chirally tiles the plane.",
    "A new city is created on all the excavated dirt. Also the spots that were formerly land are shown. Hwlylltphrwl creates a new person to govern their city.",
    "Dajzoka expands. They teach their ideologies to people in the wilderness, and many of them join.",
    "Dajzoka has claimed the entire triangular peninsula, and they also got their 21st member, making its population a triangle number, because of this they decide to have a big party.",
    // These are blank titles 
    "Artmrum sees a new island",
    "Armtrum begins researching boats or some sort of bridge technology to get to islands",
    "Hwylltphrwl sees a new island and names it Chatrye Island because of reasons.",
    "The people of Hwylltphrwl do not think islands are real so they ignore it and instead find more people.",
    "There is a new city made on a former forest. 8 people still don't live in a city.",
    "Fractionless forms because fractions are very forbidden and illegal in this society. Additionally, the map has been revamped."
];

// Generally, the lines below can be ignored for simple edits, unless you want to modify the codebase
var costume = 0;

function updateCostume() {
    if (costume == -1) costume = COSTUMES.length - 1;
    if (costume == COSTUMES.length) costume = 0;
    document.querySelector('#map').src = `./maps/${costume+1}.svg`;
    document.querySelector('#text').textContent = `Day ${costume+1}: ${COSTUMES[costume]}`;
}

function prevCostume() {
    costume--;
    updateCostume();
}

function nextCostume() {
    costume++;
    updateCostume();
}

document.querySelector('#prev').addEventListener('click', prevCostume)

document.querySelector('#next').addEventListener('click', nextCostume)

window.addEventListener('keydown', (e) => {
    let key = e.key.toLowerCase();

    if (key == 'arrowright' || key == 'd' || key == ' ') nextCostume();
    if (key == 'arrowleft' || key == 'a') prevCostume();
})

updateCostume();
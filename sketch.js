let lolChampions = [
  {
    name: "Ashe",
    weapon: "Bow and Arrow"
  },
  {
    name: "Garen",
    weapon: "Sword"
  },
  {
    name: "Teemo",
    weapon: "Poison Dart Gun"
  },
  {
    name: "Volibear",
    weapon: "Lightning Ability"
  },
  {
    name: "Annie",
    weapon: "Tibbers Doll"
  },
  {
    name: "Maokai",
    weapon: "Wood Fists"
  },
  {
    name: "Lucian",
    weapon: "Twin Pistols"
  }
];

let lolChampImg = [];
let lolRoles = ["Top", "Mid", "ADC", "Support", "Jungle"];

let animating = false;
let margin = 20;

function preload() {
  // Load images into the array in the same order as the lolChampions list
  // This way, the indexes of the two lists match up
  // e.g. lolChampImg[0] should be Ashe's image
  for (let k = 0; k < lolChampions.length; k++)
  {
    lolChampImg[k] = loadImage('assets/' + lolChampions[k].name + '.jpg')
  }
}

function setup() {
  // Some setup information that won't change
  createCanvas(800, 600);
  textSize(32);
  frameRate(10);

  // Show the starting prompt
  background(random(135, 176), random(206, 224), random(230, 250));
  textAlign(CENTER, CENTER);
  boxWidth = width - (margin * 2);
  boxHeight = height - (margin * 2);
  text("Click to Randomize", margin, margin, boxWidth, boxHeight);
}

function draw() {
  if (animating == true) {
    // Randomly cycle through available images
    background(random(152), random(188, 255), random(127, 152));
    index = int(random(lolChampImg.length));
    image(lolChampImg[index], margin * 2, margin);
  }
}

function mousePressed() {
  if (lolChampions.length > 0) {
    // Show the random animation if there are champions left
    animating = true;

    // Recommend a champion after 2000 ms
    setTimeout(recommendChampion, 2000);
  }
  else {
    // Show that there are no more champions available
    background(random(150, 200));
    textAlign(CENTER, CENTER);
    boxWidth = width - (margin * 2);
    boxHeight = height - (margin * 2);
    text("You have no more champions!", margin, margin, boxWidth, boxHeight);
  }
}

function recommendChampion() {
  animating = false;
  background(random(135, 176), random(206, 224), random(230, 250));

  if (lolChampions.length > 0) {
    // Select a random available champion
    champIndex = int(random(lolChampions.length));

    // Show the image of the champion
    image(lolChampImg[champIndex], margin * 2, margin);

    // Show a description of the champion
    textAlign(LEFT, CENTER);
    boxX = (width / 2) + margin;
    boxY = margin;
    boxWidth = (width / 2) - margin * 3;
    boxHeight = (height / 2) - margin;
    descrption = lolChampions[champIndex].name + " uses a\n" + lolChampions[champIndex].weapon + "!";
    text(descrption, boxX, boxY, boxWidth, boxHeight);

    // Show a random role recommendation
    roleIndex = int(random(lolRoles.length));
    textAlign(LEFT, TOP);
    boxY = (height / 2) + margin;
    suggestion = "Why don't you try using " + lolChampions[champIndex].name + " the next time you play " + lolRoles[roleIndex] + "?";
    text(suggestion, boxX, boxY, boxWidth, boxHeight);

    // Remove the champion and its image from their corresponding lists
    lolChampions.splice(champIndex, 1);
    lolChampImg.splice(champIndex, 1);
  }
}

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
  }
];

let animating = false;
let margin = 40;
let boxWidth;
let boxHeight;

function setup() {
  createCanvas(400, 400);
  boxWidth = width - (margin * 2);
  boxHeight = height - (margin * 2);
  background(random(135, 176), random(206, 224), random(230, 250));
  textSize(32);
  textAlign(CENTER, CENTER);
  printText("Click to Randomize");
}

function draw() {
  if (animating == true) {
    fill(random(152), random(188, 255), random(127, 152));
    ellipse(random(width), random(height), random(50, 100));
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}

function randomizer() {
  animating = false;
  background(random(135, 176), random(206, 224), random(230, 250));
  fill(0);
  if (lolChampions.length > 0) {
    index = int(random(lolChampions.length));
    sentence = lolChampions[index].name + " uses a\n"
      + lolChampions[index].weapon + "!";
    printText(sentence);
    lolChampions.splice(index, 1);
  }
  else {
    printText("You have no more champions!");
  }
}

function printText(string) {
  text(string, margin, margin, boxWidth, boxHeight);
}

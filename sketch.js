
let lolChampions = [{

  name: "Ashe",
  ability: "Arrow"
},{
  name: "Garen",
  ability: "Sword"

},{
  name: "Teemo",
  ability: "Poison"

},{
  name: "Volibear",
  ability: "Lightning"

},{
  name: "Annie",
  ability: "Tibers"

}];

let randomIndex;


function setup() {
  createCanvas(400, 400);


}

function draw() {

}

function mousePressed(){
  background(random (200,255),0,0);
  randomIndex= int(random(lolChampions.length));
  text(lolChampions[randomIndex].name, 50,50);
  lolChampions.splice(randomIndex, 1);

}

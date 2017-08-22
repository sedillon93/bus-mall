'use-strict';

function Product(name, path, clicks, shown) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.shown = 0;
}

var bag = new Product('bag', 'img/bag.jpg');
var banana = new Product('banana', 'img/banana.jpg');
var bathroom = new Product('bathroom', 'img/bathroom.jpg');
var boots = new Product('boots', 'img/boots.jpg');
var breakfast = new Product('breakfast', 'img/breakfast.jpg');
var bubblegum = new Product('bubblegum', 'img/bubblegum.jpg');
var chair = new Product('chair', 'img/chair.jpg');
var cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product('dogDuck', 'img/dogDuck.jpg');
var dragon = new Product('dragon', 'img/dragon.jpg');
var pen = new Product('pen', 'img/pen.jpg');
var petSweep = new Product('petSweep', 'img/petSweep.jpg');
var scissors = new Product('scissors', 'img/scissors.jpg');
var shark = new Product('shark', 'img/shark.jpg');
var sweep = new Product('sweep', 'img/sweep.png');
var tauntaun = new Product('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('unicorn', 'img/unicorn.jpg');
var usb = new Product('usb', 'img/usb.gif');
var waterCan = new Product('waterCan', 'img/waterCan.jpg');
var wineGlass = new Product('wineGlass', 'img/wineGlass.jpg');

var products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');
body.appendChild(ul);

var usedProd = [];
var possibleProd = [];
var numbers = [];
var totalClicks = 0;

function generateDisplay(){
  for (var i = 0; i < 3; i++){
    var prod = document.createElement('img');
    var num = Math.floor(Math.random() * products.length);

    while ((numbers.includes(num)) || (usedProd.includes(num))){
      num = Math.floor(Math.random() * products.length);
    }
    numbers.push(num);
    usedProd.push(num);

    products[num].shown += 1;
    var img = products[num].path;
    var identification = products[num].name;
    prod.setAttribute('src', img);
    prod.setAttribute('id', identification);
    prod.setAttribute('class', 'product');
    body.appendChild(prod);
  }
}

function clearUsed(){
  for (var i = 0; i < 3; i++){
    usedProd.shift();
  }
}

function clearDisplay() {
  for (var i = 0; i < 3; i++) {
    var oldChildId = products[numbers[i]].name;
    var oldChild = document.getElementById(oldChildId);
    body.removeChild(oldChild);
  }
  numbers = [];
}

function countClick(){
  var target = event.target.id;
  for (var i = 0; i < products.length; i++){
    if (products[i].name === target) {
      var targetProd = products[i];
    }
  }
  var clicks = targetProd.clicks++;
  totalClicks++;
  if (totalClicks > 5){
    product.removeEventListener('click', countClick);
    //add list displaying # of clicks and shows for each product;
    for (var i = 0; i < products.length; i++){
      var li = document.createElement('li');
      li.innerText = products[i].clicks + 'votes for the' + products[i].name;
      ul.appendChild(li);
      body.appendChild(ul);
    }
  }
  clearDisplay();
  generateDisplay();
  clearUsed();
}

generateDisplay();
var product = document.getElementsByClassName('product')[0];
product.addEventListener('click', countClick);

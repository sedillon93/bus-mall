'use-strict';

function Product(name, id, path, clicks, shown) {
  this.name = name;
  this.id = id;
  this.path = path;
  this.clicks = 0;
  this.shown = 0;
}

var bag = new Product('bag', 'bag', 'img/bag.jpg');
var banana = new Product('banana', 'banana', 'img/banana.jpg');
var bathroom = new Product('bathroom', 'bathroom', 'img/bathroom.jpg');
var boots = new Product('boots', 'boots', 'img/boots.jpg');
var breakfast = new Product('breakfast', 'breakfast', 'img/breakfast.jpg');
var bubblegum = new Product('bubblegum', 'bubblegum', 'img/bubblegum.jpg');
var chair = new Product('chair', 'chair', 'img/chair.jpg');
var cthulhu = new Product('cthulhu', 'cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product('dogDuck', 'dogDuck', 'img/dogDuck.jpg');
var dragon = new Product('dragon', 'dragon', 'img/dragon.jpg');
var pen = new Product('pen', 'pen', 'img/pen.jpg');
var petSweep = new Product('petSweep', 'petSweep', 'img/petSweep.jpg');
var scissors = new Product('scissors', 'scissors', 'img/scissors.jpg');
var shark = new Product('shark', 'shark', 'img/shark.jpg');
var sweep = new Product('sweep', 'sweep', 'img/sweep.png');
var tauntaun = new Product('tauntaun', 'tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('unicorn', 'unicorn', 'img/unicorn.jpg');
var usb = new Product('usb', 'usb', 'img/usb.gif');
var waterCan = new Product('waterCan', 'waterCan', 'img/waterCan.jpg');
var wineGlass = new Product('wineGlass', 'wineGlass', 'img/wineGlass.jpg');

var products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var numbers = [];
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 3; i++){
  var child = document.createElement('img');
  var num = Math.floor(Math.random() * products.length);

  while (numbers.includes(num)) {
    num = Math.floor(Math.random() * products.length);
  }
  numbers.push(num);

  products[num].shown += 1;
  var img = products[num].path;
  var identification = products[num].id;
  // var title = document.createElement('p');
  // title.innerText = products[num].name;
  child.setAttribute('src', img);
  child.setAttribute('id', identification);
  body.appendChild(child);
  // body.appendChild(title);
}

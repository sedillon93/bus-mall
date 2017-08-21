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
var cthulthu = new Product('cthulthu', 'img/cthulthu.jpg');
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

var products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulthu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 3; i++){
  var num = Math.floor(Math.random() * products.length);
  console.log(num);
}

'use-strict';
//leave this global so that it gets updated as product clicks property changes; otherwise created on pageload and won't change
var dataList = [];
var labelsList = [];
var totalClicks = 0;
var maxClicks = 5;

function Product(name, id, path) {
  this.name = name;
  this.id = id;
  this.path = path;
  this.clicks = 0;
  this.shown = 0;
}

var bag = new Product('Bag', 'bag', 'img/bag.jpg');
var banana = new Product('Banana Slicer', 'banana', 'img/banana.jpg');
var bathroom = new Product('Bathroom appliance','bathroom', 'img/bathroom.jpg');
var boots = new Product('Boots','boots', 'img/boots.jpg');
var breakfast = new Product('All-in-1 Breakfast','breakfast', 'img/breakfast.jpg');
var bubblegum = new Product('Meatball bubblegum', 'bubblegum', 'img/bubblegum.jpg');
var chair = new Product('Red chair', 'chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu', 'cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product('Dog duckbill', 'dogDuck', 'img/dogDuck.jpg');
var dragon = new Product('Dragon meat', 'dragon', 'img/dragon.jpg');
var pen = new Product('Utensil pen caps', 'pen', 'img/pen.jpg');
var petSweep = new Product('Pet sweeper shoes','petSweep', 'img/petSweep.jpg');
var scissors = new Product('Pizza scissors','scissors', 'img/scissors.jpg');
var shark = new Product('Shark sleeping bag', 'shark', 'img/shark.jpg');
var sweep = new Product('Baby sweeper pajamas', 'sweep', 'img/sweep.png');
var tauntaun = new Product('Tauntaun sleeping bag', 'tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn meat', 'unicorn', 'img/unicorn.jpg');
var usb = new Product('Octopus usb drive', 'usb', 'img/usb.gif');
var waterCan = new Product('Artistic watering can', 'waterCan', 'img/waterCan.jpg');
var wineGlass = new Product('Wine glass', 'wineGlass', 'img/wineGlass.jpg');

var products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var body = document.getElementsByTagName('body')[0];

var usedProd = [];
var possibleProd = [];
var numbers = [];

function generateDisplay(){
  for (var i = 0; i < 3; i++){
    var num = Math.floor(Math.random() * products.length);

    while ((numbers.includes(num)) || (usedProd.includes(num))){
      num = Math.floor(Math.random() * products.length);
    }
    numbers.push(num);
    usedProd.push(num);
    products[num].shown += 1;

    var div = document.getElementsByTagName('div')[i];
    var prodImage = div.childNodes[1];
    var img = products[num].path;
    var identification = products[num].id;
    prodImage.setAttribute('src', img);
    prodImage.setAttribute('id', identification);
    prodImage.setAttribute('class', 'product');
    prodImage.addEventListener('click', countClick);
  }
}

function clearUsed(){
  for (var i = 0; i < 3; i++){
    usedProd.shift();
  }
}

// function populateShownProducts(){
//   for (var i = 0; i < products.length; i++){
//     if (products[i].shown > 0){
//       labelsList.push(products[i].id);
//       dataList.push(products[i].clicks);
//     }
//   }
// }

function countClick(event){
  var target = event.target.id;
  for (var i = 0; i < products.length; i++){
    // console.log(products[i]);
    if (products[i].id === target){
      var targetProd = products[i];
      targetProd.clicks++;
    }
  }
  totalClicks++;
  numbers = [];
  generateDisplay();
  clearUsed();
  if (totalClicks >= maxClicks){
    var prodImages = document.getElementsByClassName('product');
    for (var i = 0; i < prodImages.length; i++){
      prodImages[i].removeEventListener('click', countClick);
      if (products[i].shown > 0){
        labelsList.push(products[i].id);
        dataList.push(products[i].clicks);
      }
    }
    var barChart = new Chart(context, chartConfig);
  }
}

generateDisplay();
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var chartConfig = {
  type: 'bar',
  data: {
    labels: labelsList,
    datasets: [{
      label: 'Number of Votes',
      data: dataList,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};

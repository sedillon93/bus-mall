'use-strict';

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
    var identification = products[num].id;
    prod.setAttribute('src', img);
    prod.setAttribute('id', identification);
    // prod.setAttribute('class', 'product');
    prod.addEventListener('click', countClick);
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
    var oldChildId = products[numbers[i]].id;
    var oldChild = document.getElementById(oldChildId);
    body.removeChild(oldChild);
  }
  numbers = [];
}

function countClick(event){
  var target = event.target.id;
  for (var i = 0; i < products.length; i++){
    if (products[i].id === target) {
      var targetProd = products[i];
      targetProd.clicks++;
    }
  }
  totalClicks++;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  //add number of clicks for each product to array of data used for bar chart
  var dataList = [];
  for (var i = 0; i < products.length; i++){
    dataList.push(products[i].clicks);
  }
  //add product name to array for labels used in bar chart
  var labelsList = [];
  for (var i = 0; i < products.length; i++){
    labelsList.push(products[i].name);
  }

  var chartConfig = {
    type: 'bar',
    data: {
      labels: labelsList,
      dataset: [{
        label: 'Number of Votes',
        data: dataList,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
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

  if (totalClicks > 4){
    var prods = document.getElementsByClassName('product');
    for (var i = 0; i < prods.length; i++){
      prods[i].removeEventListener('click', countClick);
    }
    var barChart = new Chart(context, chartConfig);
    // add list displaying # of clicks and shows for each product;
    // for (var i = 0; i < products.length; i++){
    //   var li = document.createElement('li');
    //   li.innerText = products[i].clicks + ' votes for the ' + products[i].name;
    //   ul.appendChild(li);
    // }
  }
  clearDisplay();
  generateDisplay();
  clearUsed();
}

generateDisplay();

'use strict';

var hoursOP = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var newStoreArr =[];

// var table = document.getElementById('stores');
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementById('data');
var tfoot = document.getElementsByTagName('tfoot')[0];

var form = document.getElementById('addLocation');

//stores data for each store as its added. stores total cookies per day, total cookies for hour, pushes to storearr
function StoresData(location, minCust, maxCust, avgCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;

  this.tlCookiesNeeded = [];
  this.totalCookies = 0;

  this.custPerHourcal();
  newStoreArr.push(this);
}
//creates a random number based on the min/max estimated customers
StoresData.prototype.randomizerCH = function(){
  var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
  return randomizerCH;
};
//creates a estimated customer per hour based on the  avg cookies per day *  randomizer
StoresData.prototype.custPerHourcal = function(){
  for(var i=0; i <hoursOP.length; i++){
    var custPerHourcal = this.avgCookieSale * this.randomizerCH();
    this.tlCookiesNeeded.push(Math.round(custPerHourcal));
    this.totalCookies += Math.round(custPerHourcal);
  }
};

StoresData.prototype.render = function(){
  var tr = createElement('tr', '', tbody);
  createElement('td', this.location, tr);

  for(var i = 0; i < this.tlCookiesNeeded.length; i++){
    createElement('td', this.tlCookiesNeeded[i], tr);
  }
  createElement('td', this.totalCookies, tr);
};

function createElement(element, content, parent){
  var newElement = document.createElement(element);
  newElement.textContent = content;
  parent.appendChild(newElement);
  return newElement;
}


new StoresData('Seattle', 23, 65, 6.3);
new StoresData('Tokyo', 3 , 24, 1.2);
new StoresData('Dubai',11, 38, 3.7);
new StoresData('Paris', 20, 38, 2.3);
new StoresData('Lima', 2, 16, 4.6);


function handleUpdate(event){
  event.preventDefault();
  var formLoc = event.target.formLoc.value;
  var formMin = parseInt(event.target.formMin.value);
  var formMax = parseInt(event.target.formMax.value);
  var formAvg = parseInt(event.target.formAvg.value);

  var storesData = new StoresData(formLoc, formMin, formMax, formAvg);
  storesData.render();

}

form.addEventListener('submit', handleUpdate);

function renderHeader(){
  var tr = createElement('tr', '', thead);
  console.log(tr);
  createElement('th', '', tr);

  for (var i=0; i < hoursOP.length; i++){
    createElement('th', hoursOP[i], tr);
  }
  createElement('th','Daily Location Total', tr);
}
renderHeader();

function renderStores(){
  for(var i=0; i<newStoreArr.length; i++){
    newStoreArr[i].render();
  }
}
renderStores();

function renderFooter(){
  tfoot.textContect = '';
  var tr = createElement('tr','', tfoot);
  createElement('td','Totals',tr);

  var totals = 0;
  for (var i = 0; i < hoursOP.length; i++){

    var hourlyTotals =0;
    for (var j = 0; j < newStoreArr.length; j++){
      hourlyTotals += newStoreArr[j].tlCookiesNeeded[i];
      totals += newStoreArr[j].tlCookiesNeeded[i];
    }
    createElement('td', hourlyTotals, tr);
  }
  createElement('td', totals, tr);
}
renderFooter();

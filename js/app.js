'use strict';

//DONE:create separate JS object literals for each shop location that outputs the following to the sales.html:
// DONE: Stores the min/max hourly customers, and the average cookies per customer, in object properties
// DONE: Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Done: Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals

//var pSalEl = document.getElementById('sales-table');

var pEl = document.getElementById('stores');
var hoursOP = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var newStoreArr =[];

function StoresData(location,minCust,maxCust,avgCookieSale,totalCookies = 0){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCookies = totalCookies;
  this.totalCookiesArr = [];
  this.custPerHourcal();
  this.renderRows();
  newStoreArr.push(this);
}
StoresData.prototype.randomizerCH = function(){
  var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
  return randomizerCH;
};
StoresData.prototype.custPerHourcal = function(){
  for(var i=0; i <hoursOP.length; i++){
    var custPerHourcal = this.avgCookieSale * this.randomizerCH();
    this.totalCookiesArr.push(Math.round(custPerHourcal));
  }
};
//Header Row
function renderHeader(){
  var rowEl = document.createElement('tr');
  var headEl = document.createElement('th');
  var hEl = document.createElement('th');
  rowEl.appendChild(hEl);

  for (var i=0; i<hoursOP.length; i++){
    headEl = document.createElement('th');
    var dataEl = document.createElement('td');
    dataEl.textContent = hoursOP[i];
    headEl.appendChild(dataEl);
    rowEl.appendChild(dataEl);
  }
  var totalEL = document.createElement('th');
  var totalData = document.createElement('td');

  totalData.textContent = 'Daily Location Total';
  totalEL.appendChild(totalData);
  rowEl.appendChild(totalEL);
  pEl.appendChild(rowEl);
}
StoresData.prototype.renderRows = function(){
  var tableRowEl = document.createElement('tr');
  pEl.appendChild(tableRowEl);
  var tableDataEl = document.createElement('td');
  tableDataEl.textContent = this.location;
  tableRowEl.appendChild(tableDataEl);
  var total = 0;
  for(var i=0; i<this.totalCookiesArr.length; i++){
    var tDataEl = document.createElement('td');
    tDataEl.textContent = this.totalCookiesArr[i];
    tableRowEl.appendChild(tDataEl);
    total += this.totalCookiesArr[i];
  }
  var rowTotalEl = document.createElement('td');
  rowTotalEl.textContent = total;
  tableRowEl.appendChild(rowTotalEl);
};
function renderFooter(){
  var tRowEl = document.createElement('tr');
  pEl.appendChild(tRowEl);
  var tolDataEl = document.createElement('td');
  tolDataEl.textContent = 'Total';
  tRowEl.appendChild(tolDataEl);
  var totalPerDay = 0;
  for(var i=0; i<hoursOP.length; i++){
    var totalPerhour = 0;
    for(var j=0; j<newStoreArr.length; j++){
      totalPerhour += newStoreArr[j].totalCookiesArr[i];
    }
    var tdEL = document.createElement('td');
    tdEL.textContent = totalPerhour;
    tRowEl.appendChild(tdEL);
    console.log(tdEL);
    totalPerDay += totalPerhour;
  }
  var tlsAllEl = document.createElement('td');
  tlsAllEl.textContent = totalPerDay;
  tRowEl.appendChild(tlsAllEl);
}
renderHeader();

new StoresData('Seattle', 23, 65, 6.3);
new StoresData('Tokyo', 3 , 24, 1.2);
new StoresData('Dubai',11, 38, 3.7);
new StoresData('Paris', 20, 38, 2.3);
new StoresData('Lima', 2, 16, 4.6);

renderFooter();

//otal Row
// function renderStore(){
//   cEl.textContent = newStoreArr[i].location;
//   for (var i=0; i<newStoreArr[i].totalCookiesArr[i].length; i++){
//     var rEL = document.createElement('tr');
//     var cEl = document.createElement('td');
//     cEl.textContent = newStoreArr[i].location;
//     rEL.appendChild(cEl);

//     // var total = 0;
//     // for (var j=0; j<newStoreArr[i].length; j++){
//     //   var ctEL = document.createElement('td');
//     //   ctEL.textContent = newStoreArr[i].totalCookies[j];
//     //   cEl.appendChild(ctEL);
//     //   total += newStoreArr[i].totalCookies[j];
//     // }
//     var sTotal = document.createElement('td');
//     sTotal.textContent = total;
//     cEl.appendChild(sTotal);
//     pEl.appendChild(rEL);
//   }
// }
// renderStore();

// //Seattle store
// var store1 = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   totalCookies: 0, // Calculating the sum of these hourly totals
//   totalCookiesArr: [],
//   //generate a random number of customers per hour.
//   randomizerCH: function() {
//     for (var i=0; i < hoursOP.length; i++)
//       var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
//     return randomizerCH;
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   custPerHourcal: function() {
//     for(var i=0; i <hoursOP.length; i++){
//       var custPerHourcal = this.avgCookieSale * this.randomizerCH();
//       this.totalCookiesArr.push (Math.round(custPerHourcal));
//       this.totalCookies = this.totalCookies + (Math.round(custPerHourcal));
//     }
//   },
//   render: function(){
//     // Display the values of each array as unordered lists in the browser
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.location}`;
//     pEl.appendChild(liEl);
//     for (var i=0; i<hoursOP.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = `${hoursOP[i]}: ${this.totalCookiesArr[i]} cookies`;
//       pEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total cookies: ${this.totalCookies}`;
//     pEl.appendChild(liEl);
//   }
// };
// store1.custPerHourcal();
// store1.render();

// //Tokyo store
// var store2 = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   totalCookies: 0, // Calculating the sum of these hourly totals
//   totalCookiesArr: [],
//   //generate a random number of customers per hour.
//   randomizerCH: function() {
//     for (var i=0; i < hoursOP.length; i++)
//       var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
//     return randomizerCH;
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   custPerHourcal: function() {
//     for(var i=0; i <hoursOP.length; i++){
//       var custPerHourcal = this.avgCookieSale * this.randomizerCH();
//       this.totalCookiesArr.push (Math.round(custPerHourcal));
//       this.totalCookies = this.totalCookies + (Math.round(custPerHourcal));
//     }
//   },
//   render: function(){
//     // Display the values of each array as unordered lists in the browser
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.location}`;
//     pEl.appendChild(liEl);
//     for (var i=0; i<hoursOP.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = `${hoursOP[i]}: ${this.totalCookiesArr[i]} cookies`;
//       pEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total cookies: ${this.totalCookies}`;
//     pEl.appendChild(liEl);
//   }
// };
// store2.custPerHourcal();
// store2.render();

// //Dubai store
// var store3 = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   totalCookies: 0, // Calculating the sum of these hourly totals
//   totalCookiesArr: [],
//   //generate a random number of customers per hour.
//   randomizerCH: function() {
//     for (var i=0; i < hoursOP.length; i++)
//       var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
//     return randomizerCH;
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   custPerHourcal: function() {
//     for(var i=0; i <hoursOP.length; i++){
//       var custPerHourcal = this.avgCookieSale * this.randomizerCH();
//       this.totalCookiesArr.push (Math.round(custPerHourcal));
//       this.totalCookies = this.totalCookies + (Math.round(custPerHourcal));
//     }
//   },
//   render: function(){
//     // Display the values of each array as unordered lists in the browser
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.location}`;
//     pEl.appendChild(liEl);
//     for (var i=0; i<hoursOP.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = `${hoursOP[i]}: ${this.totalCookiesArr[i]} cookies`;
//       pEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total cookies: ${this.totalCookies}`;
//     pEl.appendChild(liEl);
//   }
// };
// store3.custPerHourcal();
// store3.render();

// //Paris store
// var store4 = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   totalCookies: 0, // Calculating the sum of these hourly totals
//   totalCookiesArr: [],
//   //generate a random number of customers per hour.
//   randomizerCH: function() {
//     for (var i=0; i < hoursOP.length; i++)
//       var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
//     return randomizerCH;
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   custPerHourcal: function() {
//     for(var i=0; i <hoursOP.length; i++){
//       var custPerHourcal = this.avgCookieSale * this.randomizerCH();
//       this.totalCookiesArr.push (Math.round(custPerHourcal));
//       this.totalCookies = this.totalCookies + (Math.round(custPerHourcal));
//     }
//   },
//   render: function(){
//     // Display the values of each array as unordered lists in the browser
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.location}`;
//     pEl.appendChild(liEl);
//     for (var i=0; i<hoursOP.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = `${hoursOP[i]}: ${this.totalCookiesArr[i]} cookies`;
//       pEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total cookies: ${this.totalCookies}`;
//     pEl.appendChild(liEl);
//   }
// };
// store4.custPerHourcal();
// store4.render();

// //Lima store
// var store5 = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   totalCookies: 0, // Calculating the sum of these hourly totals
//   totalCookiesArr: [],
//   //generate a random number of customers per hour.
//   randomizerCH: function() {
//     for (var i=0; i < hoursOP.length; i++)
//       var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
//     return randomizerCH;
//   },
//   //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   custPerHourcal: function() {
//     for(var i=0; i <hoursOP.length; i++){
//       var custPerHourcal = this.avgCookieSale * this.randomizerCH();
//       this.totalCookiesArr.push (Math.round(custPerHourcal));
//       this.totalCookies = this.totalCookies + (Math.round(custPerHourcal));
//     }
//   },
//   render: function(){
//     // Display the values of each array as unordered lists in the browser
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.location}`;
//     pEl.appendChild(liEl);
//     for (var i=0; i<hoursOP.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = `${hoursOP[i]}: ${this.totalCookiesArr[i]} cookies`;
//       pEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total cookies: ${this.totalCookies}`;
//     pEl.appendChild(liEl);
//   }
// };
// store5.custPerHourcal();
// store5.render();


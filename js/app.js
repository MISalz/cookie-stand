'use strict';

console.log('hello');


// DONE:create separate JS object literals for each shop location that outputs the following to the sales.html:
// DONE: Stores the min/max hourly customers, and the average cookies per customer, in object properties
// DONE: Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Done: Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals


var pEl = document.getElementById('stores');
var hoursOP = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var newStoreArr = [];
function StoresData(location,minCust,maxCust,avgCookieSale,totalCookiesArr){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;

  this.totalCookiesArr = totalCookiesArr;
  this.totalCookies = [];

  newStoreArr.push(this);
}
StoresData.prototype.randomizerCH= function() {
  return Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
};
StoresData.prototype.custPerHourcal = function() {
  for(var i=0; i <hoursOP.length; i++){
    var custPerHourcal = this.avgCookieSale * this.randomizerCH();
    this.totalCookiesArr.push(Math.round(custPerHourcal));
    // this.totalCookies += this.totalCookies + (Math.round(this.totalCookiesArr));
  }
  console.log(this.totalCookiesArr);
};
new StoresData('Seattle', 23, 65, 6.3);
new StoresData('Tokyo', 3 , 24, 1.2);
new StoresData('Dubai',11, 38, 3.7);
new StoresData('Paris', 20, 38, 2.3);
new StoresData('Lima', 2, 16, 4.6);


function renderData(){
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
  totalData.textContent = 'Total';
  totalEL.appendChild(totalData);
  rowEl.appendChild(totalEL);
  pEl.appendChild(rowEl);
}
renderData ();
function renderStore(){
  for (var i=0; i<newStoreArr[i].location.length; i++){
    var rEL = document.createElement('tr');
    var cEl = document.createElement('td');
    cEl.textContent = newStoreArr[i].location;
    rEL.appendChild(cEl);

    var total = 0;
    for (var j=0; j<newStoreArr[i].length; j++){
      var ctEL = document.createElement('td');
      ctEL.textContent = newStoreArr[i].totalCookies[j];
      cEl.appendChild(ctEL);
      total += newStoreArr[i].totalCookies[j];
    }
    var sTotal = document.createElement('td');
    sTotal.textContent = total;
    cEl.appendChild(sTotal);
    pEl.appendChild(rEL);
  }
}
renderStore();

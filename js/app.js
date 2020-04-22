'use strict';


//global variables to be used within the script. newstorearr stores all store data
var pEl = document.getElementById('stores');
var hoursOP = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var newStoreArr =[];

//stores data for each store as its added. stores total cookies per day, total cookies for hour, pushes to storearr
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
//creates a random number based on the min/max estimated customers
StoresData.prototype.randomizerCH = function(){
  var randomizerCH = Math.floor(Math.random()*(this.maxCust-this.minCust)+1+this.minCust);
  return randomizerCH;
};
//creates a estimated customer per hour based on the  avg cookies per day *  randomizer
StoresData.prototype.custPerHourcal = function(){
  for(var i=0; i <hoursOP.length; i++){
    var custPerHourcal = this.avgCookieSale * this.randomizerCH();
    this.totalCookiesArr.push(Math.round(custPerHourcal));
  }
};
//creates a Header Row
function renderHeader(){
  var rowEl = document.createElement('tr');
  var headEl = document.createElement('th');
  var hEl = document.createElement('th');
  rowEl.appendChild(hEl);
//loops through the hoursOP and creates a table row with each of the hour sof operation
  for (var i=0; i<hoursOP.length; i++){
    headEl = document.createElement('th');
    var dataEl = document.createElement('td');
    dataEl.textContent = hoursOP[i];
    headEl.appendChild(dataEl);
    rowEl.appendChild(dataEl);
  }
  // adds column with the daily total per location
  var totalEL = document.createElement('th');
  var totalData = document.createElement('td');

  totalData.textContent = 'Daily Location Total';
  totalEL.appendChild(totalData);
  rowEl.appendChild(totalEL);
  pEl.appendChild(rowEl);
}
//creates the table rows to insert location data, adds the total cookies per location per hour into one total row
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
//creates footer row data lable per hour, loops tthrough location array and calls for stored data in array
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
    //adds the total per day and accumulates the 
    var tdEL = document.createElement('td');
    tdEL.textContent = totalPerhour;
    tRowEl.appendChild(tdEL);
    totalPerDay += totalPerhour;
  }
  var tlsAllEl = document.createElement('td');
  tlsAllEl.textContent = totalPerDay;
  tRowEl.appendChild(tlsAllEl);
}
//functions and changes to the data table have to be listed above the new store adds.
renderHeader();


new StoresData('Seattle', 23, 65, 6.3);
new StoresData('Tokyo', 3 , 24, 1.2);
new StoresData('Dubai',11, 38, 3.7);
new StoresData('Paris', 20, 38, 2.3);
new StoresData('Lima', 2, 16, 4.6);

//render footer after all other functions and changes to table have ran
renderFooter();


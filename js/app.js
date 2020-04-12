'use strict';

//DONE:create separate JS object literals for each shop location that outputs the following to the sales.html:
// DONE: Stores the min/max hourly customers, and the average cookies per customer, in object properties
// DONE: Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Done: Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals

var pSalEl = document.getElementById('sales-table');
var HoursOP = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//Generate random number function
for(var i = 0; i < HoursOP.length; i++){
  var trb = document.createElement('tr');
  trb.textContent = HoursOP[i];
  pSalEl.appendChild(trb);
}


var Store1 = {
  Location: 'Seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  HoursofOperation: '6:00am to 8:00pm',
  randomizerCH: function() {
    for (var i=0; i < HoursOP.length; i++)
      var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  },
  custPerHourcal: function() {
    for(var i=0; i <HoursOP.length; i++){
      var custPerHourcal = this.AvgCookieSale * this.randomizerCH();
      console.log(custPerHourcal);
      return Math.round(custPerHourcal);
    }
  },
};
Store1.custPerHourcal();
Store1.randomizerCH();
for(var j = 0; j < HoursOP.length; j++){
  var trb2 = document.createElement('td');
  trb2.textContent = Store1.randomizerCH();
  pSalEl.appendChild(trb2);
}

/*
var Store2 = {
  Location: 'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  Hoursofoperation: '6:00am to 8:00pm',
  TlHours: 14,
  CustPerHour:[],
  RandomizerCH: function (){
    var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  },
  //calculate simulated cookies purchased for each hour
  custPerHourcal: function() {
    for(var i=0; i<HoursOP.length; i++){
      var custPerHourcal = this.AvgCookieSale * this.randomizerCH();
      return Math.round(custPerHourcal);
    }
  },
};
Store2.custPerHourcal();
Store2.randomizerCH();

var Store3 = {
  Location: 'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  Hoursofoperation: '6:00am to 8:00pm',
  tlHours: 14,
  CustPerHour:[],
  RandomizerCH: function (){
    var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  },
  //calculate simulated cookies purchased for each hour
  custPerHourcal: function() {
    for(var i=0; i<HoursOP.length; i++){
      var custPerHourcal = this.AvgCookieSale * this.randomizerCH();
      return Math.round(custPerHourcal);
    }
  },
};
Store3.custPerHourcal();
Store3.randomizerCH();
var Store4 = {
  Location: 'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  Hoursofoperation: '6:00am to 8:00pm',
  tlHours: 14,
  CustPerHour:[],
  RandomizerCH: function (){
    var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  },
  //calculate simulated cookies purchased for each hour
  custPerHourcal: function() {
    for(var i=0; i<HoursOP.length; i++){
      var custPerHourcal = this.AvgCookieSale * this.randomizerCH();
      return Math.round(custPerHourcal);
    }
  },
};
Store4.custPerHourcal();
Store4.randomizerCH();
var Store5 = {
  Location: 'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  Hoursofoperation: '6:00am to 8:00pm',
  tlHours: 14,
  CustPerHour:[],
  RandomizerCH: function (){
    var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  }
  ,//calculate simulated cookies purchased for each hour
  custPerHourcal: function() {
    for(var i=0; i<HoursOP.length; i++){
      var custPerHourcal = this.AvgCookieSale * this.randomizerCH();
      return Math.round(custPerHourcal);}
  },
};
Store5.custPerHourcal();
Store5.randomizerCH();
*/
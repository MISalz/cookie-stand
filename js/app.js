/* eslint-disable no-unused-vars */
'use strict';

// create separate JS object literals for each shop location that outputs the following to the sales.html:
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals 

var HoursOP =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

var Store1 = {
  Location: 'Seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  HoursofOperation: '6:00am to 8:00pm',
  TlHours: 14,
  CustPerHour:[],
  RandomizerCH: function (){
    var RandomizerCH = Math.floor(Math.random()*(this.MaxCust-this.MinCust)+1+this.MinCust);
    console.log(RandomizerCH);
    return RandomizerCH;
  }
};
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
  }
};
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
  }
};
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
  }
};
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
};


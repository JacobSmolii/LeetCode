// /global window:false, $:false/
// /jslint browser:true/

var main = function () {
  'use strict';
  // TODO: Put all your code BELOW this line in this 'main' function

  // Creta e a constructor names Car with 3 proprities speed, hdspace, ram
  var Computer = function (speed, hdspace, ram) {
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
  };

  // create a function which returns the price of the specific computer
  var getPrice = function () {
    var thePrice = 500;
    thePrice += this.speed === '4GHz' ? 300 : 100;
    thePrice += this.hdspace === '1TB' ? 150 : 80;
    thePrice += this.ram === '16GB' ? 200 : 100;
    return thePrice;
  };

  // set the Computer object constructor's prototype.price property
  Computer.prototype.price = getPrice;

  // create instance workComputer with speed 3.4GHz,  hdspace 500GB and ram 4GB
  var workComputer = new Computer('3.4GHz', '500GB', '4GB');

  // create instance homeComputer with speed 4GHz,  hdspace 1TB and ram 16GB
  var homeComputer = new Computer('4GHz', '1TB', '16GB');

  // create instance laptop with speed 2.93GHz,  hdspace 250GB and ram 8GB
  var laptop = new Computer('2.93GHz', '250GB', '8GB');

  // TODO: Put all your code ABOVE this line in this 'main' function
  // Build an object/hash table/associative array of the Computer objects you were supposed to create
  // with user fiendly key names using an object literal.
  var computers = {
    'Work Computer': workComputer,
    'Home Computer': homeComputer,
    Laptop: laptop,
  };
  // Append the prices of each property in the computers object/hash table/associative array
  for (var compName in computers) {
    $('#content').append('<h3>' + compName + "'s features:</h3>");
    for (var propName in computers[compName]) {
      if (propName != 'price') {
        $('#content').append(
          propName + ': ' + computers[compName][propName] + '<br />',
        );
      }
    }
    $('#content').append(
      '<strong>price</strong>: $' + computers[compName].price() + '<br />',
    );
  }

  $('#content').append('<br/>');
};

// Bind the main function to the window.onload event
window.onload = main;

var Property = require("./property.js");
var Inherits = require("../inherits.js");

Inherits(ApartmentBuilding, Property);

function ApartmentBuilding(address) {
  // A building can have many many units 
  Property.call(this, address);
}

module.exports = ApartmentBuilding;
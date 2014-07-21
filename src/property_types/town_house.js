var property = require("./property");

function TownHouse(address){
  // only has one unit per address
  Property.call(this, address);
};

// TownHouse.prototype.available = function(){
//   // a tenat it should not be available
//   this.availableUnits
// };

module.exports = TownHouse;
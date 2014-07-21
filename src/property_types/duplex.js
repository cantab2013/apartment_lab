var Property = require("./property");
var Inherits = require("../inherits.js");

Inherits(Duplex, Property);

function Duplex(address) {
  // A duplex only has 2 units;
  Property.call(this, address);
}

module.exports = Duplex;
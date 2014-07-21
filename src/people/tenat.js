var Person = require("./person.js");
var Inherits = require("../inherits.js");

Inherits(Tenat, Person);

function Tenat(name, contact) {
  // set this.name, and contact
  Person.call(this, name, contact);
  this.references = [];
};

Tenat.prototype.addReference = function(reference){
  // add reference to references
  this.references.push(reference);
};

module.exports = Tenat;
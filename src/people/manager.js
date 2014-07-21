var Person = require("./person.js");
var Inherits = require("../inherits.js");

Inherits(Manager, Person);

function Manager(name, contact) {
  // set name and contact
  Person.call(this, name, contact);
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  if(this.properties.indexOf(name) !== -1) {
      this.properties.splice(this.properties.indexOf(name), 1)
  };
};


module.exports = Manager;
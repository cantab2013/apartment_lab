function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenat) {
  // add tenat but check to make sure there
  // is a manager first and a tenat has 2 references

  if (this.manager !== "undefined") {
  	return "Property needs a manager first!";
  }
 	else {
 		if (tenat.references.length > = 2) {
			if (this.units.indexOf(unit) !== -1) {
				this.units[this.units.indexOf(unit)].tenat = tenat;
				return "Added tenant " + tenat + " to existing unit " + unit + "!";
			}
			else {
				unit.tenat = tenat;
		  	this.units.push(unit);
		  	return "Added new unit " + unit + " with tenant " + tenat + "!";
			};
 		}
 		else {
 			return "Tenant needs to have at least 2 references first!";
	 	};
 	};
};

Property.prototype.removeTenat = function(unit, tenat) {
  // remove tenat
  if(this.units.indexOf(unit) !== -1) {
      this.units.splice(this.units.indexOf(unit), 1);
  };
	return "Unit " + unit + " with tenant "	+ tenat + " is removed!";  
};

Property.prototype.availableUnits = function(){
  // return num of units available
  var count = 0;

  for (var i = 0; i < this.units.length; i += 1) {
  	if (this.units[i].tenat === null) {
  		count += 1;
  	}
  }

  return count;
}

Property.prototype.rentedUnits = function(){
  // return rented units
  var count = 0;

  for (var i = 0; i < this.units.length; i += 1) {
  	if (this.units[i].tenat !== null) {
  		count += 1;
  	}
  }

  return count;
}


module.exports = Property;
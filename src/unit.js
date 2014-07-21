function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenat = null;
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function(){
  // check for tenant
  return this.tenat === null;
}




class DataValidation {
  on;
  // Validate product
  pharmacyValidation(name = '', address = '', phone = '', location = {}) {
    name = name.replace(/\s+/g, ' ').trim();
    address = address.replace(/\s+/g, ' ').trim();
    phone = phone.replace(/\s+/g, ' ').trim();
    try {
      this.validateName(name);
      this.validateAddress(address);
      this.validatePhone(phone);
      this.validateLocation(location);
      return true;
    } catch (error) {
      throw error;
    }
  }

  // Validate name
  validateName(name) {
    // name regex
    if (!name.match(/[a-zA-Z0-9]{3,}$/)) {
      const error = new Error('name is not valid');
      throw error;
    }

    return true;
  }

  // Validate address
  validateAddress(address) {
    // address regex
    if (!address.match(/^[#.0-9a-zA-Z\s,-]+$/)) {
      const error = new Error('address is not valid');
      throw error;
    }

    return true;
  }

  // Validate phone
  validatePhone(phone) {
    // email regex
    if (!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
      const error = new Error('phone is not valid');
      throw error;
    }

    return true;
  }

  // Validate location
  validateLocation(location) {
    const { region, coordinates } = location;

    if (!region || !coordinates) {
      const error = new Error('location is not valid');
      throw error;
    }

    // region regex
    if (!region.match(/[a-zA-Z0-9]{3,30}$/)) {
      const error = new Error('region is not valid');
      throw error;
    }

    // coordinates [longitude, latitude]
    if (!Array.isArray(coordinates) || coordinates.length !== 2) {
      const error = new Error('coordinates is not valid');
      throw error;
    }

    return true;
  }
}

module.exports = DataValidation;

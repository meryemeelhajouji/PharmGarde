class DataValidation {
  on;
  // Validate product
  pharmacyValidation(name = '', address = '', phone = '', location = {}) {
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
    if (!name.match(/^[a-zA-Z0-9]{3,30}$/)) {
      const error = new Error('name is not valid');
      throw error;
    }

    return true;
  }

  // Validate address
  validateAddress(address) {
    // address regex
    if (!address.match(/^[a-zA-Z0-9]{3,30}$/)) {
      const error = new Error('address is not valid');
      throw error;
    }

    return true;
  }

  // Validate phone
  validatePhone(phone) {
    // email regex
    if (!phone.match(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)) {
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
    if (!region.match(/^[a-zA-Z0-9]{3,30}$/)) {
      const error = new Error('region is not valid');
      throw error;
    }

    // coordinates [longitude, latitude]
    const [longitude, latitude] = coordinates;
    if (longitude < -180 || longitude > 180) {
      const error = new Error('longitude is not valid');
      throw error;
    }

    if (latitude < -90 || latitude > 90) {
      const error = new Error('latitude is not valid');
      throw error;
    }

    return true;
  }
}

module.exports = DataValidation;

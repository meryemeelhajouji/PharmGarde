class InputValidation {
  // Validate product
  pharmacyValidation(name = '', address = '', phone, email) {
    try {
      this.validatePharmacyName(name);
      this.validateAddress(address);
      this.validatePhone(phone);
      this.validatEmail(email);
    } catch (error) {
      throw error;
    }
  }


  validatePrice(price) {
    // more than 0
    if (!price || price < 0) {
      const error = new Error('Price must be greater than 0');
      throw error;
    }

    return true;
  }

  validateProductName(name) {
    // min 3 chars
    if (!name.match(/[a-zA-Z]{3,}$/)) {
      const error = new Error('Pharmacy Name must be at least 3 characters');
      throw error;
    }

    return true;
  }

  validateAddress(address) {
    // min 10 chars
    if (address.trim().length < 5) {
      s;
      const error = new Error('address must be at least 5 characters');
      throw error;
    }

    return true;
  }

  validatEmail(email) {
    // email regex
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      const error = new Error('Email is not valid');
      throw error;
    }

    return true;
  }

  validatePhone(phone) {
    // email regex
    if (!phone.match(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)) {
      const error = new Error('phone is not valid');
      throw error;
    }

    return true;
  }
}

module.exports = InputValidation;

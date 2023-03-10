const Pharmacy = require('../models/pharmacy');
const DataValidtaion = require('../utils/dataValidation');
/**
 * @route   POST api/pharmacy
 * @desc    create new pharmacy
 * @access  Private
 * @method  POST
 */
const addPharmacy = async (req, res, next) => {
  try {
    const { name, address, phone, location } = req.body;

    const dataValidation = new DataValidtaion();
    dataValidation.pharmacyValidation(name, address, phone, location);

    // check if there is a pharmacy with the same name
    const exist = await Pharmacy.findOne({ name });

    if (exist) {
      const error = new Error('pharmacy already exist');
      error.status = 400;
      throw error;
    }

    const Pharmacie = await Pharmacy.create({
      name,
      address,
      phone,
      location,
    });

    res.status(200).json({
      success: true,
      data: Pharmacie,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

/**
 * @route GET api/pharmacy
 * @desc get all pharmacies
 * @access Private
 * @method GET
 */
const getAllPharmacies = async (req, res, next) => {
  try {
    const data = await Pharmacy.find({});

    res
      .send({
        success: true,
        data,
      })
      .status(200);
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

/**
 * @route PUT api/pharmacy/:id
 * @desc update pharmacy
 * @access Private
 * @method PUT
 */
const updatePharmacy = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, address, phone, location } = req.body;

    const dataValidation = new DataValidtaion();
    dataValidation.pharmacyValidation(name, address, phone, location);

    const pharmacy = await Pharmacy.findOneAndUpdate(
      { _id: id },
      {
        name,
        address,
        phone,
        location,
      }
    );

    if (!pharmacy) {
      const error = new Error('pharmacy not found');
      error.status = 400;
      throw error;
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

/**
 * @route DELETE api/pharmacy/:id
 * @desc delete pharmacy
 * @access Private
 * @method DELETE
 */
const removePharmacy = async (req, res, next) => {
  try {
    const id = req.params.id;

    const pharmacy = await Pharmacy.findOneAndDelete({ _id: id });

    if (!pharmacy) {
      const error = new Error('pharmacy not found');
      error.status = 400;
      throw error;
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

/**
 * @route GET api/pharmacy/:id
 * @desc get pharmacy by id
 * @access Private
 * @method GET
 */
const getPharmacyById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Pharmacy.findOne({ _id: id });

    if (!data) {
      const error = new Error('pharmacy not found');
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route PUT api/pharmacy/gard/:id
 * @desc change pharmacy state
 * @access Private
 * @method PUT
 */
const changePharmacyState = async (req, res, next) => {
  try {
    let idPharmacy = req.params.id;
    const pharmacy = await Pharmacy.findOne({ _id: idPharmacy });

    if (!pharmacy) {
      const error = new Error('pharmacy not found');
      error.status = 404;
      throw error;
    }

    pharmacy.status = !pharmacy.status;
    const resPharmacy = await pharmacy.save();

    res.status(200).json({
      success: true,
      data: resPharmacy,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route GET api/pharmacy/gard/active
 * @desc get pharmacies that need garding
 * @access Private
 * @method GET
 */
const getGardingPharmacies = async (req, res, next) => {
  try {
    const data = await Pharmacy.find({
      status: true,
    });
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPharmacy,
  getAllPharmacies,
  updatePharmacy,
  removePharmacy,
  getPharmacyById,
  changePharmacyState,
  getGardingPharmacies,
};

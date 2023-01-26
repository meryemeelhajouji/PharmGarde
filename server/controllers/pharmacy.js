const Pharmacy = require('../models/pharmacy')
/**
 * @route   POST api/pharmacy
 * @desc    create new pharmacy
 * @access  Private
 * @method  POST
 */
const addPharmacy = async (req, res, next) => {
  // TODO: addPharmacy controller
  const {
    name,
    address,
    phone,
    email,
    location
  } = req.body

  if (!req.body) return next(new ErrorResponse("Please provide the required data", 400))

  const pharmacy = await new Pharmacy({
    name: name,
    address: address,
    phone: phone,
    email: email,
    location: location
  });
  try {
    pharmacy.save();
    return res.status(200).json({
      pharmacy
    });
  } catch (err) {
    throw new Error(`Error creating pharmacy: ${err}`);
  }
};

/**
 * @route GET api/pharmacy
 * @desc get all pharmacies
 * @access Private
 * @method GET
 */
const getAllPharmacies = async (req, res, next) => {
  // TODO: getAllPharmacies controller
};

/**
 * @route PUT api/pharmacy/:id
 * @desc update pharmacy
 * @access Private
 * @method PUT
 */
const updatePharmacy = async (req, res, next) => {
  // TODO: updatePharmacy controller
  try {
    const {
      id
    } = req.params;
    console.log(id);
    const {
      name,
      address,
      phone,
      email,
      location
    } = req.body;
    // Find the pharmacy by id
    const pharmacy = await Pharmacy.findById(id)
    // If pharmacy does not exist, return error
    if (!pharmacy) {
      throw new Error("pharmacy not found")
    }
    // Update the pharmacy with the provided updates
    pharmacy.set(req.body);
    await pharmacy.save();
    // Send the updated pharmacy in the response
    res.status(200).json({
      success: true,
      data: pharmacy
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @route DELETE api/pharmacy/:id
 * @desc delete pharmacy
 * @access Private
 * @method DELETE
 */
const removePharmacy = async (req, res, next) => {
  // TODO: removePharmacy controller
};

/**
 * @route GET api/pharmacy/:id
 * @desc get pharmacy by id
 * @access Private
 * @method GET
 */
const getPharmacyById = async (req, res, next) => {
  // TODO: getPharmacyById controller
};

/**
 * @route PUT api/pharmacy/gard/:id
 * @desc change pharmacy state
 * @access Private
 * @method PUT
 */
const changePharmacyState = async (req, res, next) => {
  // TODO: changePharmacyState controller
};

/**
 * @route GET api/pharmacy/gard
 * @desc get pharmacies that need garding
 * @access Private
 * @method GET
 */
const getGardingPharmacies = async (req, res, next) => {
  // TODO: getGardingPharmacies controller
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
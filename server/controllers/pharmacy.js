const pharmacy = require('../models/pharmacy');

/**
 * @route   POST api/pharmacy
 * @desc    create new pharmacy
 * @access  Private
 * @method  POST
 */
const addPharmacy = async (req, res, next) => {
  // TODO: addPharmacy controller

};

/**
 * @route GET api/pharmacy
 * @desc get all pharmacies
 * @access Private
 * @method GET
 */
const getAllPharmacies = async (req, res, next) => {
  // TODO: getAllPharmacies controller
  try {
    const data = await pharmacy.find({});

    console.log(data);

    res.send(data).status(200);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'pharmacy is not founded' });
  }
};

/**
 * @route PUT api/pharmacy/:id
 * @desc update pharmacy
 * @access Private
 * @method PUT
 */
const updatePharmacy = async (req, res, next) => {
  // TODO: updatePharmacy controller
};

/**
 * @route DELETE api/pharmacy/:id
 * @desc delete pharmacy
 * @access Private
 * @method DELETE
 */
const removePharmacy = async (req, res, next) => {
  // TODO: removePharmacy controller
  const id = req.params.id;
  await pharmacy.findByIdAndDelete({ _id: id });

  res.status(200).json({
    success: true,
    message: 'pharmacy deleted successfully',
  });
};

/**
 * @route GET api/pharmacy/:id
 * @desc get pharmacy by id
 * @access Private
 * @method GET
 */
const getPharmacyById = async (req, res, next) => {
  // TODO: getPharmacyById controller
  const id = req.params.id;
  try {
    const data = await pharmacy.findOne({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
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

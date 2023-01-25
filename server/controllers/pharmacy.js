const Pharmacy = require('../Models/pharmacy')
/**
 * @route   POST api/pharmacy
 * @desc    create new pharmacy
 * @access  Private
 * @method  POST
 */
const addPharmacy = async (req, res, next) => {
  // TODO: addPharmacy controller
  const { name, address, phone, email, location, coordinates } = req.body;

  const Pharmacie = await Pharmacy.create({
      name, 
      address, 
      phone,
     email, 
     location, 
     coordinates 
  });
  console.log(req.body);

  res.status(200).json({
    success: true,
    Pharmacie,
  });
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
  let idPharmacy = req.params.id;

  try {
    if (await Pharmacy.updateOne({ _id: idPharmacy }, { statuts:true})) res.status(200).send('updated successfully');
    else res.status(400).send('Pharmacy dont  existe');
  } catch (error) {
    next(error);
  }
};

/**
 * @route GET api/pharmacy/gard
 * @desc get pharmacies that need garding
 * @access Private
 * @method GET
 */
const getGardingPharmacies = async (req, res, next) => {
  // TODO: getGardingPharmacies controller
  try {
    const Pharmacie = await Pharmacy.find({
      statuts: true,
    });
    res.status(200).json({
      success: true,
      Pharmacie: Pharmacie,
    });
  } catch (error) {
    res.status(400).send(error);
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

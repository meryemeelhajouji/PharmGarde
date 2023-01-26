const Pharmacy = require('../models/pharmacy')
/**
 * @route   POST api/pharmacy
 * @desc    create new pharmacy
 * @access  Private
 * @method  POST
 */
const addPharmacy = async (req, res, next) => {
  // TODO: addPharmacy controller
  try {
    const {
      name,
      address,
      phone,
      email,
      location
    } = req.body
  
    if (!req.body) throw new Error("Please provide the required data")
  
    const pharmacy = new Pharmacy({
      name: name,
      address: address,
      phone: phone,
      email: email,
      location: location
    });
    pharmacy.save();
    return res.status(200).json({
      pharmacy
    });
  } catch (err) {
    err.status = 400
    next(err)
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
  try {
    const data = await Pharmacy.find({});

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
  const id = req.params.id;
  await Pharmacy.findByIdAndDelete({ _id: id });

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
    const data = await Pharmacy.findOne({ _id: id });
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
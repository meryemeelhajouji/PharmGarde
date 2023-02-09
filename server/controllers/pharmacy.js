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
    console.log(name);
    console.log(name.match(/[a-zA-Z0-9]{3,}$/));

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
    if (await Pharmacy.updateOne({ _id: idPharmacy }, { statuts: true })) res.status(200).send('updated successfully');
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
    const data = await Pharmacy.find({
      statuts: true,
    });
    res.status(200).json({
      success: true,
      data: data,
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

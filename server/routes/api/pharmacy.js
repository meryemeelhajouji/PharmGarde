const router = require('express').Router();
const {
  addPharmacy,
  getAllPharmacies,
  updatePharmacy,
  removePharmacy,
  getPharmacyById,
  changePharmacyState,
  getGardingPharmacies,
} = require('../../controllers/pharmacy');

router.post('/', addPharmacy);
router.get('/', getAllPharmacies);
router.put('/:id', updatePharmacy);
router.delete('/:id', removePharmacy);
router.get('/:id', getPharmacyById);
router.put('/gard/:id', changePharmacyState);
router.get('/gard/active', getGardingPharmacies);

module.exports = router;

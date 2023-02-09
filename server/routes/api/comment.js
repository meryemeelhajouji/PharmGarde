const router = require('express').Router();
const { addComment, getPharmacyComments } = require('../../controllers/comment');

router.post('/:id', addComment);
// router.get('/', getAllComments);
router.get('/:id', getPharmacyComments);

module.exports = router;

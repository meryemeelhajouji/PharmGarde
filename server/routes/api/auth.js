const router = require('express').Router();
const { login, verify } = require('../../controllers/auth');

router.post('/login', login);
router.get('/', verify);

module.exports = router;

const router = require('express').Router();
const { login, verify, forgetPassword } = require('../../controllers/auth');

router.post('/login', login);
router.get('/verify', verify);
router.post('/forget', forgetPassword);

module.exports = router;

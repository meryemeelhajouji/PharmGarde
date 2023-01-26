const router = require('express').Router();
const { login, verify, forgetPassword, resetPassword } = require('../../controllers/auth');

router.post('/login', login);
router.get('/verify', verify);
router.post('/forget', forgetPassword);
router.post('/reset/:token', resetPassword);

module.exports = router;

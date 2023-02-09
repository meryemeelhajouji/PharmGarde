const router = require('express').Router();

// api/auth
router.use('/api/auth', require('./api/auth'));

// api/pharmacy
router.use('/api/pharmacy', require('./api/pharmacy'));

// api/comment
router.use('/api/comment', require('./api/comment'));

module.exports = router;

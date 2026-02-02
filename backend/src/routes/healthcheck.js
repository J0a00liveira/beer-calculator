const express = require('express');
const router = express.Router();
const HTTP_STATUS_CODE = require('../utils/http-status');

router.get('/', (req, res) => {
    res.sendStatus(HTTP_STATUS_CODE.SUCCESS);
});

module.exports = router;

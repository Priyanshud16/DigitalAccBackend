const { scanWebsite } = require('../controllers/scanController')

const express = require('express');


const router = express.Router();

router.post('/', scanWebsite);

module.exports = router;

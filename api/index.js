const express = require('express')
const router = express.Router()
const Read = require('./Read.js')
const Delete = require('./Delete.js')
const Update = require('./Update.js')
const Create = require('./Create.js')

router.get('/address', Read.getComment)
router.post('/deleteAddress', Delete.getComment)
router.post('/updateAddress', Update.getComment)
router.post('/addAddress', Create.getComment)

module.exports = router

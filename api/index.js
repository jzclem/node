const express = require('express')
const router = express.Router()
const Read = require('./Read.js')
const Delete = require('./Delete.js')
const Update = require('./Update.js')
const Create = require('./Create.js')
const Upload = require('./Upload.js')
const multer = require('multer')

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      var changedName = (new Date().getTime()) + '-' + file.originalname
      cb(null, changedName)
    }
  })
})

router.get('/address', Read.getComment)
router.post('/deleteAddress', Delete.getComment)
router.post('/updateAddress', Update.getComment)
router.post('/addAddress', Create.getComment)
router.post('/upload/single', upload.single('singleFile'), Upload.singleFile)
router.post('/upload/multer', upload.array('multerFile'), Upload.multerFile)

module.exports = router

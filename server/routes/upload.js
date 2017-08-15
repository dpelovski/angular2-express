const express = require('express')
const authCheck = require('../middleware/auth-check')
const multer = require('multer')
const path = require('path')

const router = new express.Router()

var storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({storage: storage}).single('file')

router.post('/images', upload, (req, res) => {
  const file = req.file
  const body= req.body
  res.send(file)
})

module.exports = router
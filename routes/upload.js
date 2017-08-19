const express = require('express')
const authCheck = require('../middleware/auth-check')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = new express.Router()

var storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/camps/'))
  },
  
  filename: function (req, file, cb) {
    cb(null, (new Date().getTime().toString()));
  }
})

var galleryStorage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/gallery/'))
  },
  
  filename: function (req, file, cb) {
    cb(null, (new Date().getTime().toString()));
  }
})

var upload = multer({storage: storage}).array('files')

router.post('/images', upload, authCheck, (req, res) => {
  const file = req.files
  const body = req.body

  if(!body || !file) {
    res.status(200).json({
      sucess: false,
      message: 'Няма изпратен файл'
    })
  } else {
    res.status(200).json({
      success: true,
      message: 'Файлът е качен успешно'
    })
  }
  
})

var uploadGallery = multer({storage: galleryStorage}).array('files')

router.post('/images/gallery', uploadGallery, authCheck, (req, res) => {
  const file = req.files
  const body = req.body

  if(!body || !file) {
    res.status(200).json({
      sucess: false,
      message: 'Няма изпратен файл'
    })
  } else {
    res.status(200).json({
      success: true,
      message: 'Файлът е качен успешно'
    })
  }
  
})

router.get('/images/gallery', (req, res) => {
  var path = require('path')
  
  const imageDir = path.resolve(__dirname, '../public/images/camps/')

  let allImages = []

  fs.readdir(imageDir, (err, files) => {
    files.forEach(file => {
      if(!file.startsWith('.')) {
        allImages.push('http://localhost:3005/public/images/gallery/' + file)
      }
    })

    res.status(200).json({
      images: allImages
    })
  })
  
  
})

module.exports = router
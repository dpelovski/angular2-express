const express = require('express')
const authCheck = require('../middleware/auth-check')
const Camp = require('../data/Camp')
const fs = require('fs')

const router = new express.Router()

function validateCampForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''
  
  if (!payload || typeof payload.name !== 'string' || payload.name.length < 5) {
    isFormValid = false
    errors.name = 'Името на лагера не може да е по-късо от 5 символа'
  }

  if(typeof payload.category !== 'string' || (payload.category != 'ednodnevni' && payload.category != 'detski' && payload.category != 'ekskurzionni')) {
    isFormValid = false
    errors.name = 'Категорията на лагера не може да бъде различна от еднодневни, детски или екскурзионни'
  }

  if(typeof payload.ageGroup !== 'string' || (payload.ageGroup !== '6,12' && payload.ageGroup !== '9,14')) {
    isFormValid = false
    errors.name = 'Възрастовата група не може да бъде различна от 6,12 или 9,14'
  }

  if(typeof payload.imageUrl !== 'string') {
    isFormValid = false
    errors.name = 'Грешен формат на картинка за корица'
  }

  if(typeof payload.content !== 'string') {
    isFormValid = false
    errors.name = 'Грешен формат за съдържание'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const camp = req.body
  
  const validationResult = validateCampForm(camp)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }
  Camp
    .findOne({name: camp.name})
    .then(campFound => {
      if (!campFound) {
        Camp
          .create({
            name: camp.name,
            imageUrl: camp.imageUrl,
            content: camp.content,
            shortDescription: camp.shortDescription,
            timePeriod: camp.timePeriod,
            category: camp.category,
            ageGroup: camp.ageGroup
          })
          .then(newCamp => {
            res.status(200).json({
              success: true,
              message: 'Успешно създадохте лагер!',
              newCamp
            })
          })
          .catch(err => {
            res.status(200).json({
              success: false,
              message: 'Възникна грешка при добавянето на лагер',
              camp
            })
          })
      } else {
        res.status(200).json({
          success: false,
          message: 'Лагер с такова име вече съществува',
          camp
        })
      }
    })
})

router.get('/all', (req, res) => {
  Camp
    .find({})
    .then(camps => {
      res.status(200).json(camps)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/edit/:id', authCheck, (req, res) => {
  let campId = req.params.id

  Camp
    .findById(campId)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/edit/:id', authCheck, (req, res) => {
  let campId = req.params.id
  let data = req.body

  const validationResult = validateCampForm(data)

  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

   Camp
    .findById(campId)
    .then(camp => {
      camp.name = data.name
      camp.ageGroup = data.ageGroup
      camp.category = data.category
      camp.imageUrl = data.imageUrl
      camp.content = data.content
      camp.timePeriod = data.timePeriod
      camp.shortDescription = data.shortDescription
      camp
        .save()
        .then(updatedCategory => {
          res.status(200).json({
            success: true,
            message: 'Успешно редактирахте лагер'
          })
        })
    })
    .catch(err => {
      res.status(200).json({
        success: false,
        message: 'Имаше проблем при редактирането на лагер'
      })
    })
})

router.get('/delete/:id', authCheck, (req, res) => {
  let campId = req.params.id

  Camp
    .findById(campId)
    .then(camp => {
      res.status(200).json(camp)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/delete/:id', authCheck, (req, res) => {
  let campId = req.params.id

  Camp
    .findByIdAndRemove(campId)
    .then(camp => {
      res.status(200).json({
        success: true,
        message: 'Лагерът е изтрит успешно'
      })
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/fetch/:name', authCheck, (req, res) => {
  let campName = req.params.name

  Camp.findOne({name: campName}).then(camp => {
    res.status(200).json(camp)
  })
  .catch(err => {
    console.log(err)
    res.status(200)
    
  })


})

router.get('/camps-gallery', (req, res) => {
  var path = require('path')

  const imageDir = path.resolve(__dirname, '../public/images/camps/')

  let allImages = []

  fs.readdir(imageDir, (err, files) => {
    files.forEach(file => {
      if(!file.startsWith('.')) {
        console.log(file)
        allImages.push('http://localhost:3005/public/images/camps/' + file)
      }
    })
  })
  

  res.render('camps-gallery/camps', {
    allImages: allImages
  })
})

module.exports = router

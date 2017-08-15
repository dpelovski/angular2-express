const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('./passport/local-signup')
const localLoginStrategy = require('./passport/local-login')

const authRoutes = require('./routes/auth')
const campsRoutes = require('./routes/camps')
const uploadRoutes = require('./routes/upload')
const handlebars = require('express-handlebars')
// db
let env = process.env.NODE_ENV || 'development'
let settings = require('./config/settings')[env]

const app = express()

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())
// db
require('./config/database')(settings)

passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/public", express.static(path.join(__dirname, 'public')));

// routes
app.use('/auth', authRoutes)
app.use('/camps', campsRoutes)
app.use('/upload', uploadRoutes)

app.listen(settings.port, () => {
  console.log(`Server running on port ${settings.port}...`)
})

const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3500
const router = require('./routers')
const db = require('./config/db')


//connect db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
    // HTPP logger
app.use(morgan('combined')) // dung theo tieu chuan, xem debug
    //template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resoureces', 'views'))

//Router init
router(app)

app.get('/', (req, res) => res.render('home'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const newRouter = require('./news')
const siteRouter = require('./site')

function router(app) {

    app.use('/news', newRouter)

    // home search  content
    app.use('/', siteRouter)

}
module.exports = router
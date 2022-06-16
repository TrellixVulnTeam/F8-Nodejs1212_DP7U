class SiteRouter {
    search(req, res) {
        console.log(req.body)
        res.send('')
    }
    index(req, res) {
        res.render('home')
    }
}
module.exports = new SiteRouter
const user = require('./users')

const initRoutes = (app) => {
    app.use('/users',user)
    return app.use('/', (req, res) => {
        return res.send('Server ON')
    })
}
module.exports = initRoutes
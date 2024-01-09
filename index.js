require('dotenv').config()
require('./connection_database')
const express = require('express')
const cors = require('cors')
const ip = require('ip');
const initRoutes = require('./src/routes')
const app = express()
const server = require('http').createServer(app);
app.use(cors({
    origin:  process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

initRoutes(app)


const PORT = process.env.PORT || 8888
// const listener = app.listen(PORT, () => {
//     console.log('Server is running on port: ' + listener.address().port);
// })

const listener = server.listen(port = 9999, hostname = "0.0.0.0", () => {
    console.log(`Server is running on port: http://localhost: ${listener.address().port}`);
    console.log(`IP address: http://${ip.address()}:9999`);
});

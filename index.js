require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 2222;

app.use(cors())

app.use(express.json());

app.use('/api/v1', require('./controllers/apiv1'))

app.get('/', (req, res) => {
    res.status(200).send('ACTIVE API VERSION 1.0, please visit /api/v1/users');
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
});

const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
const port = 3000

app.use('/', express.static(__dirname + '/../public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(`/api/localCountry`, (req, res) => {
  axios.get(`http://ip-api.com/json/?fields=country`)
  .then(results => res.send(results.data.country))
  .catch(err => res.status(500).send(err))
})

app.get(`/api/bigmacs/:country`, (req, res) => {
  axios.get(`https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv`)
  .then(results => results.data)
  .catch(err => res.status(500).send(err))
  .then(csv => {
    let lines = csv.split(/\r\n|\n/)
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(req.params.country) && lines[i].includes('2016')) {
        res.send(lines[i])
      }
    }
  })
})

app.get(`/api/randomCountry`, (req, res) => {
  axios.get(`https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv`)
  .then(results => results.data)
  .catch(err => res.status(500).send(err))
  .then(csv => {
    let lines = csv.split(/\r\n|\n/)
    let randomNumber = Math.floor(Math.random() * 196)
    let countryInfo = lines[randomNumber].split(',')
    if (countryInfo[0] === req.params.localCountry) {
      randomNumber = Math.floor(Math.random() * 196)
    }
    res.send(lines[randomNumber])
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
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
  // axios.get(`https://api.ipify.org?format=json`)
  // .then(results => results.data.ip)
  // .catch(err => res.status(500).send(err))
  // .then(ip => {
  //   axios.get(`https://ipvigilante.com/json/${ip}/country_name`)
  //   .then( results => {
  //     sessionStorage.setItem(localCountry, results.data.data.country_name)
  //     res.send(results.data.data.country_name)
  //   })
  //   .catch( err => res.status(500).send(err));
  // })
  res.send('United States')
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
    res.send(lines[randomNumber])
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
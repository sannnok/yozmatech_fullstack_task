const express = require('express')
const app = express()
const reports = require('./mock.js');
const port = 4000


app.get('/api/reports', (req, res) => {
  res.json(reports)
})

app.listen(port, () => {
  console.log(`Mock app listening on port ${port}`)
})

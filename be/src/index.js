const express = require('express')
const app = express()
const reports = require('./mock.js');

const port = 4000

const partnerList = reports.reduce((acc, report) => {
  if (acc.includes(report.clientid)) {
    return acc
  }
  return [...acc, report.clientid]

}, [])

const countriesList = reports.reduce((acc, report) => {
  if (acc.includes(report.countryid)) {
    return acc
  }
  return [...acc, report.countryid]

}, [])

const getAverageReportsPerDay = () => {
  const reportsTyimestamps = reports.map(report => report.creationdate)

  const oldestDate = Math.min(reportsTyimestamps)
  const newestDate = Math.max(reportsTyimestamps)
  const diffTime = Math.abs(newestDate - oldestDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const totalDays = diffDays + 1 
  return reports.length / totalDays
}


app.get('/api/reports', (req, res) => {
  res.json(reports)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// <ChartDsiplay
//   description={<div><img src="arrow-up.jpg" /><p>Increase by 25%</p></div>}
// />

// <ChartDsiplay
//   description={<div><p>Increase by 25%</p></div>}
// />

// const ChartDsiplay = ({description, title}) => {
//   ...
//   return (
//     <title>{title}</title>]
//     <div>{description}</div>
//   )
  
// }
const express = require('express')
const app = express()

const port = 3000

const reports = [
  {
    "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058", 
    "category": "category 71", // должны где-то повторяться, где-то быть уникальными
    "countryid": "ca",
    "creationdate": 1652696989789.922, // должны быть для всех дней недели, тоесть все 7 дней, включая сегодняшний
    "id": "32b1bf18-6685-4043-9d7a-0c25c928aa86",
    "clientid": "0f1cf6dc-ec41-4c33-97a0-e2fff4648ed5",  // должны где-то повторяться, где-то быть уникальными
    "subcategory": "subcategory 21" // должны где-то повторяться, где-то быть уникальными
  },
  {
    "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058", 
    "category": "category 72",
    "countryid": "usa",
    "creationdate": 1652696989789.923,
    "id": "32b1bf18-6685-4043-9d7a-0c25c928aa87",
    "clientid": "0f1cf6dc-ec41-4c33-97a0-e2fff4648ed5", 
    "subcategory": "subcategory 21"
  },
  {
    "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058", 
    "category": "category 72",
    "countryid": "usa",
    "creationdate": 1652696989789.920,
    "id": "32b1bf18-6685-4043-9d7a-0c25c928aa81",
    "clientid": "0f1cf6dc-ec41-4c33-97a0-e2fff4648ed5", 
    "subcategory": "subcategory 21"
  }
]



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
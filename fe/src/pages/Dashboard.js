import React from 'react';
import {useState, useEffect} from 'react';

export const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/reports')
        .then((res) => res.json())
        .then((data) => {
          setReports(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {reports.map((report, index) => {
          return (<div key={index}>{report.category}</div>);
        })}
      </div>
    </div>
  );
};

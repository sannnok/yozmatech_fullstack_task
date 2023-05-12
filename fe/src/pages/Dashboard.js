import React from 'react';
import {useState, useEffect} from 'react';
import {WidgetGrid} from '../components/WidgetGrid';

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
      <WidgetGrid reports={reports}/>
    </div>
  );
};

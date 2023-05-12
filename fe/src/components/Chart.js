import React from 'react';
import {LineChart, BarChart, Bar, Line, XAxis, YAxis,
  CartesianGrid, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const margin = {
  top: 15,
  right: 20,
  left: -25,
  bottom: 5,
};

export const Chart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white', fontSize: 12}} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white', fontSize: 12}} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="white"
          strokeWidth={2}
          dot={{r: 2}}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export const ChartBar = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}
        margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white', fontSize: 12}} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white', fontSize: 12}} />
        <Bar dataKey="value" fill="white" barSize={10}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ChartBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

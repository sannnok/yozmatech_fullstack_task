import React from 'react';
import styled from 'styled-components';
import {Widget} from '../components/Widget';
import {FiArrowUp, FiCalendar, FiInfo} from 'react-icons/fi';
import {MdOutlineContentCopy, MdStoreMallDirectory} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {AiOutlineFieldTime} from 'react-icons/ai';
import PropTypes from 'prop-types';
import {Chart, ChartBar} from './Chart';


export const WidgetGrid = ({reports}) => {
  const partnerList = findUnique(reports, 'clientid');
  const countriesList = findUnique(reports, 'countryid');
  const minDate = getMinDate(reports);
  const averageReportsPerDay = getAverageReportsPerDay(reports);
  const reportsByWeekDays = getReportsByWeekDays(reports);
  const reportsCountByCountries = getReportsCountByCountries(reports);
  const reportsCountByCategoryId = getReportsCountByCategoryId(reports);

  return (
    <div>
      <Row>
        <WidgetContainer>
          <Widget
            sideTitle={'Reports Amount'}
            sideValue={reports.length}
            posterColor='orange'
            posterData={<MdOutlineContentCopy size={30} />}
            footerIcon={<FiArrowUp />}/>
        </WidgetContainer>
        <WidgetContainer>
          <Widget
            sideTitle={'Partner count'}
            posterColor='green'
            posterData={<MdStoreMallDirectory size={30} />}
            sideValue={partnerList.length}
            footerIcon={<FiCalendar />}
            footer={`Since ${Date(minDate)}`} />
        </WidgetContainer>
        <WidgetContainer>
          <Widget
            sideTitle={'Countries count'}
            sideValue={countriesList.length}
            posterColor='red'
            posterData={<FiInfo size={30} />} />
        </WidgetContainer>
        <WidgetContainer>
          <Widget
            sideTitle={'Reports Rate'}
            sideValue={averageReportsPerDay}
            posterColor='blue'
            footer={'Per day'}
            posterData={<BsTwitter size={30} />}
            footerIcon={<AiOutlineFieldTime />} />
        </WidgetContainer>
      </Row>
      <Row>
        <WidgetContainer>
          <Widget
            header={'Weekday breakdown'}
            posterColor='green'
            posterData={<Chart data={reportsByWeekDays}/>}
            description={<>
              <span className='green'><FiArrowUp size={13}/>25</span>
              <span>&nbsp;average per day</span>
            </>}
            footer={`starting ${Date(minDate)}`}
            footerIcon={<AiOutlineFieldTime />} />
        </WidgetContainer>
        <WidgetContainer>
          <Widget
            header={'Breakdown by countries'}
            posterColor='orange'
            posterData={
              <ChartBar data={reportsCountByCountries}/>
            }
            description={'For the whole period'}
            footer={`starting ${Date(minDate)}`}
            footerIcon={<AiOutlineFieldTime />} />
        </WidgetContainer>
        <WidgetContainer>
          <Widget
            header={'Breakdown by category'}
            posterColor='red'
            posterData={<Chart data={reportsCountByCategoryId}/>}
            description='Category number'
            footer={`starting ${Date(minDate)}`}
            footerIcon={<AiOutlineFieldTime />} />
        </WidgetContainer>
      </Row>
    </div>
  );
};


const WidgetContainer = styled.div`
  flex: 1 0 20%;
  margin: 10px;
  padding: 2px;
  box-sizing: border-box;

  .green {
    color: green;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const findUnique = (reports, field) => {
  return reports?.reduce((acc, report) => {
    if (acc.includes(report[field])) {
      return acc;
    }
    return [...acc, report[field]];
  }, []);
};

const getAverageReportsPerDay = (reports) => {
  if (reports.length === 0) return;
  const reportsTyimestamps = reports.map((report) => report.creationdate);
  const oldestDate = Math.min(...reportsTyimestamps);
  const newestDate = Math.max(...reportsTyimestamps);
  const diffTime = Math.abs(newestDate - oldestDate) * 1000;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalDays = diffDays + 1;
  return Math.ceil(reports.length / totalDays);
};

const getMinDate = (reports) => {
  const reportsTyimestamps = reports.map((report) => report.creationdate);
  return Math.min(...reportsTyimestamps) * 1000;
};

const getReportsByWeekDays = (reports) => {
  const weekDays = ['Sun', 'M', 'Tu', 'W', 'T', 'F', 'S'];
  const currentDate = new Date();

  const countByDay = {};

  for (const report of reports) {
    const reportDate = new Date(report.creationdate * 1000);
    // Adjusting to start from Sunday (index 0)
    const dayIndex = (reportDate.getDay() + 6) % 7;


    if (currentDate.getTime() - reportDate.getTime() <
      7 * 24 * 60 * 60 * 1000) {
      countByDay[weekDays[dayIndex]] =
        (countByDay[weekDays[dayIndex]] || 0) + 1;
    }
  }

  const reportsPerDay = Object.entries(countByDay)
      .map(([name, value]) => ({name, value}));

  return reportsPerDay;
};

const getReportsCountByCountries = (reports) => {
  const reportsCount = reports.reduce((count, report) => {
    const country = report.countryid;
    count[country] = (count[country] || 0) + 1;
    return count;
  }, {});

  const reportsCountArray = Object.entries(reportsCount)
      .map(([name, value]) => ({
        name,
        value,
      }));

  return reportsCountArray;
};

const getReportsCountByCategoryId = (reports) => {
  const reportsCount = reports.reduce((count, report) => {
    const categoryId = report.category.match(/\d+/)[0];
    count[categoryId] = (count[categoryId] || 0) + 1;
    return count;
  }, {});

  const reportsCountArray = Object.entries(reportsCount)
      .map(([name, value]) => ({
        name,
        value,
      }));

  return reportsCountArray;
};


WidgetGrid.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object),
};

import React from 'react';
import styled from 'styled-components';
import {Widget} from '../components/Widget';
import {FiArrowUp, FiCalendar, FiInfo} from 'react-icons/fi';
import {MdOutlineContentCopy, MdStoreMallDirectory} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {AiOutlineFieldTime} from 'react-icons/ai';
import PropTypes from 'prop-types';

const WidgetContainer = styled.div`
  flex: 1 0 20%;
  margin: 10px;
  padding: 2px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

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
  const reportsTyimestamps = reports.map((report) => report.creationdate);
  const oldestDate = Math.min(...reportsTyimestamps);
  const newestDate = Math.max(...reportsTyimestamps);
  const diffTime = Math.abs(newestDate - oldestDate) * 1000;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalDays = diffDays + 1;
  return reports.length / totalDays;
};

const getMinDate = (reports) => {
  const reportsTyimestamps = reports.map((report) => report.creationdate);
  return Math.min(...reportsTyimestamps) * 1000;
};


export const WidgetGrid = ({reports}) => {
  const partnerList = findUnique(reports, 'clientid');
  const countriesList = findUnique(reports, 'countryid');
  const minDate = getMinDate(reports);
  const averageReportsPerDay = getAverageReportsPerDay(reports);

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
            header={'Countries count'}
            posterColor='red'
            posterData={<FiInfo size={30} />} />
        </WidgetContainer>
        <WidgetContainer>6</WidgetContainer>
        <WidgetContainer>7</WidgetContainer>
      </Row>
    </div>
  );
};

WidgetGrid.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object),
};

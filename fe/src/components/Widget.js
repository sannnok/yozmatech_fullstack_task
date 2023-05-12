import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WidgetContainer = styled.div`
  height: fit-content;
  box-shadow: rgb(176, 176, 176) 0px 1px 3px 0px;
  background: white;
  justify-content: space-between;
  position: relative;
  padding: 8px;
  border-radius: 2px;
  color: var(--widget-text-color);
`;

const MainContent = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;

  .chart-poster {
    width: 100%;
    position: relative;
    top: -22px;
    height: 120px;
  }
`;

const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  height: 60px;
  width: 60px;
  background: var(--orange);
  border-radius: 3px;
  position: absolute;
  top: -13px;

`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

const SideTitle = styled.div`
  font-size: 12px;
`;

const SideValue = styled.div`
`;

const Empty = styled.div`
`;

const FooterContainer = styled.div`
  padding-top: 16px;
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  padding: 8px 0 0;

  .line-height {
    line-height: 17px;
  }
`;

const Header = styled.div`
  margin-top: -8px;
  padding-left: 4px;
`;

const Description = styled.div`
  font-size: 12px;
  padding-top: 8px;
  padding-left: 4px;
`;

const Delimiter = styled.hr`
  margin: 0;
  border-top: 1px solid #bebebe;
`;


export const Widget = ({
  sideTitle,
  sideValue,
  header: isChart,
  description,
  footerIcon,
  footer,
  posterData,
  posterColor,
}) => {
  return (
    <WidgetContainer>
      <MainContent>
        <PosterContainer className={
          `state-${posterColor} ${isChart ? 'chart-poster' : ''}`}>
          {posterData}
        </PosterContainer>
        {
          !isChart ?
          <>
            <Empty />
            <SideContent>
              <SideTitle>{sideTitle || '<header>'}</SideTitle>
              <SideValue>{sideValue || 0 || '<value>'}</SideValue>
            </SideContent>
          </> : ''
        }
      </MainContent>
      <Header>{isChart}</Header>
      <Description>{description}</Description>
      {
        footer ?
          <FooterContainer>
            <Delimiter />
            <Footer>
              <span className='line-height'>{footerIcon}</span>
              &nbsp;<span>{footer}</span>
            </Footer>
          </FooterContainer> : ''
      }
    </WidgetContainer>
  );
};


Widget.propTypes = {
  posterData: PropTypes.element,
  posterColor: PropTypes.string,
  sideTitle: PropTypes.string,
  sideValue: PropTypes.number,
  footer: PropTypes.string,
  footerIcon: PropTypes.element,
  header: PropTypes.string,
  description: PropTypes.any,
};

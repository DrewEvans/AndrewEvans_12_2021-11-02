import {
  HorizontalNav,
  VerticalNav,
  WelcomeHeader,
  DailyActivityIcon,
  ActivityBarChart,
  LineChartDuration,
  ActivtiyRadarChart,
  ObjectiveRadialChart,
} from "../components/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const fireIcon = <FontAwesomeIcon icon={faFire} />;
const meatIcon = <FontAwesomeIcon icon={faDrumstickBite} />;
const appleIcon = <FontAwesomeIcon icon={faAppleAlt} />;
const hamburgerIcon = <FontAwesomeIcon icon={faHamburger} />;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.2fr 2.1fr 0.7fr;
  grid-template-rows: 0.3fr 0.6fr 2.1fr;
  grid-template-areas:
    "nav nav nav"
    "aside main main"
    "aside content section";
`;

const Main = styled.main`
  grid-area: main;
`;

const MulitGridWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 1300px;
`;

const Aside = styled.aside`
  grid-area: aside;
`;

const NavBar = styled.nav`
  grid-area: nav;
`;

const Content = styled.div`
  grid-area: content;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  flex-wrap: Wrap;
`;

const Section = styled.section`
  grid-area: section;
  display flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 5rem;
`;

export const Home = () => {
  return (
    <>
      <Container>
        <NavBar>
          <HorizontalNav />
        </NavBar>
        <Aside>
          <VerticalNav />
        </Aside>
        <Main>
          <WelcomeHeader name='John' />
        </Main>

        <Content>
          <ActivityBarChart />
          <MulitGridWrapper>
            <LineChartDuration />
            <ActivtiyRadarChart />
            <ObjectiveRadialChart />
          </MulitGridWrapper>
        </Content>

        <Section>
          <DailyActivityIcon
            icon={fireIcon}
            metricAbv='kCal'
            type='Calories'
            amount='1234'
          />
          <DailyActivityIcon
            icon={meatIcon}
            metricAbv='g'
            type='Proteines'
            amount='123'
          />
          <DailyActivityIcon
            icon={appleIcon}
            metricAbv='g'
            type='Proteines'
            amount='123'
          />
          <DailyActivityIcon
            icon={hamburgerIcon}
            metricAbv='g'
            type='Lipides'
            amount='12'
          />
        </Section>
      </Container>
    </>
  );
};

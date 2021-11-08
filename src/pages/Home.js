import { DailyActivityIcon } from "../components/DailyActivityIcon";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { HorizontalNav } from "../components/HorizontalNav";
import { VerticalNav } from "../components/VerticalNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { BarChart } from "../components/BarChart";
/**
 * *Images imported from fontawesome for daily Icons
 * *passed as props
 */
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

const Aside = styled.aside`
  grid-area: aside;
`;

const NavBar = styled.nav`
  grid-area: nav;
`;

const Content = styled.div`
  grid-area: content;
  margin-bottom: 5rem;
`;

const Section = styled.section`
  grid-area: section;
  display flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

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
          <BarChart weight={array1} calsBurned={array2} />
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

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
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

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
  width: 1150px;
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

const Home = () => {
  const [userData, setUserData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchUser);
      setUserData(request.data.data);
      return request;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requests = {
    fetchPerformance: `/user/${id}/performance`,
    fetchSessions: `/user/${id}/average-sessions`,
    fetchUser: `/user/${id}`,
    fetchActivity: `/user/${id}/activity`,
  };

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
          {userData && <WelcomeHeader name={userData.userInfos.firstName} />}
        </Main>

        <Content>
          <ActivityBarChart fetchUrl={requests.fetchActivity} />
          <MulitGridWrapper>
            <LineChartDuration fetchUrl={requests.fetchSessions} />
            <ActivtiyRadarChart fetchUrl={requests.fetchPerformance} />
            {userData && (
              <ObjectiveRadialChart
                score={Math.floor(userData.todayScore * 100)}
              />
            )}
          </MulitGridWrapper>
        </Content>

        <Section>
          {userData && (
            <DailyActivityIcon
              icon={fireIcon}
              metricAbv='kCal'
              type='Calories'
              amount={userData.keyData.calorieCount}
            />
          )}
          {userData && (
            <DailyActivityIcon
              icon={meatIcon}
              metricAbv='g'
              type='Proteines'
              amount={userData.keyData.proteinCount}
            />
          )}
          {userData && (
            <DailyActivityIcon
              icon={appleIcon}
              metricAbv='g'
              type='Carbohydrate'
              amount={userData.keyData.carbohydrateCount}
            />
          )}
          {userData && (
            <DailyActivityIcon
              icon={hamburgerIcon}
              metricAbv='g'
              type='Lipides'
              amount={userData.keyData.lipidCount}
            />
          )}
        </Section>
      </Container>
    </>
  );
};
export default Home;

import { DailyActivityIcon } from "../components/DailyActivityIcon";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { HorizontalNav } from "../components/HorizontalNav";
import { VerticalNav } from "../components/VerticalNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
/**
 * *Images imported from fontawesome for daily Icons
 * *passed as props
 */
const fireIcon = <FontAwesomeIcon icon={faFire} />;
const meatIcon = <FontAwesomeIcon icon={faDrumstickBite} />;
const appleIcon = <FontAwesomeIcon icon={faAppleAlt} />;
const hamburgerIcon = <FontAwesomeIcon icon={faHamburger} />;

export const Home = () => {
  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <WelcomeHeader name='John' />
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
    </>
  );
};

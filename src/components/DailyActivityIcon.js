import { PropTypes } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  width: 18rem;
  height: 7.5rem;
  margin-top: 2.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

/*
 * If icon prop name matches one of the four labeled use the theme
 * css color objects located on ../index.js for the designs
 */
const IconWrapper = styled.div`
  background-color: ${(props) => {
    if (props.children.props.icon.iconName === "fire") {
      return props.theme.redIconBg;
    }
    if (props.children.props.icon.iconName === "drumstick-bite") {
      return props.theme.blueIconBg;
    }
    if (props.children.props.icon.iconName === "apple-alt") {
      return props.theme.yellowIconBg;
    }
    if (props.children.props.icon.iconName === "hamburger") {
      return props.theme.pinkIconBg;
    }
  }};
  color: ${(props) => {
    if (props.children.props.icon.iconName === "fire") {
      return props.theme.redIcon;
    }
    if (props.children.props.icon.iconName === "drumstick-bite") {
      return props.theme.blueIcon;
    }
    if (props.children.props.icon.iconName === "apple-alt") {
      return props.theme.yellowIcon;
    }
    if (props.children.props.icon.iconName === "hamburger") {
      return props.theme.pinkIcon;
    }
  }};
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const AmountWrapper = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TextAmount = styled.p`
  color: #f2f2f2f;
  font-size: 1.5em;
  margin: 0.25em;
`;

const TextWrapper = styled.p`
  color: #74798c;
  font-size: 1em;
  margin: 0.25em;
`;

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const icon = fire
 * const metricAbv = 'cKcal'
 * const type = 'Calories'
 * const amount = '2500'
 *
 * return (
 *   <DailyIcon icon={flame} metricAbv={'cKal'} type={'calories'} amount={calorieCount} />
 * )
 */

const DailyActivityIcon = ({ icon, metricAbv, type, amount }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <AmountWrapper>
        <TextAmount>
          {amount}
          {metricAbv}
        </TextAmount>
        <TextWrapper>{type}</TextWrapper>
      </AmountWrapper>
    </Wrapper>
  );
};
export default DailyActivityIcon;

DailyActivityIcon.propTypes = {
  /**
   * Intake Type abbreviation
   */
  metricAbv: PropTypes.string,
  /**
   * User Daily Intake Type
   */
  type: PropTypes.string,
  /**
   * User Daily Intake Amount
   */
  amount: PropTypes.number,
};

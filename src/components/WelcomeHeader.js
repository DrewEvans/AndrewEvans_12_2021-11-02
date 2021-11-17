import Emoji from "a11y-react-emoji";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin: 2.5em 10em;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const NameCallout = styled.span`
  color: red;
`;

const MotivationalText = styled.p`
  font-weight: 400;
  font-size: 2em;
  margin: 0.25em 0;
`;

/**
 * Component for showing welcome message to the user.
 *
 * @component
 * @example
 * const name = firstName
 *
 * return (
 *   <WelcomeHeader name={firstName} >
 * )
 */

const WelcomeHeader = ({ name }) => {
  return (
    <Wrapper>
      <Title>
        Bonjour <NameCallout>{name}</NameCallout>
      </Title>
      <MotivationalText>
        Félications ! Vous avez explosé vos objectifs hier{" "}
        <Emoji symbol='👏' label='hand clap' />
      </MotivationalText>
    </Wrapper>
  );
};
export default WelcomeHeader;

WelcomeHeader.propTypes = {
  name: PropTypes.string,
};

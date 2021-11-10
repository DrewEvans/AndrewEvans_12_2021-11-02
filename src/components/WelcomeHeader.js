import Emoji from "a11y-react-emoji";
import styled from "styled-components";

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

const WelcomeHeader = ({ name }) => {
  return (
    <>
      <Wrapper>
        <Title>
          Bonjour <NameCallout>{name}</NameCallout>
        </Title>
        <MotivationalText>
          Félications ! Vous avez explosé vos objectifs hier{" "}
          <Emoji symbol='👏' label='hand clap' />
        </MotivationalText>
      </Wrapper>
    </>
  );
};
export default WelcomeHeader;

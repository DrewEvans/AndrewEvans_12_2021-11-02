import Emoji from "a11y-react-emoji"
import styled from "styled-components";

const Title = styled.h1`
font-size: 1.5em;
`; 

const NameCallout = styled.span`
color: red;
`;

const MotivationalText = styled.p`
font-weight: 400;
font-size: 1em;
`;


export const WelcomeHeader = ({name}) =>{
    return <>
        <Title>
        Bonjour <NameCallout>{name}</NameCallout>
        </Title>
        <MotivationalText>Félications ! Vous avez explosé vos objectifs hier <Emoji symbol="👏" label="hand clap" /></MotivationalText>
    </>
}
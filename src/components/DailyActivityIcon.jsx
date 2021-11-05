import styled from "styled-components"

const Wrapper = styled.div`
background-color: #FBFBFB;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
width: 250px;
height: 130px;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const IconWrapper = styled.div`
background-color: ${(props)=>{
    if(props.children.props.icon.iconName === "fire"){
        return props.theme.redIconBg
    }
    if(props.children.props.icon.iconName === "drumstick-bite"){
        return props.theme.blueIconBg
    }
    if(props.children.props.icon.iconName === "apple-alt"){
        return props.theme.yellowIconBg
    }
    if(props.children.props.icon.iconName === "hamburger"){
        return props.theme.pinkIconBg
    }
}};
color: ${(props)=>{
    if(props.children.props.icon.iconName === "fire"){
        return props.theme.redIcon
    }
    if(props.children.props.icon.iconName === "drumstick-bite"){
        return props.theme.blueIcon
    }
    if(props.children.props.icon.iconName === "apple-alt"){
        return props.theme.yellowIcon
    }
    if(props.children.props.icon.iconName === "hamburger"){
        return props.theme.pinkIcon
    }
}};
height: 60px;
width: 60px;
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
margin: .25em;
`;

const TextWrapper = styled.p`
color: #74798C;
font-size: .75em;
margin: .25em;
`;

export const DailyActivityIcon = ({icon, metricAbv, type, amount}) =>{
    return <>
    <Wrapper>
        <IconWrapper>
         {icon}
        </IconWrapper>
        <AmountWrapper>
            <TextAmount>
                {amount}
                {metricAbv}
            </TextAmount>
            <TextWrapper>
                {type}
            </TextWrapper>
        </AmountWrapper>
        
    </Wrapper>
    </>
}
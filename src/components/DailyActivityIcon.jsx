import styled from "styled-components"

const Wrapper = styled.div`
background-color: #FBFBFB;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
width: 250px;
height: 130px;
display: flex;
justify-content: center;
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


export const DailyActivityIcon = ({icon, metricAbv, type, amount}) =>{
    
    return <>
    <Wrapper>
        <IconWrapper>
    {icon}
    </IconWrapper>
    {amount}
    {metricAbv}
    {type}
    </Wrapper>
    </>
}
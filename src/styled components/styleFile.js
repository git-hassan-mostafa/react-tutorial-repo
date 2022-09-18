import styled,{keyframes} from "styled-components";

// function in styles
export const StyledButton = styled.button`
padding:10px;
background-color:${(props) => props.variant === 'outline' ? 'transparent' : 'red'};
color:${(props) => props.variant === 'outline' ? 'red' : 'white'};
border:1px solid red;
font-weight: 900;
/* pseudo classes */
/* &:hover{
    background-color:${(props) => props.variant !== 'outline' ? 'transparent' : 'red'};
    color:${(props) => props.variant !== 'outline' ? 'red' : 'white'};
} */
`
// extending style
export const GreenButton = styled(StyledButton)`
background-color:green;
color:white;
border:none;
`

export const AttributeButton=styled(StyledButton).attrs({
    type:'submit'
})`
background-color:yellow;
border:none;
color:black;
`
const animationImage=keyframes`
from{
    transform:rotate(0deg)
}
to{
    transform:rotate(356deg)
}
`
export const AnimatedImage=styled.img`
width:100px;
animation:${animationImage} infinite 2s linear;
`
export const ThemeButton=styled(AttributeButton)`
color: ${props=>props.theme.color};
background-color:${props=>props.theme.background};
border: 1px solid ${props=>props.theme.color}
`

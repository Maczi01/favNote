import styled from "styled-components";
import logo from 'assets/icons/logo.svg'
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import bulbIcon from 'assets/icons/bulb.svg'
import logoutIcon from 'assets/icons/logout.svg'
import penIcon from 'assets/icons/pen.svg'
import plusIcon from 'assets/icons/plus.svg'
import twitterIcon from 'assets/icons/twitter.svg'

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 0;
  width: 100px;
  height: 100vh;
  background-color: ${({activeColor, theme}) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
`

const StyledLogoLink = styled(NavLink)`
display: block;
width: 67px;
height: 67px;
background-image: url(${logoutIcon});
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: 80%;
border: none;
margin-bottom: 10vh;
`



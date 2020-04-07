import React from "react";
import styled, {css} from "styled-components";
import bulbIcon from 'assets/icons/bulb.svg'

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')}
;
`;

export default ButtonIcon;
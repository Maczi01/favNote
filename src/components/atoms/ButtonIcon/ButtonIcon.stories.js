import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import bulbIcon from 'assets/icons/bulb.svg'
import logoutIcon from 'assets/icons/logout.svg'
import penIcon from 'assets/icons/pen.svg'
import plusIcon from 'assets/icons/plus.svg'
import twitterIcon from 'assets/icons/twitter.svg'

const YellowBackground = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
background: ${({theme}) => theme.note};
`

storiesOf('ButtonIcon', module).addDecorator(story => (
    <YellowBackground>
        {story()}
    </YellowBackground>
))
    .add('bulb', () => <ButtonIcon icon={bulbIcon}/>)
    .add('bulb1', () => <ButtonIcon active icon={bulbIcon}/>)

    .add('logout', () => <ButtonIcon icon={logoutIcon}/>)
    .add('logout1', () => <ButtonIcon active icon={logoutIcon}/>)

    .add('pen', () => <ButtonIcon icon={penIcon}/>)
    .add('pen1', () => <ButtonIcon active icon={penIcon}/>)

    .add('plus', () => <ButtonIcon icon={plusIcon}/>)
    .add('plus1', () => <ButtonIcon active icon={plusIcon}/>)

    .add('twitter', () => <ButtonIcon active icon={twitterIcon}/>)
    .add('twitter1', () => <ButtonIcon icon={twitterIcon}/>)



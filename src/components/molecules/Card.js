import React from "react";
import styled, {css} from "styled-components";
import PropTypes from 'prop-types'
import Paragraph from "../atoms/Paragraph/Paragraph";
import Heading from "../atoms/Heading/Heading";
import Button from "../atoms/Button/Button";
import GlobalStyle from "../../theme/GlobalStyle";
import LinkIcon from 'assets/icons/link.svg';

const StyledWrappder = styled.div`
min-height: 380px;
box-shadow: 0 10px 30px - 10px hsla(0, 0%,  0%, 0.1);
border-radius: 10px;
overflow: hidden;
position: relative;
display: grid;
grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div`
margin: 0;
position: relative;
padding: 17px 30px;
background-color: ${({activeColor, theme}) => (activeColor ? theme[activeColor] : 'white')};
:first-of-type{
z-index: 99;
}

${({flex}) => flex && css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`}
`

const DateInfo = styled(Paragraph)`
margin: 0;
font-weight: ${({theme}) => theme.bold};
font-size: ${({theme}) => theme.fontSize.xs}
`

const StyledHeading = styled(Heading)`
margin: 5px 0 0;
`

const StyledAvatar = styled.img`
width: 86px;
height: 86px;
 border: 5px solid ${({theme}) => theme.twitter};
border-radius: 50px;
position: absolute;
right: 25px;
top:25px;
`;

const StyledLink = styled.a`
display:block;
width: 47px;
height: 47px;
border-radius: 50px;
background: white url(${LinkIcon}) no-repeat;
background-size: 60%;
background-position: 50%;
position: absolute;
right: 25px;
top:25px;
//transform: translateY(-50%);
`

const Card = ({cardType}) => (
    <StyledWrappder>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>{title}</StyledHeading>
            <DateInfo>{created}</DateInfo>
            {cardType === 'twitter' && <StyledAvatar
                src={twitterName}/>}
            {cardType === 'article' && <StyledLink href={atricleUrl}/>}
        </InnerWrapper>
        <InnerWrapper>
            <Paragraph>
                {content}
            </Paragraph>
            <Button secondary>remove</Button>
        </InnerWrapper>
    </StyledWrappder>
);

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'note']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    atricleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

Card.defaultProps = {
    cardType: 'note',
    twitterName: null,
    atricleUrl: null,
};

export default Card;
import React from 'react';
import Button from "components/atoms/Button/Button";
import GlobalStyle from 'theme/GlobalStyle'
import {ThemeProvider} from "styled-components";
import {theme} from 'theme/mainTheme';
import ButtonIcon from "../../components/atoms/ButtonIcon/ButtonIcon";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import Input from "../../components/atoms/Input/Input";



const Root = () => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <>
                <h1>Cześć</h1>
                <Button>Close / Save</Button>
                <Button secondary>remove</Button>
                <Input/>

                <Paragraph>Hello Mati</Paragraph>
            </>
        </ThemeProvider>
    </>
)
export default Root;

import React from 'react';
import Button from "components/atoms/Button/Button";
import GlobalStyle from 'theme/GlobalStyle'
import {ThemeProvider} from "styled-components";
import {theme} from 'theme/mainTheme';
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Input from "../components/atoms/Input/Input";
import MainTemplate from "../templates/MainTemplate";
import Notes from "./Notes";
import Twitters from "./Twitters";
import Articles from "./Articles";

const Root = () => (
    <BrowserRouter>
        <MainTemplate>
            <Switch>
                <Route exact path="/" component={Notes}/>
                <Route path="/twitters" component={Twitters}/>
                <Route path="/articles" component={Articles}/>
            </Switch>
        </MainTemplate>
    </BrowserRouter>
)
export default Root;
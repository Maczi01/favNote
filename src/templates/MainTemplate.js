import React from 'react';
import PropTypes from 'prop-types'
import GlobalStyle from 'theme/GlobalStyle'
import {ThemeProvider} from "styled-components";
import {theme} from 'theme/mainTheme';
import Sidebar from "../components/organisms/SideBar/SideBar";

const MainTemplate = ({children}) => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Sidebar/>
            {children}
        </ThemeProvider>
    </>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}
export default MainTemplate;

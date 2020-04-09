import React, {Component} from 'react';
import PropTypes from 'prop-types'
import GlobalStyle from 'theme/GlobalStyle'
import {ThemeProvider} from "styled-components";
import {theme} from 'theme/mainTheme';
import Sidebar from "../components/organisms/SideBar/SideBar";
import {withRouter} from 'react-router'

class MainTemplate extends Component {

    state = {
        pageType: 'notes',
    }

    componentDidMount() {
        this.setCurrentPage()
    }

    componentDidUpdate(prevProps, prevState) {
        this.setCurrentPage()
    }

    setCurrentPage = (prevState = '') => {
        const pageTypes = ['twitters', 'articles', 'notes'];
        const {
            location: {pathname},
        } = this.props
        const currentPage = pageTypes.filter(page => pathname.includes(page))
        console.log(currentPage)
        if (prevState.pageType !== '') {
            this.setState({pageType: currentPage})
        }
    }

    render() {
        const {children} = this.props
        return (
            <>
                <GlobalStyle/>
                <ThemeProvider theme={theme}>
                    <Sidebar/>
                    {children}
                </ThemeProvider>
            </>
        )
    }
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}
export default withRouter(MainTemplate);

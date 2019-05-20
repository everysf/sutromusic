import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import anime from 'animejs';
import Navigator from './Navigation.jsx'
import Blog from './Blog.jsx'
import Charts from './Charts.jsx'


const Wrapper = styled.div`

    font-family: 'Rasa', serif;
    position: relative;

`

const Body = styled.div`

    display: flex;
    margin-right: 300px;

`

class Home extends Component {

    state = {

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Wrapper className="wrapper">
              <Navigator></Navigator>
              <Body>
              <Blog></Blog>
              </Body>
              <Charts className="floatRight"></Charts>
            </Wrapper>
        );
    }

}

export default Home;

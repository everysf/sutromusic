import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs'
import Typing from 'react-typing-animation';

const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 400;
    width: 100%;
    color: white;

    .logo {
        display: flex;
        margin: 20px 20px;
        align-items: center;
        font-size: 50px;
    }

    .links {
        display: flex;
        align-items: center;
        a {
            margin: 0 20px;
            text-decoration: none;
            color: black;
            
        }
    }

`

class Navigator extends Component {

    state = {

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Wrapper className="wrapper">
                {/* <Typist cursor={hideWhenDone: false}>Sutro Music</Typist> */}
                <div className="logo">
                    <Typing speed={100}>Handpicked Independent Music</Typing>
                </div>
                <div className="links">
                    {/* <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a> */}
                </div>
            </Wrapper>
        );
    }

}

export default Navigator;

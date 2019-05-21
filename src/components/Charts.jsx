import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs'
import Typing from 'react-typing-animation';
import Prismic from "prismic-javascript";


const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 300px;
    position: fixed;
    right: 0;
    top: 0;
    background-color: white;
    border-left: 1px solid rgba(0,0,0,.3);
    min-height: 100vh;

    h1 {
        margin: 0;
        font-size: 20px;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,.3);
        padding: 13px 10px 10px 10px;
        font-style: italic;
        text-transform: uppercase;
    }

    .songTile:hover {
        margin: 50px;
    }

`

const Genres = styled.div`

    display: flex;

    .tab {
        padding: 10px 20px 8px;
        width: 100px;
        text-align: center;
    }

    .tab:hover {
        background-color: yellow;
    }

`

const SongContainer = styled.div`

    overflowY: scroll;

`
const SongTile = styled.div`

    padding: 10px 20px;
    display: flex;
    opacity: 1;
    background-color: pink;

    margin: 5px 0;

    .albumCover {
        height: 60px;
        width: 60px;
        background-color: lightgray;
        margin: 1px 0;
    }

    .songInfo{
        margin-left: 20px;
        opacity: 1;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    p {
        font-style: italic;
    }
`

class Charts extends Component {

    state = {
        charts: [
            {data: [
                {
                    song: [
                        {text: "test"}
                    ]
                }
            ]
            }
        ]
    }

    componentDidUpdate() {

    }


    componentDidMount() {

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750,

        })

        tl.add({
            targets: '.container .songTile',
            opacity: 1,
            margin: 0,
            delay: anime.stagger(50),
        }, 1000).add({
            targets: '.container .songInfo',
            opacity: 1,
            delay: anime.stagger(150),
        }, 2000).add({
            targets: '.container .songTile',
            background: '#ffffff',
            delay: anime.stagger(150),
        }, 2000)

    }


    render() {
        return (
            <Wrapper className="wrapper">
                <h1>The Latest</h1>
                <h1></h1>
                <Genres>
                    <div className="tab">Indie</div>
                    <div className="tab">Electronic</div>
                    <div className="tab">Hip-Hop</div>
                </Genres>
                <SongContainer className="container">

                </SongContainer>
            </Wrapper>
        );
    }

}

export default Charts;

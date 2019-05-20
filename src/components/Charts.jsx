import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs'
import Typing from 'react-typing-animation';


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

    // background-color: lightblue;
    padding: 10px 20px;
    display: flex;
    opacity: 0;

    margin: 5px 0;

    .albumCover {
        height: 60px;
        width: 60px;
        background-color: lightgray;
        margin: 1px 0;
    }

    .songInfo{
        margin-left: 20px;
        opacity: 0;
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
        articles: []
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

    componentDidUpdate() {

    }

    songs = [
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
        {
            name: "Get Down",
            artist: "Parklets",
            date: "May 14, 2019"
        },
    ]

    render() {
        return (
            <Wrapper className="wrapper">
                <h1>The Latest</h1>
                <Genres>
                    <div className="tab">Indie</div>
                    <div className="tab">Electronic</div>
                    <div className="tab">Hip-Hop</div>
                </Genres>
                <SongContainer className="container">
                {this.songs && this.songs.map((songs, i) => (
                    <SongTile className="songTile">
                        <div className="albumCover">
                        </div>
                        <div className="songInfo">
                            <h3><Typing startDelay={1500} hideCursor={true}>{songs.name}</Typing></h3>
                            <h4><Typing startDelay={1700} hideCursor={true}>{songs.artist}</Typing></h4>
                            <p><Typing startDelay={2000} hideCursor={true}>{songs.date}</Typing></p>
                        </div>

                    </SongTile>
                    ))}
                </SongContainer>
            </Wrapper>
        );
    }

}

export default Charts;

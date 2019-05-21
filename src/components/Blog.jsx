import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs'
import Typist from 'react-typist';
import Prismic from "prismic-javascript";

const Wrapper = styled.div`

    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    overflow: scroll-y;

    .playfair {
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }
    .theLatest {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        width: 100%;
        font-size: 40px;
        font-style: italic;
        margin-top: 40px;
    }

`

const AlbumReviewContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding-top: 20px;

    .reviewsHeader{
        max-width: 900px;
        width: 100%;
        border-bottom: 4px solid yellow;
        margin: 0 auto 20px;
        text-align: center;
        padding-bottom: 10px;
        font-size: 40px;
        font-style: italic;
    }

`

const AlbumReview = styled.div`

    display: flex;
    margin: 0 auto;
    max-width: 900px;
    h1, h2, h3, h4, p {
        margin: 0;
    }
    .albumInfo {
        margin: 20px 0;
        max-width: 680px;
    }
    .albumCover {
        height: 200px;
        width: 200px;
        background: ${props => (props.cover ? "url(" + props.cover
        + ")" : "lightgray")};
        background-size: cover;
        margin: 20px 20px 20px 0;
    }
    h3 {
        font-size: 40px;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    .line1 {
        display: flex;
        align-items: baseline;
        h4 {
            margin-left: 10px;
            font-size: 20px;
        }
    }

    .line2 {
        display: flex;
        justify-content: space-between;
        text-align: right;
    }

`

const Criterion = styled.div`

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.3);
    z-index: 200;
    background-color: white;

    h1{
        font-size: 16px;
        font-weight: normal;
        padding-left: 20px;
    }

    .tab {
        padding: 10px;
        padding: 10px 20px 8px;
    }

    .categories {
        display: flex;
    }

    .tab:hover {
        background-color: yellow;
        cursor: pointer;
    }

`

const AlbumContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 25vw;
    background-color: rgba(0,0,0,.05);

    .albumHitArea:hover + .albumCover{
        opacity: .5;
    }

    .albumHitArea:hover ~ .albumTitle {
        opacity: 1;
    }

    z

`

const AlbumHitArea = styled.div`

    position: absolute;
    height: 12.5vw;
    width: 12.5vw;
    z-index: 100;

`

const AlbumCover = styled.div`

    position: absolute;
    height: 12.5vw;
    width: 12.5vw;
    background: ${props => (props.cover ? "url(" + props.cover
        + ")" : "lightgray")};
    background-size: cover;

`

const Tab = styled.div`

    background: ${props => (props.currentGenre == props.tabID ? "yellow" : "white !important")};
    background: ${props => (props.currentGenre == "all" ? "yellow !important" : "white")};

`

const AlbumTile = styled.div`

    height: 12.5vw;
    width: 12.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0;

    h2 {
        font-weight: normal;
        opacity: 0;
        z-index: 20;
        position: absolute;
        margin: 0;
    }

    .albumCover{
        z-index: 1;
    }


`

const Logo = styled.div`

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px;
    background-color: yellow;
    font-family: 'Playfair';
    font-style: italic;
    font-weight: bold;
    z-index: 100;

`

class Charts extends Component {

    state = {
        articles: [],
        genre: "all",
        indieArticles: [],
    }

    createGenres = () => {

        let tempArr = this.state.articles;
        let indieArticles = []
        let electronicArticles = []
        let hipHopArticles = []

        for (var i = 0; i < this.state.articles.length; i++) {

            if (tempArr[i] == "indie") {
                indieArticles.push(this.state.articles)
            }

        }

    }

    loadArticles = (callback) => {
        const apiEndpoint = "https://sutromusic.cdn.prismic.io/api/v2";

        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at("document.type", "article")
            ).then(response => {
                var tempArr = response.results;
                tempArr.sort((a, b) => (a.bandname > b.bandname) ? 1 : -1)
                if (response) {
                    this.setState({ articles: tempArr });
                }
            });
        });

        callback()

    };

    componentDidUpdate() {
        console.log(this.state.articles)
        console.log(this.state.indieArticles)

        var tl = anime.timeline({

        })

        tl.add({
            targets: '.albumContainer .albumTile',
            opacity: 1,
            margin: 0,
            delay: anime.stagger(200, { grid: [8, 2], from: 'center' }),
            easing: 'steps(15)',
        }, 0).add({
            targets: '.reviewsCont .reviewItem',
            opacity: 1,
            deeay: anime.stagger(200, { grid: [8, 2], from: 'center' }),
            easing: 'steps(15)',
        })
    }

    componentDidMount() {
        this.loadArticles(this.createGenres)
    }

    openSpotify = (url) => {
        window.open(url);
    }

    changeGenre(arg) {
        this.setState({ genre: arg })
    }

    render() {
        return (
            <Wrapper className="wrapper">
                {/* <Logo>Sutro Music Company</Logo> */}
                {/* <Hero></Hero> */}
                <Criterion genre={this.state.genre}>
                    <div className="sutroHeader">
                        <h1 className="playfair">Independent Music</h1>
                    </div>
                    <div className="categories">
                        <Tab className="tab" currentGenre={this.state.genre} tabID="all" onClick={() => this.changeGenre("all")}>{this.state.genre}</Tab>
                        <Tab className="tab" currentGenre={this.state.genre} tabID="indie" onClick={() => this.changeGenre("indie")}>indie</Tab>
                        <Tab className="tab" currentGenre={this.state.genre} tabID="electronic" onClick={() => this.changeGenre("electronic")}>electronic</Tab>
                        <Tab className="tab" currentGenre={this.state.genre} tabID="hiphop" onClick={() => this.changeGenre("hiphop")}>hiphop</Tab>
                    </div>
                </Criterion>
                <h1 className="theLatest playfair">The Latest</h1>
                <AlbumContainer className="albumContainer">
                    {this.state.articles && this.state.articles.map((albumReview, i) => (
                        <AlbumTile className="albumTile"
                            onClick={() => this.openSpotify(albumReview.data.spotify[0].text)}
                        >
                            <AlbumHitArea className="albumHitArea">
                            </AlbumHitArea>
                            <AlbumCover className='albumCover' cover={albumReview.data.albumcover[0].text} ></AlbumCover>
                            <h2 className="albumTitle">{albumReview.data.songname[0].text}</h2>

                        </AlbumTile>
                    )
                    )}
                </AlbumContainer>
                <AlbumReviewContainer className="reviewsCont">
                    <h1 className="reviewsHeader playfair">Reviews</h1>

                    {this.state.articles && this.state.articles.slice(0,5).map((albumReview, i) => (
                        <AlbumReview className="reviewItem" cover={albumReview.data.albumcover[0].text}>
                            <div className="albumCover" >
                            </div>
                            <div className="albumInfo">
                                <div className="line2">
                                    <div className="line1">
                                        <h3>{albumReview.data.songname[0].text}</h3>
                                        <h4>by {albumReview.data.bandname[0].text}</h4>
                                    </div>
                                    <div>
                                        <p>{albumReview.data.date[0].text}</p>
                                        <p className="reviews" rating={albumReview.data.rating[0].text}>{albumReview.data.rating[0].text}</p>
                                    </div>
                                </div>
                                <p>{albumReview.data.review[0].text}</p>
                            </div>

                        </AlbumReview>
                    ))}
                </AlbumReviewContainer>
            </Wrapper>
        );
    }

}

export default Charts;

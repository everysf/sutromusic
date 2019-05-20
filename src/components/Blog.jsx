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

`

const Hero = styled.div`

    height: 500px;
    background: url(img/thedip.jpg);
    background-size: cover;
    background-position: center;

`

const AlbumReviewContainer = styled.div`

    display: flex;
    flex-direction: column;
`

const AlbumReview = styled.div`

    background-color: pink;
    display: flex;
    h1, h2, h3, h4, p {
        margin: 0;
    }
    .albumInfo {
        margin: 20px 20px 20px 0;
        max-width: 500px;
    }
    .albumCover {
        height: 200px;
        width: 200px;
        background-color: lightgray;
        margin: 20px;
    }
    h3 {
        font-size: 40px;
    }

`

const Criterion = styled.div`

    height: 100px;


`

class Charts extends Component {

    state = {
        articles: []
    }

    loadArticles = () => {
        const apiEndpoint = "https://sutromusic.cdn.prismic.io/api/v2";

        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at("document.type", "article")
            ).then(response => {
                if (response) {
                    this.setState({ articles: response.results });

                }
            });
        });

    };
    
    componentDidMount() {
        this.loadArticles()
    }

    componentDidUpdate() {
        console.log(this.state.articles)

    }

    albumReview = [
        {
            name: "test"
        },
        {
            name: "test"
        },
        {
            name: "test"
        },
        {
            name: "test"
        },
        {
            name: "test"
        },        {
            name: "test"
        }
    ]

    render() {
        return (
            <Wrapper className="wrapper">
            <Hero></Hero>
            <AlbumReviewContainer>
            <Criterion>

            </Criterion>
            {this.state.articles && this.state.articles.map((albumReview, i) => (
                    <AlbumReview>
                        <div className="albumCover">
                        </div>
                        <div className="albumInfo">
                        {console.log(albumReview.data.date[0].text)}
                            {/* {albumReview.data.name[0]} */}
                            <h3>{albumReview.data.songname[0].text}</h3>
                            <h4>{albumReview.data.bandname[0].text}</h4>
                            <p>{albumReview.data.date[0].text}</p>
                            <p>{albumReview.data.rating[0].text}</p>
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

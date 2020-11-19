import * as React from 'react'
import { withRouter } from "react-router";
import styled from 'styled-components';
import MyImageGallery from 'react-image-gallery';
import ReactMarkdown from 'react-markdown'
import { Images, Texts, Icons } from '../../Resources';
import { Helmet } from 'react-helmet'
import "react-image-gallery/styles/css/image-gallery.css";


const Wrapper = styled.div`


#exit{
    position : absolute;
    right : 2vw;
    top : 2em;
    font-size : 1.5rem;
}


#content{
    display : flex;
    margin-top : 30px;

    > * {
        margin : 2vh;
    }

    > :nth-child(1) {
        width : 77%
    }

    > :nth-child(2) {
        width : 33%
    }

    .workImage img{
        height : 68vh
    }
    .fullscreen .workImage img{
        height : initial
    }
    
    a{
        color : blue;
        text-decoration : underline;
    }
}

@media (orientation: portrait) {
    
    #content{
        display : block;
        margin-top : 30px;
        margin-bottom : 5%;

        > * {
            margin : 2vh;
        }

        > :nth-child(1) {
            width : initial
        }

        > :nth-child(2) {
            width : initial
        }

        .workImage img{
            width : initial
            height : initial
        }
    }
  }
`;

class WorkDisplay extends React.Component {
    workId: String
    text: String
    images: any[]

    constructor(props) {
        super(props);

        this.workId = props.match.params.workId


        this.images = Object.keys(Images.main[this.workId]).map((imageIndex) => {
            return {
                fullscreen: `${Images.full[this.workId][imageIndex]}`,
                original: `${Images.main[this.workId][imageIndex]}`,
                thumbnail: `${Images.thumbnail[this.workId][imageIndex]}`,
                originalClass: 'workImage'
            }
        });

        this.text = Texts.GetText(Texts.AvailableFiles[this.workId]);
    }


    render() {
        return (
            <>
                <Helmet>
                    <title>
                        {this.workId}
                    </title>
                </Helmet>
                <Wrapper>
                    <a id='exit' href="/" ><Icons i={'icon-cross'} /></a>
                    <div id='content'>
                        <div>
                            <MyImageGallery
                                lazyLoad={true}
                                showPlayButton={false}
                                items={this.images} />
                        </div>
                        <div>
                            <ReactMarkdown linkTarget="_blank" source={this.text} />
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
}

export default withRouter(WorkDisplay)
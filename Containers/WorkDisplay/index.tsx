import * as React from 'react'
import { withRouter } from "react-router";
import styled from 'styled-components';
import MyImageGallery from 'react-image-gallery';
import ReactMarkdown from 'react-markdown'
import { Images, Texts } from '../../Resources';
import "react-image-gallery/styles/css/image-gallery.css";


const Wrapper = styled.div`
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
}
`;

class WorkDisplay extends React.Component {
    workId : String
    text : String
    images : any[]

    constructor(props) {
        super(props);

        this.workId = props.match.params.workId

        
        this.images = Object.keys(Images.main[this.workId]).map((imageIndex) => {
            return {
                fullscreen:`${Images.full[this.workId][imageIndex]}`,
                original: `${Images.main[this.workId][imageIndex]}`,
                thumbnail: `${Images.thumbnail[this.workId][imageIndex]}`,
                originalClass : 'workImage'
            }
        });

        this.text = Texts.GetText(Texts.AvailableFiles[this.workId]);
    }


    render() {
        return (
            <Wrapper>
                <div id = 'content'>
                    <div>
                        <MyImageGallery 
                            lazyLoad={true}
                            showPlayButton = {false}
                            items={this.images}/>
                    </div>
                    <div>
                        <ReactMarkdown source={this.text} />
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default withRouter(WorkDisplay)
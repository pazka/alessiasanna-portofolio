

import * as React from 'react'
import { withRouter } from "react-router";
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Images} from '../../Resources';
 
const Wrapper = styled.div`s
`;

class WorkDisplay extends React.Component {
    workId
    images

    constructor(props) {
        super(props);

        this.workId = props.match.params.workId

        console.log(Images.thumbnail)
        this.images = Object.keys(Images.main[this.workId]).map((imageIndex)=> {console.log(imageIndex); return {
                   original: `${Images.main[this.workId][imageIndex]}`,
                   thumbnail: `${Images.thumbnail[this.workId][imageIndex]}`
        }}
        );
    }


    render() {
        return (
            <Wrapper>
            <p>{this.workId}</p> 
            <ImageGallery items={this.images} />
             
            </Wrapper>
        );
    }
}

export default withRouter(WorkDisplay)
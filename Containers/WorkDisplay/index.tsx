import * as React from 'react'
import {withRouter} from "react-router";
import styled from 'styled-components';
import MyImageGallery from '../../Components/MyImageGallery';
import ReactMarkdown from 'react-markdown'
import {Images, Texts} from '../../Resources';
import {Helmet} from 'react-helmet'
import {Close, Next, Prev} from '../../Resources/Icons';


const Wrapper = styled.div`

#navigation{

    position : absolute;
    right : 2vw;
    top : 2em;
    
    display : flex;
}

#navigation > *{
    
    font-size : 1rem;
    
    transition : all 0.5s;
    
    margin-left : 1em;
}

#navigation > *:hover{    
    color : blue;
    transition : all 0.5s;
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
        height : 65vh
    }
    .fullscreen .workImage img{
        height : initial
    }
    
    a{
        color : blue;
        text-decoration : underline;
    }
    
    .image-gallery-icon{
        filter : none;
        color : #CCCCCC;
    }
    .image-gallery-icon:hover{
        color : #767676
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
    
    
        #navigation{
            
              display: flex;
              flex-direction: column-reverse;
              align-items : flex-end;
            
            > *{
                font-size : 0.8em;
            }
        }
  }
  
  .image-gallery-thumbnail{
       :hover,:focus{
          border-color : blue;
      }
      :hover {
        cursor : pointer;
      }
  }
  
  .active{
    border-color : blue;
  }
`;

class WorkDisplay extends React.Component {
    workId: String
    text: String
    images: any[]
    nextWork: string
    prevWork: string

    componentDidUpdate() {
        window.location.reload()
    }

    constructor(props) {
        super(props);

        this.workId = props.match.params.workId

        let avWorks = Object.keys(Images.full)

        let prevWorkId = avWorks.indexOf(this.workId) - 1 < 0 ? avWorks.length - 1 : avWorks.indexOf(this.workId) - 1
        let nextWorkId = avWorks.indexOf(this.workId) + 1 >= avWorks.length ? 0 : avWorks.indexOf(this.workId) + 1

        this.prevWork = avWorks[prevWorkId]
        this.nextWork = avWorks[nextWorkId]


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
                    <span id="navigation">
                        <a id='next' href={"#" + this.prevWork}>
                            <Prev/>
                            {this.prevWork.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                        </a>
                        
                        <a id='prev' href={"#" + this.nextWork}>
                            <Next/>
                            {this.nextWork.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                        </a>
                        
                        <a id='exit' href="#"><Close/></a>
                    </span>
                    <div id='content'>
                        <div>
                            <MyImageGallery
                                lazyLoad={true}
                                showPlayButton={false}
                                items={this.images}/>
                        </div>
                        <div>
                            <ReactMarkdown linkTarget="_blank" source={this.text}/>
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
}

export default withRouter(WorkDisplay)
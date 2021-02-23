

import React, { Component } from 'react';
import icons from '../../src/icons/**/*.svg'
import styled from 'styled-components';

const WrapperImg = styled.img`
       width : 1em;
       height : 1em;
      -webkit-mask: url(${props => props.i}) no-repeat center;
      mask: url(${props => props.i}) no-repeat center;
        background-color: black;
`

class Icons extends Component{
    allIcons = {}

    constructor(props){
        super(props)
        if(icons.length == 0){
            console.error("No icons loaded")
        }
        //getting all images in their respective folders

        Object.keys(icons).forEach(key => {
            this.allIcons[key] = icons[key]
        });
        
    }
    
    render() {
        return (<WrapperImg  className = 'icon' i={this.allIcons[this.props.i]} style={...this.props.style}/>)
    }
}

export default Icons
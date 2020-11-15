import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {Icons} from '../../Resources'

interface ICity {
    name: string
    coords: number[]
}


const Wrapper = styled.div`
position : absolute;
left : ${props => props.x};
top : ${props => props.y};
`;

class WorkCity extends React.Component {
    city : ICity
    
    propTypes : {
        city : PropTypes.RequiredKeys<ICity>
        key : PropTypes.IsOptional<String>
    }

    constructor(props ) {
        super(props);

        this.city = props.city
    }
    
    render() {
        return (
            <Wrapper x={this.city.coords[0]} y={this.city.coords[1]}>
                <a href={'/' + this.city.name}> 
                <Icons style={{ fontSize : "2em"}} i='icon-location2'/> {this.city.name} </a>
                <span> {this.city.coords.map(c=>Math.round(c)).join(';')} </span>
            </Wrapper>
        )
    }
}

export { WorkCity, ICity }


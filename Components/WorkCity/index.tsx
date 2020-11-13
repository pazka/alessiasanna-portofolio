import * as React from 'react'
import styled from 'styled-components';
import {GeoIcon} from '../Icons'

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

    constructor(props : { key : string,city : ICity}) {
        super(props);

        this.city = props.city
        
    }
    
    render() {
        return (
            <Wrapper x={this.city.coords[0]} y={this.city.coords[1]}>
                <a href={'/' + this.city.name}> 
                <GeoIcon/> {this.city.name} </a>
                <span> {this.city.coords.join(';')} </span>
            </Wrapper>
        )
    }
}

export { WorkCity, ICity }


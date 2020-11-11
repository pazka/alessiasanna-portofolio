import * as React from 'react'
import styled from 'styled-components';

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

                <span> {this.city.name} </span>
                <span> {this.city.coords.join(';')} </span>
            </Wrapper>
        )
    }
}

export { WorkCity, ICity }


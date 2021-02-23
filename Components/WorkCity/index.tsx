import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {Icons} from '../../Resources'

interface ICity {
    name: string,
    prettyName : string,
    ongoing : boolean,
    coords: number[]
}


const Wrapper = styled.div`
position : absolute;
left : ${props => props.x};
top : ${props => props.y};

font-size : large;

.icon{
    font-size : 1.5em;
    background-color: #FFBD35;    
}

span{
    position : relative;
    left : 2em ;
    top : -0.2em;
    font-size : 0.7em;
    color : gray
}

@media screen and (max-device-width: 600px)  {
    font-size : 0.8rem    
}

a * {
    transition : all 0.5s;
}


a:hover {
    color : black;
    transform : scale(1.2,1.2);
    transition : all 0.2s;    
    
    .icon{
    background-color: black;
        font-size : 1.65em;  
    }

}

`;

class WorkCity extends React.Component {
    city : ICitys
    
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
            <Wrapper x={this.city.coords[0]} y={this.city.coords[1]} >
                <a href={'#/' + this.city.name}> 
                    <div><Icons i={this.city.ongoing ? 'pin_empty' : 'pin_filled'}/> {this.city.prettyName} </div>
                    <span> {this.city.coords.map(c=>Math.round(c)).join(';')} </span>
                </a>
            </Wrapper>
        )
    }
}

export { WorkCity, ICity }


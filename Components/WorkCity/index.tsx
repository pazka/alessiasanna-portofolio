import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {Icons} from '../../Resources'

interface ICity {
    name: string,
    prettyName: string,
    ongoing: boolean,
    coords: number[]
}


const Wrapper = styled.div`
position : absolute;
left : ${props => props.x};
top : ${props => props.y};

font-size : large;

.icon{
    font-size : 1.5em;
    background-color: #BF9DA8;    
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
        font-size : 1.6em ;
        height : 1.1em;  
    }
}

h1{
 font-size : 1.2em;
 font-weight : bold;
 
 font-family : FiraSans;
}
h2{
 font-size : 1.1em;
 font-weight : bold;
 
 font-family : Calibri;
}
h3{
 font-size : 1em;
 font-weight : normal;
 
 font-family : OpenSansCondensed;
}
h4{
 font-size : 0.9em;
 font-weight : normal;
}
h5{
 font-size : 0.8em;
 font-weight : normal;
 
 font-family : Times New Roman;
}

@media screen and (max-device-width: 600px)  {
h1{
 font-size : 1.2em;
}
h2{
 font-size : 1.1em;
}
h3{
 font-size : 1em;
}
h4{
 font-size : 0.9em;
}
h5{
 font-size : 0.8em;
}

}


`;

class WorkCity extends React.Component {
    city: ICitys

    propTypes: {
        city: PropTypes.RequiredKeys<ICity>
        key: PropTypes.IsOptional<String>
    }

    constructor(props) {
        super(props);

        this.city = props.city
    }

    render() {
        const Rank = `${this.city.rank}`
        console.log(Rank)

        return (
            <Wrapper x={this.city.coords[0]} y={this.city.coords[1]}>
                <a href={'#/' + this.city.name}>
                    <Rank><Icons i={this.city.ongoing ? 'pin_empty' : 'pin_filled'}/> {this.city.prettyName} </Rank>
                    <span> {this.city.coords.map(c => Math.round(c)).join(';')} </span>
                </a>
            </Wrapper>
        )
    }
}

export {WorkCity, ICity}


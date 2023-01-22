import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {PinCircleEmpty, PinCircleFilled, PinFilled} from '../../Resources/Icons';

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


.coords{
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

.icon{
    font-size : 0.8em;
}

a:hover {
    color :  #F3A78F;
    transition : all 0.2s;  
    h1,h2,h3,h4,h5{
        font-size : 1.2em ;
    }
    
    .icon{
        transition : all 0.2s;  
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
                    <Rank>
                        <span>
                            {
                                this.city.ongoing ? <PinCircleEmpty/> : <PinCircleFilled/>
                            }
                            {this.city.prettyName}
                        </span>
                    </Rank>
                    <span className={"coords"}> {this.city.coords.map(c => Math.round(c)).join(';')} </span>
                </a>
            </Wrapper>
        )
    }
}

export {WorkCity, ICity}


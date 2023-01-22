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

transition : all 0.5s; 
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

a {
    transform : scale(1);
}

[class^="icon-"]{
    font-size : 0.8em;
}

.city-decoration{
    display: flex;
    align-items: baseline;
}
.city-name{
    transition : all 0.5s; 
}

&:hover{
    .city-decoration{
        display: flex;
        align-items: baseline;
    }
    
    .city-name{
        color :  blue;
        transition : all 0.7s; 
        font-size : 1.5em;
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
                        <span className={"city-decoration"}>
                            {
                                this.city.ongoing ? <PinCircleEmpty/> : <PinCircleFilled/>
                            }
                            <span className={"city-name"}>
                                {this.city.prettyName}
                            </span>
                        </span>
                    </Rank>
                    <span className={"coords"}> {this.city.coords.map(c => Math.round(c)).join(';')} </span>
                </a>
            </Wrapper>
        )
    }
}

export {WorkCity, ICity}


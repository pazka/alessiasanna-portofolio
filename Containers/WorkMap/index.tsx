import * as React from 'react'
import {WorkCity,ICity} from '../../Components/WorkCity'
import {Images} from '../../Resources'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'


const seedrandom = require('seedrandom')

const Wrapper = styled.div`
    height : 90vh;

    @media screen and (max-device-width: 600px)  {
        padding-top : 5vh;
    }
`

class WorkMap extends React.Component {
    cities : ICity[]

    constructor(props) {
        super(props);

        //prepare Math
        function clampShoot (v,min,max){return (v + (v+Math.min(0,min - v) - ((Math.max(0,v-max)*2))))}
        function clampStrict (v,min,max){return (v + (v+Math.min(0,min - v) - ((Math.max(0,v-max)*2))))}
        let rng = seedrandom('thisIsASeedForHAvingRandomFixedCityCoordinates_7');

        //set as many coords as needed and randomize them a bit
        let iterator = 0
        let  maxy = 0.9, miny = 0.08, lasty = miny,step = (maxy-miny)/Object.keys(Images.main).length
        this.cities = Object.keys(Images.main).map(cityName =>{ 
            let res = {
                name: cityName,
                prettyName: cityName.split('_').map(s=>s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                coords: [
                    ((window.innerWidth/2)*((iterator%2))) + clampShoot( rng() + (Math.random()/10  - 0.005),0.05,0.8) * (window.innerWidth/2),
                    clampStrict(step*iterator + rng()*step  + (Math.random()/10  - 0.005),miny,maxy) * (window.innerHeight)
                ]
            }
            iterator++
            return res;
        });
    }


    render() {
        return (
            <>
                <Wrapper>
                {this.cities.map(city=> 
                    <WorkCity key={city.name} city={city} />
                )}
            </Wrapper>
            </>
        )
    }
}

export  { WorkMap}
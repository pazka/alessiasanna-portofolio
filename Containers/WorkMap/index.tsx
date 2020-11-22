import * as React from 'react'
import {WorkCity,ICity} from '../../Components/WorkCity'
import {Images} from '../../Resources'
import AlgoDisplay from '../../Components/AlgoDisplay/indext.tsx'
import styled from 'styled-components'


const seedrandom = require('seedrandom')

const Wrapper = styled.div`
    height : 90vh;

    @media screen and (max-device-width: 600px)  {
        padding-top : 5vh;
    }

    z-index : 5
`

class WorkMap extends React.Component {
    cities : ICity[]

    constructor(props) {
        super(props);

        //prepare Math
        function clampShoot (v,min,max){return (v + (v+Math.min(0,min - v) - ((Math.max(0,v-max)*2))))}
        function clampStrict (v,min,max){return ((Math.min(max,(Math.max(min,v)))}
        let rng = seedrandom('thisIsASeedForHAvingRandomFixedCityCoordinates_7');

        //set as many coords as needed and randomize them a bit
        let iterator = 0
        let  maxy = 0.9, miny = 0.1, lasty = miny,step = (maxy-miny)/Object.keys(Images.main).length

        this.cities = Object.keys(Images.main).map(cityName =>{ 
            let res = {
                name: cityName,
                prettyName: cityName.split('_').map(s=>s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                coords: [
                    ((window.innerWidth/2)*((iterator%2))) + clampStrict( rng() + (Math.random()/5  - 0.02),0.0,0.8) * (window.innerWidth/2),
                    clampStrict(step*iterator + rng()*step  + (Math.random()/5  - 0.02),miny,maxy) * (window.innerHeight)
                ]
                i :iterator
            }
            iterator++
            return res;
        });
    }


    render() {
        return (
            <>
                <Wrapper>
                <AlgoDisplay cities={this.cities.map(c=>c.coords) }/>
                {this.cities.map(city=> 
                    <WorkCity key={city.i} city={city} />
                )}
                </Wrapper>
            </>
        )
    }
}

export  { WorkMap}
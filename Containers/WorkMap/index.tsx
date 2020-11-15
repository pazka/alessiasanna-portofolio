import * as React from 'react'
import {WorkCity,ICity} from '../../Components/WorkCity'
import {Images} from '../../Resources'

const seedrandom = require('seedrandom')

class WorkMap extends React.Component {
    cities : ICity[]

    constructor(props) {
        super(props);

        //prepare Math
        function clamp (v,min,max){return (v + (v+Math.min(0,min - v) - ((Math.max(0,v-max)*2))))}
        let rng = seedrandom('thisIsASeedForHAvingRandomFixedCityCoordinates_1278');

        //set as many coords as needed and randomize them a bit
        this.cities = Object.keys(Images.main).map(cityName =>{ return {
            name: cityName,
            coords: [
                clamp(rng() + (Math.random()/10  - 0.005),0.1,0.8) * (window.innerWidth),
                clamp(rng() + (Math.random()/10 - 0.005 ),0.05,0.8)* (window.innerHeight)
            ]
        }});
    }


    render() {
        return <div>
            {this.cities.map(city=> 
                <WorkCity key={city.name} city={city} />
            )}
        </div>
    }
}

export  { WorkMap}
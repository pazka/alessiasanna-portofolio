import * as React from 'react'
import {WorkCity,ICity} from '../../Components/WorkCity'

class WorkMap extends React.Component {
    cities : ICity[]

    constructor(props: {cities : ICity[] }) {
        super(props);
        function clamp (v,min,max){return Math.max(min,Math.min(max,v))}

        this.cities = props.cities.map(city =>{ return {
            name: city.name,
            coords: [
                clamp(city.coords[0] + (Math.random()/10  - 0.005),0,0.8) * (window.innerWidth), 
                clamp(city.coords[1] + (Math.random()/10 - 0.005 ),0,0.8)* (window.innerHeight)
            ]
        }});


    }

    componentDidMount = ()=>{
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
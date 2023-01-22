import * as React from 'react'
import {WorkCity, ICity} from '../../Components/WorkCity'
import {Icons, Images} from '../../Resources'
import AlgoDisplay from '../../Components/AlgoDisplay'
import styled from 'styled-components'
import CursorTooltip from "../../Components/CursorTooltip";
import {PinCircleEmpty, PinCircleFilled} from '../../Resources/Icons'

const seedrandom = require('seedrandom')

const Wrapper = styled.div`
    ${process.env._DEBUG ? 'border : solid 1px red' : ''}
    height : 78vh;

    z-index : 5;
    
    #legend{
        position : absolute;
        right : 2rem;
        top : 2rem;
        
        .icon{
            background-color: #384AD3;
        }
    }     
    
    .circle-cover{
        width : 500px;
        height: 500px;
        clip-path: circle(50% at 50% 50%);
        background-color: blue;
    } 

    @media screen and (max-device-width: 600px)  {
        padding-top : 5vh;
        height : 65vh;
        
        #legend{
            top : 4rem;
        }
        
        #legend td{
            font-size : 0.8em;
        }     
    }  
`

class WorkMap extends React.Component {
    cities: ICity[]

    constructor(props) {
        super(props);

        //prepare Math
        function clampStrict(v, min, max) {
            return ((Math.min(max, (Math.max(min, v)))
        }

        let rng = seedrandom('thisIsASeedForHAvingRandomFixedCityCoordinates_dds7');

        let marginX, marginY, boxX, boxY;

        let iX = 0, iY = 0


        //screen continuous limits
        let lX = [0.2, 0.75], lY = [0.25, 0.75]

        //discrete limits 
        let lDX = 2, lDY = 3

        //continous steps to jump = coords system
        let stepX = (lX[1] - lX[0]) / lDX
        let stepY = (lY[1] - lY[0]) / lDY


        function boundBox(start, step, iterator, fixAmpl, rdmAmpl) {
            return start                     // start
                + iterator * step              // newBox
                + ((step / fixAmpl) * rng.quick() - ((step / fixAmpl) / 2)) // fixed rdm Offset
                + ((step / rdmAmpl) * Math.random() - ((step / rdmAmpl) / 2)) // rdm Offset
        }

        this.cities = Object.keys(Images.main).map((cityName, iterator) => {
            let res = {
                name: cityName,
                prettyName: cityName.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                coords: [
                    boundBox(lX[0], stepX, iX, 1.5, 4) * (window.innerWidth),
                    boundBox(lY[0], stepY, iY, 1.1, 4) * (window.innerHeight)
                ],
                i: iterator,
                ongoing: Images.ongoingWork.includes(cityName),
                rank: ['h1', 'h2', 'h3', 'h4', 'h5'].map(r => {
                    return Images[r].includes(cityName) ? r : ''
                }).join('')
            }

            iY = iY >= lDY ? 0 : iY + 1
            iX = iY != 0 ? iX : (iX >= lDX ? 0 : iX + 1)
            return res;
        });
    }


    render() {
        return (
            <CursorTooltip>
                <Wrapper>
                    <AlgoDisplay cities={this.cities.map(c => c.coords)}/>
                    {this.cities.map(city =>
                        <WorkCity key={city.i} city={city}/>
                    )}
                    <div id={"circle-cover"}>

                    </div>
                    <span id={"legend"}>
                    <table> 
                        <tbody>  
                            <tr>
                                <td><PinCircleFilled/> </td>
                                <td><p> Projets produits</p></td>
                            </tr>
                            <tr>
                                <td><PinCircleEmpty/></td>
                                <td><p> Projets en cours</p></td>
                            </tr>
                        </tbody>
                    </table>  
                </span>
                </Wrapper>
            </CursorTooltip>
        )
    }
}

export {WorkMap}
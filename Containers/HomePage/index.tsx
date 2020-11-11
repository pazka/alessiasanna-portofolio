

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import  {WorkMap}  from '../WorkMap'
import  WorkDisplay  from '../WorkDisplay';

class HomePage extends React.Component {
    
    cityList 

    constructor(props) {
        super(props);

        this.cityList = [
            {
                name: "test1",
                coords: [0.1, 0.2]
            },
            {
                name: "test2",
                coords: [0.15, 0.5]
            },
            {
                name: "test3",
                coords: [0.3, 0.8]
            },
            {
                name: "test4",
                coords: [0.6, 0.2]
            },
            {
                name: "test5",
                coords: [0.8, 0.6]
            }
        ]
    }



    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/:workId">
                        <WorkDisplay> </WorkDisplay>
                    </Route>
                    <Route path="/">
                        <WorkMap cities={this.cityList} />
                    </Route>
                </Switch>
            </BrowserRouter>

        );
    }
}

export { HomePage }
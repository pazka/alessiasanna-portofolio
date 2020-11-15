

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { WorkMap } from '../WorkMap'
import WorkDisplay from '../WorkDisplay';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/:workId">
                        <WorkDisplay> </WorkDisplay>
                    </Route>
                    <Route path="/">
                        <WorkMap />
                    </Route>
                </Switch>
            </BrowserRouter>

        );
    }
}

export { HomePage }
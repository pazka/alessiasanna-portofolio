

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { WorkMap } from '../WorkMap'
import WorkDisplay from '../WorkDisplay';
import styled from 'styled-components'

const Wrapper = styled.div`

    height : 90vh
`
class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            <Wrapper>
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
            </Wrapper>
        );
    }
}

export { HomePage }
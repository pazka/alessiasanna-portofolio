

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, HashRouter  } from "react-router-dom";
import { WorkMap } from '../WorkMap'
import WorkDisplay from '../WorkDisplay';
import styled from 'styled-components'

const Wrapper = styled.div`
`
class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            <Wrapper>
                <HashRouter >
                    <Switch>
                        <Route path="/:workId">
                            <WorkDisplay> </WorkDisplay>
                        </Route>
                        <Route path="/">
                            <WorkMap />
                        </Route>
                    </Switch>
                </HashRouter >
            </Wrapper>
        );
    }
}

export { HomePage }


import * as React from 'react'
import { withRouter } from "react-router";

class WorkDisplay extends React.Component {
    workId

    constructor(props) {
        super(props);

        console.log(props)
        this.workId = props.match.params.workId
    }


    render() {
        return (
            <div>
            <p>{this.workId}</p>
            </div>
        );
    }
}

export default withRouter(WorkDisplay)
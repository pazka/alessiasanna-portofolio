import * as React from 'react'

interface  IWorkDisplay {
    workId : string ,
} 

const WorkItem = (props : IWorkDisplay)=>(
    <div>
        <span> {props.workId} </span>
    </div>
)

export { WorkItem  , IWorkDisplay}
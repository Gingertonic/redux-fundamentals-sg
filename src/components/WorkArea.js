import React from 'react'
import DrawingBoard from './DrawingBoard'
import Preview from './Preview'

const WorkArea = () => {
    return (
        <div id="work-area">
            <DrawingBoard />
            <Preview />   
        </div>
    )
}

export default WorkArea
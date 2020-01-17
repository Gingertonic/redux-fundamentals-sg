import React, { Component } from 'react'
import DrawingBoard from './DrawingBoard'
import Preview from './Preview'

class WorkArea extends Component {

    render() {
        return (
            <div id="work-area">
                <DrawingBoard />
                <Preview />   
            </div>
        )
    }
}

export default WorkArea
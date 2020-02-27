import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProjectAttribute } from '../actions/projectActions'

class DrawingBoard extends Component {


    handleFormChange = e => {
        console.log(e.target.id)
        this.props.updateProjectAttribute([e.target.id], e.target.value)
    }

    render() {
        const { header, date, info, textColor, backgroundColor } = this.props.project
        return (
            <div id="drawing-board">
              <h1>Drawing Board</h1> 
               <div className="project">
                    <div>
                        <input type="text" id="header" onChange={this.handleFormChange} value={header}/>
                        <input type="text" id="date" onChange={this.handleFormChange} value={date}/> 
                    </div>
                    <div>
                        <textarea rows="12" id="info" onChange={this.handleFormChange} value={info}/> 
                    </div> 
                    <div>
                        <div>Background color: <input type="color" id="backgroundColor" onChange={this.handleFormChange} value={backgroundColor}/></div>
                        <div>Text color: <input type="color" id="textColor" onChange={this.handleFormChange} value={textColor}/></div>
                    </div>
                </div> 
            </div>
        )
    }
}

const mSTP = state => {
    return {
        project: state
    }
}

export default connect(mSTP, { updateProjectAttribute })(DrawingBoard)


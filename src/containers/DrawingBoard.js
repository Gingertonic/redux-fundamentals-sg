import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTitle } from '../actions/eventActions'

class DrawingBoard extends Component {
    // state = {
    //     header: "Header",
    //     date: "Date",
    //     info: "Info",
    //     backgroundColor: "#FF7F50",
    //     textColor: "#ffffff"
    // }

    handleFormChange = e => {
        // console.log(e.target.id)
        // this.setState({ [e.target.id]: e.target.value })

    }

    handleTitleChange = e => {
        const newTitle = e.target.value
        this.props.updateTitle(newTitle)
    }

    render() {
        return (
            <div id="drawing-board">
              <h1>Drawing Board</h1> 
               <div className="project">
                    <div>
                        <input type="text" id="header" onChange={this.handleTitleChange} value={this.props.header}/>
                        <input type="text" id="date" onChange={this.handleFormChange} value={this.props.date}/> 
                    </div>
                    <div>
                        <textarea rows="12" id="info" onChange={this.handleFormChange} value={this.props.info}/> 
                    </div> 
                    <div>
                        <div>Background color: <input type="color" id="backgroundColor" onChange={this.handleFormChange} value={this.props.bgColor}/></div>
                        <div>Text color: <input type="color" id="textColor" onChange={this.handleFormChange} value={this.props.textColor}/></div>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       header: state.header,
       date: state.date,
       info: state.info,
       bgColor: state.backgroundColor,
       textColor: state.textColor 
    }
}


export default connect(mapStateToProps, { updateTitle })(DrawingBoard)
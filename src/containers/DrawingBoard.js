import React, { Component } from 'react'

class DrawingBoard extends Component {
    state = {
        header: "Header",
        date: "Date",
        info: "Info",
        backgroundColor: "#FF7F50",
        textColor: "#ffffff"
    }

    handleFormChange = e => {
        console.log(e.target.id)
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return (
            <div id="drawing-board">
              <h1>Drawing Board</h1> 
               <div className="project">
                    <div>
                        <input type="text" id="header" onChange={this.handleFormChange} value={this.state.header}/>
                        <input type="text" id="date" onChange={this.handleFormChange} value={this.state.date}/> 
                    </div>
                    <div>
                        <textarea rows="12" id="info" onChange={this.handleFormChange} value={this.state.info}/> 
                    </div> 
                    <div>
                        <div>Background color: <input type="color" id="backgroundColor" onChange={this.handleFormChange} value={this.state.backgroundColor}/></div>
                        <div>Text color: <input type="color" id="textColor" onChange={this.handleFormChange} value={this.state.textColor}/></div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default DrawingBoard
import React, { Component } from 'react'

class Preview extends Component {
    styles  = {
        backgroundColor: "#FF7F50",
        color: "#ffffff"
    }

    render() {
        return (
            <div id="preview">
                <h1>Preview</h1>
                <div className="project" style={this.styles}>
                    <div>
                        <h1>Title</h1>
                    </div>
                    <div>
                        <p>Info</p>
                    </div>
                    <div>
                        <h3>Date</h3>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default Preview
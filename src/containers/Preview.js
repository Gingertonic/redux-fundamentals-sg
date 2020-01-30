import React, { Component } from 'react'
import { connect } from 'react-redux'

class Preview extends Component {
    styles  = {
        backgroundColor: this.props.bgColor,
        color: this.props.textColor
    }

    render() {
        return (
            <div id="preview">
                <h1>Preview</h1>
                <div className="project" style={this.styles}>
                    <div>
                        <h1>{this.props.header}</h1>
                    </div>
                    <div>
                        <p>{this.props.info}</p>
                    </div>
                    <div>
                        <h3>{this.props.date}</h3>
                    </div> 
                </div> 
            </div>
        )
    }
}

const mSTP = state => {
    return {
       header: state.header,
       date: state.date,
       info: state.info,
       bgColor: state.backgroundColor,
       textColor: state.textColor 
    }
}

export default connect(mSTP)(Preview)
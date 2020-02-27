import React, { Component } from 'react'
import { connect } from 'react-redux'

class Preview extends Component {
    

    render() {

        const { header, date, info } = this.props.project

        const styles  = {
            backgroundColor: this.props.project.backgroundColor,
            color: this.props.project.textColor
        }

        return (
            <div id="preview">
                <h1>Preview</h1>
                <div className="project" style={styles}>
                    <div>
                        <h1>{header}</h1>
                    </div>
                    <div>
                        <p>{info}</p>
                    </div>
                    <div>
                        <h3>{date}</h3>
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

export default connect(mSTP)(Preview)
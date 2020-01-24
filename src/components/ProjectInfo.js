import React from 'react'
import { connect } from 'react-redux'

const ProjectInfo = props => {
    return (
        <div>
            <h2 id="project-title">{ props.title }</h2>
        </div>
    )
}

const mSTP = state => {
    return {
        title: state.project.current.header
    }
}

export default connect(mSTP)(ProjectInfo)
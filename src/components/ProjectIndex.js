import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProject, getAllProjects } from '../actions/projectActions'

class ProjectIndex extends Component {
    componentDidMount(){
        this.props.getAllProjects()
    }

    handleClick = e => {
        this.props.loadProject(e.target.id)
    }

    render() {
        const renderProjects = this.props.projects.map(p => <span key={p.id} id={p.id} onClick={this.handleClick}>{p.header}</span>)
        return (
            <div id="all-projects">
                { renderProjects }
            </div>
        )
    }
}

const mSTP = state => {
    return { projects: state.project.all }
}

export default connect(mSTP, { loadProject, getAllProjects })(ProjectIndex)
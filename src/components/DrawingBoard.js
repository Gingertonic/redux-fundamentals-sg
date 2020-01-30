import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProjectDetails, saveNewProjectToDB } from '../actions/projectActions'
import { increasePrice, decreasePrice } from '../actions/priceActions'

class DrawingBoard extends Component {

    handleFormChange = e => {
       this.props.updateProjectDetails(e)
       switch(e.target.id) {
            case "backgroundColor":
                return this.props.increasePrice(25)
            case "header":
                return this.props.decreasePrice(10)
            default:
                break
       }
    }

    handleSaveAsNew = () => {
        console.log('saving new project with following details: ', this.props.project)
        this.props.saveNewProjectToDB(this.props.project)
    }

    render() {
        const { header, date, info, backgroundColor, textColor } = this.props.project

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
                <h3>Price: ${ this.props.price }</h3>
                <button onClick={this.handleSaveAsNew}>Save as New</button>
            </div>
        )
    }
}

const mSTP = state => {
   return { 
        project: state.project.current,
        price: state.price
    }
}

export default connect(mSTP, { updateProjectDetails, saveNewProjectToDB, increasePrice, decreasePrice })(DrawingBoard)
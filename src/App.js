import React from 'react';
import './App.css';
import WorkArea from './components/WorkArea'
import ProjectInfo from './components/ProjectInfo'
import ProjectIndex from './components/ProjectIndex'

function App() {
  return (
    <div className="App">
      <ProjectIndex />
      <ProjectInfo />
      <WorkArea />
    </div>
  );
}

export default App;

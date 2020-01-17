import React from 'react';
import './App.css';
import WorkArea from './containers/WorkArea'
import ProjectInfo from './components/ProjectInfo'

function App() {
  return (
    <div className="App">
      <ProjectInfo />
      <WorkArea />
    </div>
  );
}

export default App;

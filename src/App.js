import React from 'react';
import './App.css';
import Project from './components/project'

const App = ({ title }) => {
  return (
  <div className="main">
    {title}
    <Project></Project>
  </div>
  )
}
  
export default App;
import React from 'react';
import './App.css';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div>
      <BarChart/>
      <br/>
      <PieChart/>
    </div>
  );
}

export default App;

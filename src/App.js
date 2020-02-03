import React from 'react';
import './styles/App.scss';
import Layout from './Components/Layout'
import MonthGrid from './Components/MonthGrid';

function App() {
  return (
    <div className="App">
      <Layout>
        <MonthGrid/>
      </Layout>
    </div>
  );
}

export default App;

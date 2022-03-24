import '../assets/css/App.css';
import React from 'react';
import Cuerpo from './Cuerpo'
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
      <Cuerpo />
      </div>
    </React.Fragment>
  );
}

export default App;

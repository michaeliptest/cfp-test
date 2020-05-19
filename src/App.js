import React from 'react';
import TopDetails from './components/TopDetails'
import InputForm from './components/InputForm'
import TopMenu from './components/TopMenu'

function App() {
  const style = {
    divstyle: {
      margin: "15px"
    }
  }
  return (
    <div style={style.divstyle}>
      <TopDetails />
      <TopMenu />
      <InputForm/>
    </div>
  );
}

export default App;

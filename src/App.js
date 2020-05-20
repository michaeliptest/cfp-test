import React from 'react';
import TopDetails from './components/TopDetails';
import InputForm from './components/InputForm';
import TopMenu from './components/TopMenu';
import Profiles from './components/Profiles';

function App() {
  const style = {
    divstyle: {
      margin: "15px"
    }
  }
  return (
    <div style={style.divstyle}>
      {/* <Profiles/> */}
      <TopDetails />
      <TopMenu />
      <InputForm/>
    </div>
  );
}

export default App;

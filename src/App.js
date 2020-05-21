import React from 'react';
import { Route } from 'react-router-dom'
import TopDetails from './components/TopDetails';
import InputForm from './components/InputForm';
import TopMenu from './components/TopMenu';
import Profiles from './components/Profiles';
import Test from './components/Test';

function App() {
  const style = {
    divstyle: {
      margin: "15px"
    }
  }
  return (
    <div style={style.divstyle}>
      {/* <Profiles/> */}
      {/* <TopDetails />
      <TopMenu />
      <InputForm/> */}
      {/* <Test /> */}
      <Route exact path='/profile' render={props =>
        <div>
          <TopDetails />
          <TopMenu />
          <InputForm />
          
        </div>
      } />
      <Route exact path='/' component={Profiles}/>
    </div>
  );
}

export default App;

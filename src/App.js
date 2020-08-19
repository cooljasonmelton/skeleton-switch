import React, {useState} from 'react';

// styling
import './App.css';

// components
import Switch from './switch/Switch';
import SampleComp from './comp/SampleComp';

const App = () => {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="App">
      <Switch switchOn={switchOn} setSwitchOn={setSwitchOn} />
      <SampleComp switchOn={switchOn}/>

    </div>
  );
}

export default App;

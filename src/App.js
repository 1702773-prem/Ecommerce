
import './App.css';
import React, { useState } from 'react';

import Navbar from './Component/Navbar';

export const myContext = React.createContext()

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div >

       <myContext.Provider value={{isLoggedIn,setIsLoggedIn}} >
      <Navbar data={{isLoggedIn,setIsLoggedIn}} />
      </myContext.Provider>

    </div>
  );
}

export default App;

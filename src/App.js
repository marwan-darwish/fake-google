import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
function App() {
  const [dark,setDark]=useState(false)
  return (
    <div className={dark?"dark":""}>
<div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
<NavBar dark={dark} setDarkTheme={setDark}/>
<Routes/>
<Footer/>
  </div>    
</div>
  );
}

export default App;

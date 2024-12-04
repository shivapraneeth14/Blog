import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
 
      <Header />

      <div className="flex-grow">
        <Outlet />
      </div>

     
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import Login from "./Login/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Login/Signup';

function App() {
  return (
    <div className='w-full h-screen bg'>
      <Signup/> 
    </div>
  );
}

export default App;

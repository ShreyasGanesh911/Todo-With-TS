import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TaskDisplay from './Components/TaskDisplay';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Task' element={<TaskDisplay />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;

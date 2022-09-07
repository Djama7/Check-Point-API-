
import Navp from './components/Navbar';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      <Navp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = '/Users' element={<ListUsers/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;

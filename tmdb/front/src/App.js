

import './App.css';
import { Route, Routes} from 'react-router';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Container from './components/Container';
import Singup from  './components/Signup'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Search />
      <Routes>
        <Route path="/signup" element={<Singup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;

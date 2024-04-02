// import logo from './logo.svg';
import './App.css';
import { About } from './components/about';
import { Home } from './components/home';
import { Navbar } from './components/navbar';
// import { Navbar } from './components/navbar';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/About"  element={<About/>} />
        </Routes>
      {/* </Navbar> */}
    </div>
  );
}

export default App;

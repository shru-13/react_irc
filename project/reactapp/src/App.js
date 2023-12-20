
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Reg from './components/Reg';
import SidePanel from "./components/SidePanel";
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Leave from './components/Leave';
import AboutUs from './components/AboutUs';
import CenteredBox from './components/CenteredBox';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/reg" element={<Reg/>}/>
        <Route exact path="/sidepanel" element={<SidePanel/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/t&c" element={<CenteredBox/>}/>

      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

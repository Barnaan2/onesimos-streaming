import Navbar from './routes/navbar/navbar.route';
import Home from './routes/home/home.route';
import Service from './components/Service/service.component';
import Give from "./components/give/give.component";
import Prayer from './components/Prayer/prayer.component';
import { Route,Routes } from 'react-router-dom';
import './App.css';
const App =()=> {
  return (
    <div className="App">
     <Routes>
<Route path="/" element={<Navbar/>}>
<Route index={true} element={<Home/>}/>
<Route path='/give' element={<Give/>}/>
<Route path='/prayer' element={<Prayer/>}/>
<Route path="/services" element={<Service/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;

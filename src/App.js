import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import productos from './Components/Productos'
import contacto from './Components/Contacto'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <switch>
          <route path= '/productos' exact component= {productos}/>
          <route path= '/contacto' exact component= {contacto}/>
          

        </switch>
      </Router>
      </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AllPirates from './views/AllPirates';
import { Router } from '@reach/router'
import PirateForm from './components/PirateForm';
import OnePirate from './views/OnePirate';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
        
        <Router>      
            <AllPirates path="/pirates"/>
            <PirateForm path="/pirate/new"/>
            <OnePirate path="/pirate/:id"/>
            <UserForm path="/register"/>
            <LoginForm path="/login"/>
        </Router>
  
    </div>
  );
}

export default App;

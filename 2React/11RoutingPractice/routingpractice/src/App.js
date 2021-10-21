import './App.css';
import { Router } from '@reach/router';
import RoutingPractice from './components/routingpractice';

function App() {
  return (
    <div className="App">
      <Router>
        <RoutingPractice path='/home'/>
        <RoutingPractice path='/:data'/>
        <RoutingPractice path='/:data/:textColor/'/>
        <RoutingPractice path='/:data/:textColor/:bgColor'/>
      </Router>
    </div>
  );
}

export default App;

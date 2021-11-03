import './App.css';
import { Router } from '@reach/router';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <CreateProduct path="/"/>
      </Router>
    </div>
  );
}

export default App;

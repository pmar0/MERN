import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import DisplayOne from './components/DisplayOne';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <DisplayOne path="/product/:productId"/>
      </Router>
    </div>
  );
}

export default App;

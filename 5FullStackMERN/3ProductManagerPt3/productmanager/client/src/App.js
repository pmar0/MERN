import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import DisplayOne from './components/DisplayOne';
import EditProduct from './components/EditProduct';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <DisplayOne path="/product/:productId"/>
        <EditProduct path="/product/edit/:productId"/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { Router } from '@reach/router';
import { useState } from 'react'
import AuthorForm from './components/AuthorForm';
import DisplayAll from './components/DisplayAll';
import EditAuthor from './components/EditAuthor';

function App() {
  const [authorList, setAuthorList] = useState([])

  return (
    <div className="App">
      <Router>
        <DisplayAll path="/" authorList={authorList} setAuthorList={setAuthorList}/>
        <AuthorForm path="/authors/new" authorList={authorList} setAuthorList={setAuthorList}/>
        <EditAuthor path="/authors/edit/:authorId"/>
      </Router>
    </div>
  );
}

export default App;

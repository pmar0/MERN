import '../App.css';
import PersonCard from './PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={52} hairColor="brown"/>
      <PersonCard firstName="Patty" lastName="Cake" age={10} hairColor="blonde"/>
      <PersonCard firstName="Heinz" lastName="Doofenschmirtz" age={45} hairColor="brown"/>
      <PersonCard firstName="Doug" lastName="Dimmadome" age={67} hairColor="silver"/>
    </div>
  );
}

export default App;

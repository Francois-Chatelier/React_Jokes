import Joke from './components/Joke';
import blagues from './data/jokes';

function App() {
  console.log(blagues);
  return (
    <div className="App">
      {blagues.map((blague) => (
        <Joke blague={blague} chute="Ceci est la chute" />
      ))}
    </div>
  );
}

export default App;

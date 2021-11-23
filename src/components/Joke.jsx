import './joke.css';

const Joke = ({ blague, chute }) => {
  return (
    <div className="design">
      <h3>{blague}</h3>
      <p className="chute">{chute}</p>
    </div>
  );
};

export default Joke;

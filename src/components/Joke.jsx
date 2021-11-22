import './joke.css';

const Joke = ({ blague }) => {
  return (
    <div className="design">
      <h3>{blague.setup}</h3>
      <p className="chute">{blague.delivery}</p>
    </div>
  );
};

export default Joke;

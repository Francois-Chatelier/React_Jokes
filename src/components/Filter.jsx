import React from 'react';
import './filter.css';

const Filter = ({
  numberJokes,
  setNumberJokes,
  containsWord,
  setContainsWord,
  withDelivery,
  setWithDelivery,
}) => {
  return (
    <div className="navbar">
      <div>
        <label className="blague" htmlFor="quantity">
          Nombre de blagues:
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={numberJokes} /** Permet d'ajouter de la valeur à l'input */
            onChange={(event) =>
              setNumberJokes(event.target.value)
            } /* Ecouter l'input */
          />
        </label>
      </div>
      <div>
        <label className="chute" htmlFor="chute">
          Avec Chute:
          <input
            type="checkbox"
            value={withDelivery}
            onClick={(event) =>
              setWithDelivery(event.target.value)
            } /** ou remplacer par function toggleWithDelivery */
          />
        </label>
      </div>
      <div>
        <label htmlFor="text">
          Contient:
          <input
            type="text"
            value={containsWord}
            onChange={(event) => setContainsWord(event.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;

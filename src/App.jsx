import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './components/Joke';
import Filter from './components/Filter';
import './app.css';

function App() {
  const [numberJokes, setNumberJokes] = useState(1);
  const [withDelivery, setWithDelivery] = useState(true);
  const [emptyWord, setEmptyWord] = useState('');
  const [jokes, setJokes] = useState([]); // variable initialisée avec un tableau vide

  const getApiCall = () => {
    let url = `https://v2.jokeapi.dev/joke/Any?&type='`;
    url += withDelivery ? 'single' : 'twoparts';
    url += `&amount=${numberJokes}`;
    url += emptyWord ? `&contains=${emptyWord}` : '';
    return url;
  };
  useEffect(() => {
    if (numberJokes > 0) {
      axios
        .get(getApiCall()) // Je fais appelle à mon API ici
        .then((res) => {
          // Je récupère la réponse
          if (numberJokes === 1) {
            return [res.data]; // Renvoie un résultat différent si purement égal à 1
          }
          return res.data.jokes; // Enfin je récupère la data de la réponse au State jokes
        })
        .then((data) => setJokes(data)) // Je cherche a mofifier le contenu du State jokes
        .catch((error) => console.log(error)); // Je récupère les erreurs avec le catch
    }
  }, [emptyWord, numberJokes, withDelivery]); // Je modifie mon tableau de dépendances

  // const toggleWithDelivery = (event) => {
  // setWithDelivery(event.target.value) ou setWithDelivery(!withDelivery);
  // };

  /** Mon appel API ici */
  return (
    <div>
      <Filter
        numberJokes={numberJokes}
        setNumberJokes={setNumberJokes}
        withDelivery={withDelivery}
        setWithDelivery={
          setWithDelivery
        } /** ou remplacer par function toggleWithDelivery */
        emptyWord={emptyWord}
        setEmptyWord={setEmptyWord}
      />
      {jokes.map((blague) => (
        <Joke blague={blague.setup || blague.joke} chute={blague.delivery} />
      ))}
    </div>
  );
}

export default App;

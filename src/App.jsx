import React, { useState } from 'react';
import Joke from './components/Joke';
import Filter from './components/Filter';
import blagues from './data/jokes';

function App() {
  const [numberJokes, setNumberJokes] = useState(1);
  const [withDelivery, setWithDelivery] = useState(true);
  const [containsWord, setContainsWord] = useState('');
  const [emptyWord, setEmptyWord] = useState('');
  console.log(setEmptyWord);

  // const toggleWithDelivery = (event) => {
  // setWithDelivery(event.target.value) ou setWithDelivery(!withDelivery);
  // };

  const getApiCall = () => {
    let url = `$https://v2.jokeapi.dev/joke/Any?&type=''`;
    url += withDelivery ? 'single' : 'twoparts';
    url += `&amount=${numberJokes}`;
    url += emptyWord ? `&contains=${emptyWord}` : '';
    return url;
  };
  console.log(getApiCall);

  return (
    <div>
      <Filter
        numberJokes={numberJokes}
        setNumberJokes={setNumberJokes}
        withDelivery={withDelivery}
        setWithDelivery={
          setWithDelivery
        } /** ou remplacer par function toggleWithDelivery */
        containsWord={containsWord}
        setContainsWord={setContainsWord}
      />
      {blagues.map((blague) => (
        <Joke blague={blague} chute="Ceci est la chute" />
      ))}
    </div>
  );
}

export default App;

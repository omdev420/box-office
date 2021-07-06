import React, { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { MainPageLayout } from '../components/MainPageLayout';

export const Home = () => {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r =>
      r.json().then(results => {
        console.log(results);
      })
    );
  };

  const onKeyDown = ev => {
    const enterPressed = ev.keyCode === 13;
    if (enterPressed) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        val={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

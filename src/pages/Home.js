import React, { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { MainPageLayout } from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

export const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = ev => {
    const enterPressed = ev.keyCode === 13;
    if (enterPressed) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
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
      {renderResults()}
    </MainPageLayout>
  );
};

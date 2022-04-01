import React, { useEffect, useState } from 'react';
import './App.css';
import { query } from './queries/postCollection';

const fetchCollection = {
  spaceID: "ficjrs60ipbi",
  accessToken: "BM2WA7ebVSMAcVrVs76Num04j30OwcYvRYV6Yz92V-o",
  endpoint: "https://graphql.contentful.com/content/v1/spaces/ficjrs60ipbi",
  method: "POST",
  headers: {
    Authorization: "Bearer BM2WA7ebVSMAcVrVs76Num04j30OwcYvRYV6Yz92V-o",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query })
}

function App() {

  useEffect(() => {
    window.fetch(fetchCollection.endpoint, fetchCollection)
    .then(response => response.json())
    .then(data => console.log(data));
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

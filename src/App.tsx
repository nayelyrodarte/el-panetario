import React, { useEffect, useState } from 'react';
import './App.css';
import { query } from './queries/postCollection';

const fetchCollection = {
  spaceID: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ID_TOKEN,
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ID_TOKEN}`,
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

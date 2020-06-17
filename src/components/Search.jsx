import React from 'react';
import '../assets/styles/Search.css'

const Search = () => (
  <section className="main">
    <h2 className="main__title">Type your city</h2>
    <input type="text" className="input" placeholder="Buscar..."/>
  </section>
);

export default Search;
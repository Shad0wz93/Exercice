import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { api_key } from './api_key';

function FilmSearch() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const fetchMovies = async () => {
    if (query) {
      try {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?language=fr-FR&query=${query}&page=1&api_key=${api_key}`;
        await axios.get(apiUrl)
        .then((result) => {
          console.log(result.data.results)
          setFilms(result.data.results);
        })
        .catch((error) => console.error(error)) 
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    } else {
        try {
            const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1&api_key=${api_key}`;
            await axios.get(apiUrl)
            .then((result) => {
              console.log(result.data.results)
              setFilms(result.data.results);
            })
            .catch((error) => console.error(error))
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Rechercher des films</h2>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link to={`resultats?query=${query}`}>Rechercher</Link>
      <ul>
        {
        (films !== undefined && films != [])
        ?
        films.map((film) => {
          return(
            <li key={film.id}>
                <Link to={`details/${film.id}`} color={'black'}>{film.title}</Link>
            </li>
          )
        })
        :
        <span>Loading</span>
        }
      </ul>
    </div>
  );
}

export default FilmSearch;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api_key } from './api_key';
import './agenda.css'; 


function WeeklyAgenda() {
  const [agenda, setAgenda] = useState({});

  const getTheBoysEpisodes = async () => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/tv/76479?language=fr-FR&api_key=${api_key}`;
      const response = await axios.get(apiUrl);
      const seriesData = response.data;

      // Obtenir la liste des épisodes 
      const season1Episodes = seriesData.seasons.find(season => season.season_number === 1);
      const episodes = season1Episodes.episode_count;

      // épisodes par jour de la semaine
      const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const agendaData = {};

      for (let i = 0; i < episodes; i++) {
        const dayIndex = i % 7; 
        const day = daysOfWeek[dayIndex];
        if (!agendaData[day]) {
          agendaData[day] = [];
        }

        agendaData[day].push({
          title: `S01E${i + 1} - Episode de The Boys`, 
        });
      }

      setAgenda(agendaData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const getMovieReleaseDates = async () => {
    try {
      const movieId = '76479'; 
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${api_key}`;
      const response = await axios.get(apiUrl);
      const releaseDates = response.data.results;

      
      console.log('Dates de sortie du film :', releaseDates);
    } catch (error) {
      console.error('Erreur lors de la récupération des dates de sortie :', error);
    }
  };

  useEffect(() => {
    getTheBoysEpisodes();
    getMovieReleaseDates(); 
  }, []);

  return (
    <div className="weekly-agenda">
      <h2>Agenda hebdomadaire des épisodes de "The Boys"</h2>
      <ol className="agenda-list"> 
        {Object.keys(agenda).map((day) => (
          <li key={day} className="agenda-day"> 
            <h3>{day}</h3>
            <ul className="episode-list"> 
              {agenda[day].map((item, index) => (
                <li key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default WeeklyAgenda;

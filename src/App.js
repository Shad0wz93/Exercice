import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import FilmSearch from './components/FilmSearch'; // Ajout du composant FilmSearch
import WeeklyAgenda from './components/WeeklyAgenda';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/film" element={<FilmSearch />} /> 
          <Route path="/agenda" element={<WeeklyAgenda />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

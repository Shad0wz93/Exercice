import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userData from '../users.json';
import './Navbar.css'; 

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/todo" className={location.pathname === '/todo' ? 'active' : '' + ' nav-link'}>
            Todo List
          </Link>
        </li>
        <li>
          <Link to="/counter" className={location.pathname === '/counter' ? 'active' : ''  + ' nav-link'}>
            Counter
          </Link>
        </li>
        <li>
          <Link to="/product" className={location.pathname === '/product' ? 'active' : ''  + ' nav-link'}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/film" className={location.pathname === '/film' ? 'active' : ''  + ' nav-link'}>
            Film
          </Link>
        </li>
        <li>
          <Link to="/agenda" className={location.pathname === '/agenda' ? 'active' : ''  + ' nav-link'}>
            agenda
          </Link>
        </li>
        
        <li>
          <div className="user-dropdown">
            <button className="dropbtn">Select User</button>
            <div className="user-dropdown-content">
              {userData.map((user) => (
                <Link
                  key={user.id}
                  to={`/user/${user.id}`}
                  className={location.pathname === `/user/${user.id}` ? 'active' : ''  + ' nav-link'}
                >
                  {user.name}
                </Link>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

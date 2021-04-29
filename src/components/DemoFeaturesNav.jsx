import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';

const DemoFeaturesNav = () => {
  const currentURL = useLocation().pathname;

  return (
    <nav className='features-nav-container'>
      <Container>
        <ul className='features-nav'>
          <li>Select a Feature:</li>
          <li>
            <Link to='/tasks'>
              <button
                className={`titlefont ${
                  currentURL.includes('tasks') ? 'selected' : ''
                }`}
              >
                Add a Task
              </button>
            </Link>
          </li>
          <li>
            <Link to='/grades'>
              <button
                className={`titlefont ${
                  currentURL.includes('grades') ? 'selected' : ''
                }`}
              >
                Grade a Submission
              </button>
            </Link>
          </li>
          <li>
            <Link to='/video'>
              <button
                className={`titlefont ${
                  currentURL.includes('video') ? 'selected' : ''
                }`}
              >
                Start Video Call
              </button>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default DemoFeaturesNav;

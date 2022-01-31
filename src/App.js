import React from 'react';
import './App.css';

import './assets/search-background.jpg';

const App = () => {
  const loggedIn = true;
    return (
        <section className='app'>
            {
              loggedIn ?
              <div>
                <div className='search-container'>
                  <p>Find your secret recipes.</p>
                  <form>
                    <input className='search-bar' type='text' placeholder='Find recipe' />
                  </form>
                </div>
                <div>Content</div>
              </div> :
              <div>Please Log in</div>
            }
        </section>
    );
}

export default App;

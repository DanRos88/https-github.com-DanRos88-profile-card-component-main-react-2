import React from 'react';
import './App.css';
import pic from "../imgs/image-victor.jpg";

function App() {
  return (
    <main className="App">
      <div className="Card">

            <div className="card_header">
                <picture>
                    <img src={pic} alt="Victor" />
                </picture>
            </div>

            <div className='card_main'>
              <div className='flex'> 
                <h1>Victor Crest</h1>
                <h2>26</h2>
              </div>
              <h3>London</h3>
            </div>
            <hr />
            <div className='card_data'>
              <div className='followers'>
                <h2> 80K</h2>
                <h3> Followers </h3>
              </div>

              <div className='likes'>
                <h2>803K</h2>
                <h3>Likes </h3>
              </div>

              <div className='photos'>
                <h2>1.4K</h2>
                <h3>Photos</h3>
              </div>
            </div>

        </div>
    </main>
  );
}

export default App;

// src/App.jsx
import './App.css';
import discord from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';
import bigImage from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
        <nav>
          <div className='container-img'>
            <img src={discord} alt='discord'></img>
          </div>
          <div className='container-menu'>
            <img src={menu} alt='menu'></img>
          </div>
        </nav>
        <main>
          <h1>Imagine a place...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className='buttons-images'>
            <div className='container-buttons'>
              <button className='btn-white'>Download for Mac</button>
              <button className='btn-blue'>Open Discord in your browser</button>
            </div>
            <div className='container-img2'>
              <img src={bigImage} alt='background-image'></img>
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
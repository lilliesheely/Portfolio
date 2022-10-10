import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage'
// import AboutMe from '../../components/AboutMe/AboutMe'; 
// import Resume from '../../components/Resume/Resume'; 
// import Projects from '../../components/Projects/Projects'; 
// import Contact from '../../components/Contact/Contact';
import './App.css';
import $ from 'jquery';


export default function App() {
  const skiImages = {
    1: 'https://i.imgur.com/sf0DF5w.png',
    3: 'https://i.imgur.com/sf0DF5w.png',
    2: 'https://i.imgur.com/sf0DF5w.png',
    4: 'https://i.imgur.com/sf0DF5w.png',
    5: 'https://i.imgur.com/sf0DF5w.png', 
    6: 'https://i.imgur.com/sf0DF5w.png', 
    7: 'https://i.imgur.com/sf0DF5w.png', 
    8: 'https://i.imgur.com/sf0DF5w.png', 
    9: 'https://i.imgur.com/sf0DF5w.png', 
    10: 'https://i.imgur.com/sf0DF5w.png',
    11: 'https://i.imgur.com/sf0DF5w.png', 
    12: 'https://i.imgur.com/sf0DF5w.png', 
    13: 'https://i.imgur.com/sf0DF5w.png', 
    14: 'https://i.imgur.com/sf0DF5w.png', 
    15: 'https://i.imgur.com/sf0DF5w.png', 
    16: 'https://i.imgur.com/sf0DF5w.png', 
    17: 'https://i.imgur.com/sf0DF5w.png', 
    18: 'https://i.imgur.com/sf0DF5w.png', 
    19: 'https://i.imgur.com/sf0DF5w.png', 
    20: 'https://i.imgur.com/sf0DF5w.png', 
    21: 'https://i.imgur.com/sf0DF5w.png',
    22: 'https://i.imgur.com/sf0DF5w.png',
    23: 'https://i.imgur.com/sf0DF5w.png', 
    24: 'https://i.imgur.com/sf0DF5w.png', 
    25: 'https://i.imgur.com/sf0DF5w.png', 
    26: 'https://i.imgur.com/sf0DF5w.png', 
    27: 'https://i.imgur.com/sf0DF5w.png', 
    28: 'https://i.imgur.com/sf0DF5w.png', 
    29: 'https://i.imgur.com/sf0DF5w.png', 
    30: 'https://i.imgur.com/sf0DF5w.png', 
    31: 'https://i.imgur.com/sf0DF5w.png', 
    32: 'https://i.imgur.com/sf0DF5w.png', 
    33: 'https://i.imgur.com/sf0DF5w.png', 
    34: 'https://i.imgur.com/sf0DF5w.png', 
    35: 'https://i.imgur.com/sf0DF5w.png', 
  }
  
  const step = 35;

  function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/30) + 1, 35);
    const imageToUse = skiImages[label];
    // Change the background image
    $('.App').css('background-image', `url('${imageToUse}')`);
  }

  $(document).ready(() => {
    $(window).scroll(() => {
      trackScrollPosition();
    })
  })

  return (
    <main className="App">
      {
        <>
           <div class='container'>
            <NavBar />
            <MainPage />
            {/* <div className='image-container'></div> */}
          </div>
        </>
      }
    </main>
  );
}

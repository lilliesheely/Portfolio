import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';  
import Footer from '../../components/Footer/Footer';
import './App.css';
import $ from 'jquery';


export default function App() {
  const skiImages = {
    1: 'https://i.imgur.com/ZW5b7PH.png',
    2: 'https://i.imgur.com/JaGnWRo.png',
    3: 'https://i.imgur.com/Mpus0dn.png',
    4: 'https://i.imgur.com/LUgeBz7.png',
    5: 'https://i.imgur.com/RNcpVxT.png', 
    6: 'https://i.imgur.com/tLoK7oy.png', 
    7: 'https://i.imgur.com/U9Dl26l.png', 
    8: 'https://i.imgur.com/N3VA20X.png', 
    9: 'https://i.imgur.com/eOgQYw2.png', 
    10: 'https://i.imgur.com/OKiSdBh.png',
    11: 'https://i.imgur.com/C3YUWHJ.png', 
    12: 'https://i.imgur.com/fFMqdpE.png', 
    13: 'https://i.imgur.com/ZcAaBf2.png', 
    14: 'https://i.imgur.com/36aFQYV.png', 
    15: 'https://i.imgur.com/kYFr0NC.png', 
    16: 'https://i.imgur.com/P8PotiP.png', 
    17: 'https://i.imgur.com/na5eEbN.png', 
    18: 'https://i.imgur.com/jSKI15f.png', 
    19: 'https://i.imgur.com/tKEzJ7r.png', 
    20: 'https://i.imgur.com/c0juw8d.png', 
    21: 'https://i.imgur.com/lhXpejY.png',
    22: 'https://i.imgur.com/dLidI9k.png',
    23: 'https://i.imgur.com/ANCtLC0.png', 
    24: 'https://i.imgur.com/JUr9JyY.png', 
    25: 'https://i.imgur.com/LjzLUTO.png', 
    26: 'https://i.imgur.com/1BTitwn.png', 
    27: 'https://i.imgur.com/UbNd1Hl.png', 
    28: 'https://i.imgur.com/nOztFAr.png', 
    29: 'https://i.imgur.com/SPmWWRo.png', 
    30: 'https://i.imgur.com/8V2BMxn.png', 
  }
  
  const step = 30;

  function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/100) + 1);
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
            <Footer />
          </div>
        </>
      }
    </main>
  );
}

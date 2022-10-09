import NavBar from '../../components/NavBar/NavBar';
import AboutMe from '../../components/AboutMe/AboutMe'; 
import Resume from '../../components/Resume/Resume'; 
import Projects from '../../components/Projects/Projects'; 
import Contact from '../../components/Contact/Contact'
import './App.css';
import $ from 'jquery';


export default function App() {
  const fruitImages = {
    1:'https://i.imgur.com/zyf37kC.png',
    2:'https://i.imgur.com/dW5Orbc.png',
    3:'https://i.imgur.com/bWgnrvT.png',
  }
  
  const step = 30;

  function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/30) + 1, 20);
    const imageToUse = fruitImages[label];
    // Change the background image
    $('.image-container').css('background-image', `url('${imageToUse}')`);
  }
  $(document).ready(()=>{
    $(window).scroll(()=>{
      trackScrollPosition();
    })
  })


  return (
    <main className="App">
      {
        <>
        <div className='container'>
        <div className='image-container'></div>

            <NavBar />
            <AboutMe />
            <hr />
            <Resume /> 
            <hr />
            <Projects /> 
            <hr />
            <Contact />
          </div>
        </>
      }
    </main>
  );
}

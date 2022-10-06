import NavBar from '../../components/NavBar/NavBar';
import AboutMe from '../../components/AboutMe/AboutMe'; 
import Resume from '../../components/Resume/Resume'; 
import Projects from '../../components/Projects/Projects'; 
import Contact from '../../components/Contact/Contact'
import './App.css';

export default function App() {
  
  return (
    <main className="App">
      {
        <>
          <NavBar />
        
          <AboutMe />
          <hr />
          <Resume /> 
          <hr />
          <Projects /> 
          <hr />
          <Contact />
        </>
      }
    </main>
  );
}

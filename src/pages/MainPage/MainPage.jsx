import AboutMe from '../../components/AboutMe/AboutMe'; 
import Resume from '../../components/Resume/Resume'; 
import Projects from '../../components/Projects/Projects'; 
import Contact from '../../components/Contact/Contact';

import './MainPage.css'
export default function MainPage() {
    return (
        <>
        <div className='MainPage'>
            <AboutMe />
            <Resume /> 
            <Projects /> 
            <Contact />
        </div>
        </>
    )
}
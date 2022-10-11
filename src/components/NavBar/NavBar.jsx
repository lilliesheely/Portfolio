import './NavBar.css';
import $ from 'jquery';

export default function NavBar() {
  let navbar = document.querySelector('nav')

  window.onscroll = function() {
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
  
  return (
    <nav className='nav'>
      <div className="nav-logo">Lillie Sheely</div> 
        <ul className='nav-items'>
          <li><a href="#about">ME</a></li> &nbsp; | &nbsp; 
          <li><a href="#past">PAST</a></li> &nbsp; | &nbsp; 
          <li><a href="#projects">PROJECTS</a></li> &nbsp; | &nbsp; 
          <li><a href="#contact">CONTACT</a></li> &nbsp; &nbsp;
        </ul>
    </nav>
  );
}


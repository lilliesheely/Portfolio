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
      <div className="nav-logo"><img src="https://i.imgur.com/6K8aQos.png" id='logo' alt="" /></div> 
        <ul className='nav-items'>
          <li><a href="#about">me</a></li> &nbsp; | &nbsp; 
          <li><a href="#past">past</a></li> &nbsp; | &nbsp; 
          <li><a href="#projects">projects</a></li> &nbsp; | &nbsp; 
          <li><a href="#contact">contact</a></li> &nbsp; &nbsp;
        </ul>
    </nav>
  );
}


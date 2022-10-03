import './NavBar.css'
export default function NavBar() {
  return (
    <nav className='nav'>
      <p className="navbar">LS</p> 
      <div className='nav-items'>
      <a href="#about">ME</a> &nbsp; | &nbsp; 
      <a href="#past">PAST</a> &nbsp; | &nbsp; 
      <a href="#projects">PROJECTS</a> &nbsp; | &nbsp; 
      <a href="#contact">CONTACT</a> &nbsp; &nbsp;
      </div>
    </nav>
  );
}


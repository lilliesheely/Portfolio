import './Projects.css'; 
import $ from 'jquery';

export default function Projects() {
      return (
        <>
           <div id='projects'></div>
            <h1><span id='runs'></span></h1>
            
            <div className='project-section'>
                <div className="project-ind">
                    <img src="https://i.imgur.com/zWXBegY.png" alt="" width="600" height="101" className='project-img' />
                    <div class="overlay">
                        <div class="text">
                            <p> <a href="https://brewery-bucket-list.herokuapp.com/" target="_blank" rel="noreferrer">Deployed App</a> <br /> <a href="https://github.com/lilliesheely/Brewery-Bucket-List" target="_blank" rel="noreferrer">GitHub</a> <br /> JavaScript | MongoDB | Mongoose | Express | React | Node.js | HTML | CSS </p>
                        </div>
                    </div>
                </div>
                <div class="project-ind">
                    <img src="https://i.imgur.com/yyPTDwH.png" alt="" width="600" height="101" className='project-img' />
                    <div class="overlay">
                        <div class="text">
                            <p className='textTest'> <a href="https://neighborhood-puzzle-swap.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed App</a> <br /> <a href="https://github.com/lilliesheely/Puzzle-Swap" target="_blank" rel="noreferrer">Github Link</a> <br /> JavaScript | MongoDB | Mongoose | Express | Node.js | HTML | CSS </p>
                        </div>
                    </div>
                </div>
                <div class="project-ind">
                    <img src="https://i.imgur.com/Zei7nXT.png" alt="" width="600" height="101" className='project-img' />
                    <div class="overlay">
                        <div class="text">
                            <p> <a href="https://lilliesheely.github.io/Connect4/" target="_blank" rel="noreferrer">Deployed App</a> <br /> <a href="https://github.com/lilliesheely/Connect4" target="_blank" rel="noreferrer">Github Link</a> <br /> JS | CSS | HTML </p>
                        </div>
                    </div>
                </div>
                <div class="project-ind">
                    <img src="https://i.imgur.com/25TKs0K.png" alt="" width="600" height="101" className='project-img' />
                    <div class="overlay">
                        <div class="text">
                            <p> <a href="https://plantcollectorsf.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed App</a> <br /> <a href="https://github.com/lilliesheely/Plant-Collector" target="_blank" rel="noreferrer">Github Link</a> <br /> Python | Django | PostgreSQL | CSS | HTML </p>
                        </div>
                    </div>
                </div>
                <div class="project-ind">
                    <img src="https://i.imgur.com/197qF2w.png" alt="" width="600" height="101" className='project-img' />
                    <div class="overlay">
                        <div class="text">
                            <p> <a href="https://nextstopapp.herokuapp.com/" target="_blank" rel="noreferrer">Deployed App</a> <br /> <a href="https://github.com/lilliesheely/Next-Stop" target="_blank" rel="noreferrer">Github Link</a> <br /> Python | Django | PostgreSQL | CSS | HTML </p>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}



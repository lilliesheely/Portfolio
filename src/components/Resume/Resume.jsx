import './Resume.css'
export default function Resume() {
    
    
    return (
        <>
            <h1 id="past">PAST WORK</h1>
            <section className='resume'>
                <div className="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/sGFdBXD.png" height='300' alt="" />
                        </div>
                        <div class="flip-card-back">
                            <h1>Mango Health</h1>
                            <h3>Solutions Delivery Analyst</h3>
                            <ul>
                                <li></li>
                            </ul>
                            <h3>Operations Associate</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/gmhnWTr.png" height='300' alt="" />
                        </div>
                        <div class="flip-card-back">
                            <h1>Tuft & Needle</h1>
                            <h3>Customer Experience & Retail Associate </h3>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/Z8jrk9g.png" height='300' alt="caviar ski pass" />
                        </div>
                        <div class="flip-card-back">
                            <h1>Caviar</h1>
                            <h3>Customer Experience Project Manager</h3>
                            <h3>Customer Experience Shift Lead </h3>
                            <p>did some thigns</p>
                            <p>coolness</p>
                        </div>
                    </div>
                </div>
                <div><a href="https://drive.google.com/file/d/1axkNSUy8KjDy9j99T9O1epYDEtuOeu92/view?usp=sharing" target="_blank" rel="noreferrer">Full Resume</a></div> 
            </section>
        </>
    )
}



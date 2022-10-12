import './Resume.css'
export default function Resume() {
    
    
    return (
        <>
            <h1 id="past">past work </h1>
            <section className='resume'>
                <div className="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/sef0ihi.png" id='resume-img' alt="Mango Health Ski Pass" />
                        </div>
                        <div class="flip-card-back">
                            <h2>Mango Health</h2>
                            <h4>Solutions Delivery Analyst</h4>
                            <ul>
                                <li>Oversaw the configuration of new Mango programs ranging from $250k to $1 million in value.</li>
                                <li>Maintained detailed, in-depth knowledge and documentation of the Mango platform.</li>
                                <li>Integrated impacts with related TrialCard services and oversaw the training for the TrialCard Support team of 2000+ people.</li>
                            </ul>
                            <h4>Operations Associate</h4>
                            <ul>
                                <li>Managed the office's day-to-day operations including coordinating with external vendors. Reviewed all operation costs yearly, to ensure cost efficiency across the company.</li>
                                <li>Facilitated the onboarding and offboarding of employees as well as the monthly finance close.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/nKFdsc2.png" id='resume-img' alt="Tuft and Needle Ski Pass" />
                        </div>
                        <div class="flip-card-back">
                            <h2>Tuft & Needle</h2>
                            <h4>Customer Experience & Retail Associate </h4>
                            <ul>
                                <li>Managed Project 40:70; with a goal to increase in-store conversions and maintain an NPS of over 70. Included analyzing NPS responses, team actions, and customer relation tactics. </li>
                                <li>Analyzed performance metrics to provide recommendations to improve processes. The first month resulted in a 12% increase in in-store conversions and an NPS of 77.</li>
                                <li>Coordinated laundry service and successfully reduced store laundry expenses by 67% per month. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i.imgur.com/zTu1BoZ.png" id='resume-img' alt="caviar ski pass" />
                        </div>
                        <div class="flip-card-back">
                            <h2>Caviar</h2>
                            <h4>Customer Experience Project Manager</h4>
                            <ul>
                                <li>Evaluated efficiencies and productivity of all customer service tools.</li> 
                                <li>Analyzed company systems’ performance and provided recommendations to create process improvements.</li>  
                                <li>Worked cross-functionally with the engineering, marketing, and local teams to ensure a seamless customer experience.</li>
                            </ul>
                            <h4>Customer Experience Shift Lead </h4>
                            <ul>
                                <li>Managed a team of 6 support agents; handling all inquiries, sales calls, restaurant relations, and customer complaints.</li>
                                <li>Reported weekly on my team’s metrics and met with each individual to help improve performance. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section> 
                <br />
                <br />
                <div>
                    <button class="button-19"><a href="https://drive.google.com/file/d/12-6IMVK06MacjIWdlIi_2G3RPYp9X8mt/view?usp=sharing" target="_blank" rel="noreferrer">full resume</a></button>
                </div> 
            
        </>
    )
}
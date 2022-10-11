import './AboutMe.css'
export default function AboutMe() {
    return(
        <>
            <div className='about-me' >
                <img src="https://i.imgur.com/gIqOlxV.jpg"  alt="profile" className='profile-photo'/>
                <div>
                    <h1 id='intro'>hi, i am lillie sheely. </h1>
                    <h2 id='sub-aboutme'>I am a Software Engineer with a passion for understanding the customer and empathy for everyone. </h2> <br />
                    <p id='aboutMeDescription'>Before my transition to software engineering, I worked for several startups, in a variety of operational roles, from customer service, operations association, and solutions delivery.  My previous experience taught me to handle high stress situations in a fast-paced environment. I hope to take my passion for the customer into the engineering realm. </p>
                    {/* <p id='techskills'>Technical Skills: <br /> React, JavaScript, Django, Python, MongoDB, Mongoose, Express, HTML, CSS</p> */}
                </div>
            </div>
        </>
    )
}
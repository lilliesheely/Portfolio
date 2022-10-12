import './Contact.css'; 

export default function Contact() {
    return( 
        <>
            <h1 id='contact'>get in touch</h1>
            <section className="contact-section">
                <div className='contactme'>
                    <img src="https://i.imgur.com/6HaCdFr.png" alt="envelope" height='100' width='100'  />
                    <br />
                    lilliesheely@gmail.com
                </div>  
               
                <div className='contactme'>
                    <img src="https://i.imgur.com/Ow1DZm5.png" alt="pin" height='100' width='100' /> 
                    <br /> 
                    San Francisco, CA  
                </div>
                <div className='linkedin'>
                    <a href="https://www.linkedin.com/in/lillian-sheely/" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/bO5vxIH.png" height='100' width='100' alt="linkedin" /></a>
                </div>
                <div className='landgh'>
                    <a href="https://github.com/lilliesheely" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/jOPhEmw.png" alt="github" height='100' width='100' /></a>
                </div>
            </section>   
        </>
    )
}   
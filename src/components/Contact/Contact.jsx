import './Contact.css'; 

export default function Contact() {
    return( 
        <>
            <h1 id='contact'>Get in touch</h1>
            <section className="contact-section">
                <div>
                    <a href="mailto:lilliesheely@gmail.com"> <img src="https://i.imgur.com/71LZUOC.png" alt="envelope" height='100' width='100'  />lilliesheely@gmail.com</a>
                </div>  
                <div>
                    <img src="https://i.imgur.com/PtyVnel.png" height='100' width='100' alt="phone" />
                    <br /> 
                    602-989-3195
                </div>
                <div>
                    <img src="https://i.imgur.com/7u5VzsR.png" alt="pin" height='100' width='100' /> 
                    <br /> 
                    San Francisco, CA  
                </div>
            </section>
            <h1>Check me out on these platforms:</h1>
            <section className="contact-section2"> 
                <div>
                    <a href="https://www.linkedin.com/in/lillian-sheely/"><img src="https://i.imgur.com/GbQ2cFd.png" height='100' width='100' alt="linkedin" /></a>
                </div>
                <div>
                    <a href="https://github.com/lilliesheely"><img src="https://i.imgur.com/qMVvtzb.png" alt="github" height='100' width='100' /></a>
                </div>
                </section>   
        </>
    )
}   
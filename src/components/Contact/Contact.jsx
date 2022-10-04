import './Contact.css'; 

export default function Contact() {
    return( 
        <>
            <h1 id='contact'>CONTACT</h1>
            <section className="contact-section">
                <div>
                  
                    <a href="mailto:lilliesheely@gmail.com"> <img src="https://i.imgur.com/2F0I92N.png" alt="envelope" />lilliesheely@gmail.com</a>
                </div>  
                <div>
                    <a href="tel:+16029893195"><img src="https://i.imgur.com/kkxnVtu.png" alt="phone" />602-989-3195</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/lillian-sheely/"><img src="https://i.imgur.com/Sat7CEq.png" height='100' width='100' alt="linkedin" /></a>
                </div>
                <div>
                <a href="https://github.com/lilliesheely"><img src="https://i.imgur.com/gYhUMJH.png" alt="github" /></a>
                </div>
            </section>
        </>
    )
}   
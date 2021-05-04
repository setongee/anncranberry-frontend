import React, {useState} from 'react';
import './contactStyle.scss'
import FeatherIcon from 'feather-icons-react';
import axios from 'axios'

const featherSize = {
    size : 20,
    stroke : 1.5
}

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const contactData = {
        firstname : name,
        email : email,
        course : message,
        subject : 'Contact Message from the page',
        price : '',
        lastname : ''
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post('https://anncranberry-server.herokuapp.com/api/sendmail', contactData)

        setName("")
        setEmail('')
        setMessage('')
        console.log('Email Sent successfully');

    }

    return (

        <div className="contact-body">

            <div className = 'hold'>

                <div className="top-header">
                    <h1>contact.</h1>
                    <p>fill the form and our team will get back to you within 24 hours</p>
                </div>

                <div className="connect">
                <div className="call contact"> <FeatherIcon icon="phone" size = {featherSize.size} strokeWidth = {featherSize.stroke} className = 'icon-f' /> +234 813 0489 283</div>
                <div className="mail contact"> <FeatherIcon icon="mail" size = {featherSize.size} strokeWidth = {featherSize.stroke} className = 'icon-f' /> hello@anncranberry.com</div>
                <div className="pin contact"> <FeatherIcon icon="map-pin" size = {featherSize.size} strokeWidth = {featherSize.stroke} className = 'icon-f' /> No 11, Raymond Street off Montgomery <br></br> Road, Yaba, Lagos, Nigeria</div>
                </div>

                <div className="socialize">
                    <div className="icon-fi"> <FeatherIcon size = {featherSize.size} strokeWidth = {featherSize.stroke} icon="twitter"/></div>
                    <div className="icon-fi"> <FeatherIcon size = {featherSize.size} strokeWidth = {featherSize.stroke} icon="facebook"/></div>
                    <div className="icon-fi"> <FeatherIcon size = {featherSize.size} strokeWidth = {featherSize.stroke} icon="instagram"/></div>
                </div>

            </div>

            
            <div className="sendMessage">

                <div className="form-header">
                    Send us a message
                </div>

                <form onSubmit = {handleSubmit}>

                    <div className="input-data">
                        <label htmlFor="">Fullname</label>
                        <input value = {name} onChange = {(e)=> setName(e.target.value) } type="text" placeholder = 'Enter your fullname...' />
                    </div>
                    <div className="input-data">
                        <label htmlFor="">Email</label>
                        <input value = {email} onChange = {(e)=> setEmail(e.target.value) } type="email" placeholder = 'Enter your email address...' />
                    </div>
                    <div className="input-data">
                        <label htmlFor="">Message</label>
                        <textarea value = {message} onChange = {(e)=> setMessage(e.target.value) } rows = '5' placeholder = 'Enter your message...' />
                    </div>

                    <button type = "submit" >Send Message</button>

                </form>
            </div>
            

        </div>
        
    );
}

export default Contact;

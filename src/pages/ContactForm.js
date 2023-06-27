import React, {useRef} from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {
 
    const form = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState(null)

    const sendEmail = (e) => {
        // e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ans= {name, email, message}

        const response = await fetch('https://top-ten-backend.onrender.com/api/messages/', {
            method: 'POST',
            body: JSON.stringify(ans),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setName("")
            setEmail("")
            setMessage("")
            setEmptyFields([])
            setError(null)
            console.log('New message posted', json)
            alert('Message posted successfully , We will get back to you ASAP!')
            sendEmail()
        }
    }
  
    return (
        <form className='contact-f' ref={form} onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={ (e) => setName(e.target.value)}
                value={name}
                placeholder='Your Name'
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Your Email'
                className={emptyFields.includes('email') ? 'error' : ''}
            />

            <textarea 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder='Write Your Message Here'
                rows={5}
                cols={30}
                className={emptyFields.includes('message') ? 'error' : ''}
            />

            <button>SEND MESSAGE</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ContactForm
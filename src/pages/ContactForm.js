import React from 'react'
import { useState } from 'react'

function ContactForm() {
 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ans= {name, email, message}

        const response = await fetch('/api/messages/', {
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
        }
    }
  
    return (
        <form className='contact-f' onSubmit={handleSubmit}>
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
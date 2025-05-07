import React from 'react'

const ContactForm = () => {
  return (
    <>
    <div>
      <div>
    <div className='contact-form'>
        <form> <p>
            <label> Name
            <input className='input-1' type="text" placeholder='First and Last Name'/></label>
            <br/>
            <label>Email
            <input className='input-1' type="email" placeholder='Email' /></label>
            <br/>
            <label>Text Area
            <textarea className='input-1' placeholder='Write a message'></textarea></label>
            <br/>
            <button className='submit' type='submit'> Submit </button></p>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default ContactForm
import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form> <p>
            <input type="text" placeholder='Name' />
            <br/>
            <input type="email" placeholder='Email'  />
            <br/>
            <textarea placeholder='message'></textarea>
            <br/>
            <button type='submit'> Submit </button></p>
        </form>
    </div>
  )
}

export default ContactForm
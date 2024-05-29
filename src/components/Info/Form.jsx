import React, { useEffect, useState } from 'react'
import $ from 'jquery'

const Form = () => {
    const [submit, setSubmit] = useState(false)

    useEffect(() => {

        const copy = 'moc.liamg@ofni.nebeares'
        const e = copy.split('').reverse().join('')
        $('#email').html('<a href="mailto:'+e+'?subject=Business Inquiry - Let\'s Discuss an Opportunity!" aria-label="Email me to discuss a business opportunity!">'+e+'</a>')

        setTimeout(() => {
            setSubmit(false)
            setFormData({
                'entry.910385804': '',
                'entry.1738413758': '',
                'entry.820084297': ''
            })
        }, 2000)
      }, [submit])

    const [formData, setFormData] = useState({
        'entry.910385804': '',
        'entry.1738413758': '',
        'entry.820084297': ''
    })

    const handleInputData = (input) => (e) => {
        const { value } = e.target

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setSubmit(true)

        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLSdoMFZYcketyKf-YIXwZfYA_5WIaSHeJHESOnHuptIJbCelRQ/formResponse?entry.910385804=${formData['entry.910385804']}&entry.1738413758=${formData['entry.1738413758']}&entry.820084297=${formData['entry.820084297']}`

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
    }

    return (
        <div className='contactFormWrapper'>
            <div className='formheader'>
                <p>
                    Email: <span id='email'>hello@gmail.com</span>
                </p>
            </div>
            <div className='formcontact'>
                <form onSubmit={handleSubmit} target='_self'>
                    <fieldset>
                        <input
                            required
                            type='text'
                            name='entry.910385804'
                            onChange={handleInputData('entry.910385804')}
                            value={formData['entry.910385804']}
                            autoComplete='false'
                            placeholder='name'
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            required
                            type='email'
                            name='entry.1738413758'
                            onChange={handleInputData('entry.1738413758')}
                            value={formData['entry.1738413758']}
                            autoComplete='false'
                            placeholder='e-mail'
                        />
                    </fieldset>

                    <fieldset>
                        <textarea
                            required
                            name='entry.820084297'
                            rows='4'
                            onChange={handleInputData('entry.820084297')}
                            value={formData['entry.820084297']}
                            autoComplete='false'
                            placeholder='message'
                        ></textarea>
                    </fieldset>

                    <button className='submit' type='submit'>{submit ? 'Message Sent!' : 'Send'}</button>
                </form>
            </div>
        </div>
    )
}

export default Form
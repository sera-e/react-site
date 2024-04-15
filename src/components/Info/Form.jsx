import React, { useState } from 'react'

const Form = () => {
    const [submit, setSubmit] = useState(false)
    const [formData, setFormData] = useState({
        'entry.205911261': '',
        'entry.1676677340': '',
        'entry.1154934995': ''
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

        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSe0OfKux1x0pZXKILd9NgH-FLeaOYhUtI_FHSo0zK0652Fydg/formResponse?entry.205911261=${formData['entry.205911261']}&entry.1676677340=${formData['entry.1676677340']}&entry.1154934995=${formData['entry.1154934995']}`

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
    }
    return (
        <div className='contactFormWrapper'>
            <div className='formheader'></div>
            <div className='formcontact'>
                <form onSubmit={handleSubmit} target='_self'>
                    <fieldset>
                        <input
                            required
                            type='text'
                            name='entry.205911261'
                            onChange={handleInputData('entry.205911261')}
                            value={formData['entry.205911261']}
                            autoComplete={false}
                            placeholder='name'
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            required
                            type='email'
                            name='entry.1676677340'
                            onChange={handleInputData('entry.1676677340')}
                            value={formData['entry.1676677340']}
                            autoComplete={false}
                            placeholder='e-mail'
                        />
                    </fieldset>

                    <fieldset>
                        <textarea
                            required
                            name='entry.1154934995'
                            rows='4'
                            onChange={handleInputData('entry.1154934995')}
                            value={formData['entry.1154934995']}
                            autoComplete={false}
                            placeholder='message'
                        ></textarea>
                    </fieldset>

                    <button type='submit'>{submit ? 'Message Sent!' : 'Send'}</button>
                </form>
            </div>
        </div>
    )
}

export default Form
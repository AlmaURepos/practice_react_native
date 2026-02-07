import {useState} from 'react'

function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [ageError, setAgeError] = useState('')

    const [success, setSuccess] = useState(false)


    const validateName = (value) => {
        if (!value) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        return ''
    }

    const validateEmail = (value) => {
        if (!value) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Invalid email format'
        return ''
    }

    const validateAge = (value) => {
        if (!value) return 'Age is required'
        if (Number(value) < 18) return 'Age must be at least 18'
        return ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameErr = validateName(name)
        const emailErr = validateEmail(email)
        const ageErr = validateAge(age)

        setNameError(nameErr)
        setEmailError(emailErr)
        setAgeError(ageErr)

        if (!nameErr && !emailErr && !ageErr) {
            setSuccess(true)
            setName('')
            setEmail('')
            setAge('')
        } else {
            setSuccess(false)
        }



    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Register form</h2>

            <input type="text" placeholder='Name' value={name} onChange={(e)=>{
                const value = e.target.value;
                setName(value)
                setNameError(validateName(value))
            }}/>
            {nameError && <p style={{color: 'red'}}>{nameError}</p>}


            <input type="email" placeholder='Email' value={email} onChange={(e)=>{
                const value = e.target.value;
                setEmail(value)
                setEmailError(validateEmail(value))
            }}/>
            {emailError && <p style={{color: 'red'}}>{emailError}</p>}


            <input type="number" placeholder='Your age' value={age} onChange={(e)=>{
                const value = e.target.value;
                setAge(value)
                setAgeError(validateAge(value))
            }}/>
            {ageError && <p style={{color: 'red'}}>{ageError}</p>}

            <button type='submit'>Register</button>

            {success && <p style={{color: 'green'}}>Registration successful!</p>}

        </form>
    )
}


export default RegistrationForm
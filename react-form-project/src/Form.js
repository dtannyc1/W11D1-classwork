import { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [signedUp, setSignedUp] = useState('');

    const [errorMessages, setErrorMessages] = useState([]);

    const validate = () => {
        let errors = [];
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if (name.length === 0) {
            errors.push("Name cannot be empty")
        }
        if ( !email.match(emailRegex) || email.length === 0 ){
            errors.push("Must enter a valid email address")
        }
        if ( phoneNumber && !phoneNumber.match()) {
            errors.push("Invalid phone number")
        }
        if ( phoneNumber && !phoneType ){
            errors.push("Must select phone type")
        }
        if ( bio.length > 280 ){
            errors.push("Bio cannot have more than 280 characters")
        }

        return errors;
    }

    return (
        <form>
            <input type="text" placeholder="Name" value={name} onChange={}/>
            <br/>

            <input type="text" placeholder="Email" value={email} onChange={}/>
            <br/>

            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={}/>
            <br/>

            <select value={phoneType} onChange={}>
                <option disabled>Phone Number</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Mobile">Mobile</option>
            </select>
            <br/>

            <label>
                <input type="radio" value="instructor" checked={staff === "instructor"} onChange={}/>Instructor
            </label>
            <label>
                <input type="radio" value="student" checked={staff === "student"} onChange={}/>Student
            </label>
            <br/>

            <label>Bio:
                <textarea placeholder="Bio" value={bio} onChange={}/>
            </label>
            <br/>

            <label>Sign up for Email Notifications?
            <input type="checkbox" checked={signedUp} onChange={}/>
            </label>

            <button>Submit</button>
        </form>
    )
};

import { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    const [errorMessages, setErrorMessages] = useState([]);

    const validate = () => {
        let errors = [];
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if (name.length === 0) {
            errors.push("Name cannot be empty")
        }
        if (!email.match(emailRegex) || email.length === 0) {
            errors.push("Must enter a valid email address")
        }
        if (phoneNumber && !phoneNumber.match(phoneRegex)) {
            errors.push("Invalid phone number")
        }
        if (phoneNumber && !phoneType) {
            errors.push("Must select phone type")
        }
        if (bio.length > 280) {
            errors.push("Bio cannot have more than 280 characters")
        }

        return errors;
    }

    const handleChange = (field) => {
        return (e) => {
            switch (field) {
                case "name":
                    setName(e.target.value);
                    break;
                case "email":
                    setEmail(e.target.value);
                    break;
                case "phoneNumber":
                    setPhoneNumber(e.target.value);
                    break;
                case "phoneType":
                    setPhoneType(e.target.value);
                    break;
                case "staff":
                    setStaff(e.target.value);
                    break;
                case "bio":
                    setBio(e.target.value);
                    break;
                case "signedUp":
                    setSignedUp(e.target.checked);
                    break;

            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();
        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            const submittedData = { name, email, phoneNumber, phoneType, staff, bio, signedUp };
            console.log(submittedData);
        }

    }

    const showErrors = () => {
        if (errorMessages.length === 0) return null;
        console.log(errorMessages);
        return (
            <ul>
                {errorMessages.map((error, i) => {
                    return <li key={i}>{error}</li>
                })}
            </ul>
        )
    }

    return (
        <div>
            {showErrors()}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={handleChange("name")} />
                <br />
                <input type="text" placeholder="Email" value={email} onChange={handleChange("email")} />
                <br />
                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phoneNumber")} />
                <br />
                <select value={phoneType} onChange={handleChange("phoneType")}>
                    <option disabled value="">Phone Type</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <br />
                <label>
                    <input type="radio" value="instructor" checked={staff === "instructor"} onChange={handleChange("staff")} />Instructor
                </label>
                <label>
                    <input type="radio" value="student" checked={staff === "student"} onChange={handleChange("staff")} />Student
                </label>
                <br />
                <label>Bio:
                    <textarea placeholder="Bio" value={bio} onChange={handleChange("bio")} />
                </label>
                <br />
                <label>Sign up for Email Notifications?
                    <input type="checkbox" value={signedUp} checked={signedUp} onChange={handleChange("signedUp")} />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form;
import { useState } from "react";
//import ReactDOM from "react-dom";
import './LoginPage.css'

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info Database
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === email.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const renderForm = (
        <div className="form">
            <form>
                <div>
                    <input type="email" name="email" required className="Email" placeholder="Email"/>
                    {renderErrorMessage("email")}
                </div>
                <div>
                    <input type="password" name="pass" required className="Password" placeholder="Password"/>
                    {renderErrorMessage("pass")}
                </div>
                <button onClick={handleSubmit} className="Rectangle-14">Log in</button>
            </form>
        </div>
    );

    return (
        <div className='LoginPage_LoginPage'>
            <div className='Rectangle15' />
            <div className='WelcomeBack'>Hi, Welcome Back!</div>
            <div className='LoginMessage'>Please put your login credentials below to<br />start using the chatbot</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            <div className='Rectangle14' />
            <span className='DonthaveanaccountSignupforfree'>Don’t have an account? Sign up for free</span>
        </div>

    )
}

export default Login
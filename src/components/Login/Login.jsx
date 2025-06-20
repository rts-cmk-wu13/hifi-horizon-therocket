import { Form } from 'react-router';
//import { useAuth } from '../../AutoContext.jsx';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';


export default function CreateAccount() {

    const [error, setError] = useState(null);
    // const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    async function handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.delete('repeatpassword'); // Remove repeat password from form data
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const response = await fetch('http://localhost:4000/register', {

            // const response = await fetch('https://hifi-api-pzft.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
            // Handle error, e.g., show a message to the user
            //throw new Error('Login failed');
            setError(result.message || 'Signup failed');
            console.error('Signup failed:', result);
            return;
        }
        // login(result.accessToken);
        navigate(from, { replace: true }); // Redirect to the previous page or home

    }

    return (
        <div className="signupcontainer">
            <h2>Create New Customer Account</h2>
            <Form onSubmit={handleLogin}>
                <div className="signupcontainer__form-group">
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" id="fullname" name="fullname" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="address2">Address - line 2</label>
                    <input type="text" id="address2" name="address2" />
                </div>

                <div className="signupcontainer__form-group--line">
                    <div className="signupcontainer__form-group">
                         <label htmlFor="zipcode">Zip-code</label>
                        <input type="text" id="zipcode" name="zipcode" required />
                    </div>
                    <div className="signupcontainer__form-group">
                        <label htmlFor="city">city</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                </div>

                <div className="signupcontainer__form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="phone">Phone no</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="repeatpassword">Repeat password</label>
                    <input type="text" id="repeatpassword" name="repeatpassword" required />
                </div>
                <div className="signupcontainer__form-group signupcontainer__form-group--checkbox">
                    <input type="checkbox" id="byusing" name="byusing" required />
                    <label htmlFor="byusing">By using this form you agree with the storage and handling of your data by this website. *</label>
                    </div>
                <div className="signupcontainer__form-group signupcontainer__form-group--checkbox">
                    <input type="checkbox" id="accept" name="accept" required />
                    <label htmlFor="accept">Accept marketing from HiFi Horizon (newsletter and discount offers by email). *</label>
                    </div>

                {error && <div className="error-message">{error}</div>}
                <button type="submit">Create an account</button>
            </Form>
        </div>
    )
}

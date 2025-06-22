import { Form } from 'react-router';
import { useAuth } from '../../AutoContext.jsx';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';


export default function LoginToAccount() {

    const [error, setError] = useState(null);
    //const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    async function handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.delete('repeatpassword'); // Remove repeat password from form data
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const response = await fetch('http://localhost:4000/login', {

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
            setError(result.message || 'Login failed');
            console.error('Login failed:', result);
            return;
        }
        login(result.accessToken);
        navigate(from, { replace: true }); // Redirect to the previous page or home

    }

    return (
        <>
        <div className="signupcontainer">
            <h2>Registered Customers</h2>
            <p>If you have an account, sign in with your email address.</p>
            <Form onSubmit={handleLogin}>
                <div className="signupcontainer__form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" required />
                </div>
                <div className="signupcontainer__form-group">
                  
                    <input type="checkbox" id="rememberme" name="rememberme"  />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Sign in</button>
            </Form>
            <p>Forgot your password?</p>
        </div>
         <div className="newcustomer">
            <h2>New Customers</h2>
            <p>Creating an account has many benefits: check out faster, track orders and more.</p>
            <button onClick={() => navigate('/register')}>Create an account</button>
       </div>
       </>
    )
}

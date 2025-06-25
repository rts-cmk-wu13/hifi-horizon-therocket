import { Form } from 'react-router';
//import { useAuth } from '../../AutoContext.jsx';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { useActionData } from 'react-router';


export default function CreateAccount() {
    const errors = useActionData();

    return (
        <div className="signupcontainer">
            <h2>Create New Customer Account</h2>
            <Form method="post">
                <div className="signupcontainer__form-group">
                    <label htmlFor="fullname">Full name</label>
                    <p>{errors && errors?.fullname?.errors[0]}</p>
                    <input type="text" id="fullname" name="fullname" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="address">Address</label>
                    <p>{errors && errors?.address?.errors[0]}</p>
                    <input type="text" id="address" name="address" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="address2">Address - line 2</label>
                   <p>{errors && errors?.address2?.errors[0]}</p>
                    <input type="text" id="address2" name="address2" />
                </div>

                <div className="signupcontainer__form-group--line">
                    <div className="signupcontainer__form-group">
                         <label htmlFor="zipcode">Zip-code</label>
                         <p>{errors && errors?.zipcode?.errors[0]}</p>
                         <input type="text" id="zipcode" name="zipcode" required />
                    </div>
                    <div className="signupcontainer__form-group">
                        <label htmlFor="city">city</label>
                        <p>{errors && errors?.city?.errors[0]}</p>
                        <input type="text" id="city" name="city" required />
                    </div>
                </div>

                <div className="signupcontainer__form-group">
                    <label htmlFor="country">Country</label>
                    <p>{errors && errors?.country?.errors[0]}</p>
                    <input type="text" id="country" name="country" />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="phone">Phone no</label>
                    <p>{errors && errors?.phone?.errors[0]}</p>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="email">Email</label>
                    <p>{errors && errors?.email?.errors[0]}</p>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="password">Password</label>
                    <p>{errors && errors?.password?.errors[0]}</p>
                    <input type="text" id="password" name="password" required />
                </div>
                <div className="signupcontainer__form-group">
                    <label htmlFor="repeatpassword">Repeat password</label>
                    <p>{errors && errors?.repeatpassword?.errors[0]}</p>
                    <input type="text" id="repeatpassword" name="repeatpassword" required />
                </div>
                <div className="signupcontainer__form-group signupcontainer__form-group--checkbox">
                    <input type="checkbox" id="byusing" name="byusing" required />
                    <p>{errors && errors?.byusing?.errors[0]}</p>
                    <label htmlFor="byusing">By using this form you agree with the storage and handling of your data by this website. *</label>
                    </div>
                <div className="signupcontainer__form-group signupcontainer__form-group--checkbox">
                    <input type="checkbox" id="accept" name="accept" required />
                    <p>{errors && errors?.accept?.errors[0]}</p>
                    <label htmlFor="accept">Accept marketing from HiFi Horizon (newsletter and discount offers by email). *</label>
                    </div>

                <button type="submit">Create an account</button>
            </Form>
        </div>
    )
}
// {error && <div className="error-message">{error}</div>}

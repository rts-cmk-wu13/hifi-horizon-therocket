
import { Form, useActionData } from "react-router";

export default function ContactForm() {
    const errors = useActionData();

    return (
        <>
        

        <Form method="post"  className="contactform">
            <div className="form-group">
                <label htmlFor="name" className="contactform__label">Full name:</label>
                <p>{errors && errors?.name?.errors[0]}</p>

                <input type="text" name="name" placeholder="Name" className="contactform__input"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <p>{errors && errors?.email?.errors[0]}</p>

                <input type="email" name="email" placeholder="Email" className="contactform__input" />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <p>{errors && errors?.subject?.errors[0]}</p>

                <input type="text" name="subject" placeholder="Subject" className="contactform__input"/>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <p>{errors && errors?.message?.errors[0]}</p>
                <textarea type="message" name="message" placeholder="Email" className="contactform__message"/>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}
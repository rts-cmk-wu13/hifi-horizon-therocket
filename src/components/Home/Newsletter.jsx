import validateNewsletterForm from './newsletterValidation';

export default function Newsletter() {
  return (
    <>
      <section className="newsletter">
        <h2>Sign up for our newsletter</h2>
        <p>
          Subscribing to our newsletter secures you up to date information about
          HiFi Horizons latest updates and offers.
        </p>
        <form onSubmit={validateNewsletterForm} noValidate>
          <input type="email" name="email" required />
          <span className="error"></span>
          <button type="submit">Sign up</button>
        </form>
      </section>
      <dialog className="dialog" id="contact__dialog">
      <p>You have subscribed to our newsletter</p>
      <p>Thank you</p>
      </dialog>
    </>
  );
}

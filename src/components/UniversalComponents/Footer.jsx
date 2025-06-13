import { Link } from "react-router";
import phoneimg from "/phone-solid_1.png";
import twitterimg from "/twitter.png";
import facebookimg from "/facebook.png";
import instagramimg from "/instagram.png";
import youtubeimg from "/youtube.png";
import stribe  from "/stribe.png";
import mastercard from "/mastercard.png";
import visa from "/visa.png";

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <section className="footer__navigation">
                    <ul className="footer__navigationItems">
                        <li><Link to="Home" className="footer__navigationItem">Home</Link></li>
                        <li><Link to="Shop" className="footer__navigationItem">Shop</Link></li>
                        <li><Link to="AboutUs" className="footer__navigationItem">About</Link></li>
                    </ul>
                </section>

                <section className="footer__moreinfo">
                    <ul className="footer__moreinfoItems">
                        <li><Link to="moreinfo" className="footer__moreinfoItem">Returns & Refunds</Link></li>
                        <li><Link to="moreinfo" className="footer__moreinfoItem">Delivery</Link></li>
                        <li><Link to="moreinfo" className="footer__moreinfoItem">Privacy Policy</Link></li>
                        <li><Link to="moreinfo" className="footer__moreinfoItem">Terms & Conditions</Link></li>
                    </ul>
                </section>

                <section className="footer__contact">
                    <h3 className="footer__contactTitle">Contact</h3>
                    <ul className="footer__contactItems">
                        <li><Link to="contact" className="footer__contactItem">
                            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                            <p><img src={phoneimg} />0131 556 7901</p></Link></li>
                        <li><Link to="contact" className="footer__contactItem">
                            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                            <p><img src={phoneimg} />01324 629 011</p></Link></li>
                    </ul>
                </section>

                <section className="footer__socials">
                    <ul className="footer__socialsItems">
                        <li><a href="https://www.facebook.com/hifihorizon" className="footer__socialsItem"><img src={facebookimg} alt="" /></a></li>
                        <li><a href="https://x.com/" className="footer__socialsItem"><img src={twitterimg} alt="" /></a></li>
                        <li><a href="https://www.instagram.com/hifihorizon/" className="footer__socialsItem"><img src={instagramimg} alt="" /></a></li>
                        <li><a href="https://www.instagram.com/hifihorizon/" className="footer__socialsItem"><img src={youtubeimg} alt="" /></a></li>
                    </ul>
                </section>
                <hr></hr>
                <div><img src={stribe} alt="" /><img src={mastercard} alt="" /><img src={visa} alt="" /></div>
                <small className="footer__copyright">HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</small>
            </footer>
        </>
    )
}
import { Link } from "react-router";
import phoneimg from "/phone-solid_1.png";
import twitterimg from "/twitter.png";
import facebookimg from "/facebook.png";
import instagramimg from "/instagram.png";
import youtubeimg from "/youtube.png";
import stribe from "/stribe.png";
import mastercard from "/mastercard.png";
import visa from "/visa.png";
import "/src/styles/styles.scss";
export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer__primary">
                    <section className="footer__navigation">

                        <p className="footer__para"><Link to="/" className="footer__navigationItem">Home</Link></p>
                        <p className="footer__para"><Link to="Shop" className="footer__navigationItem">Shop</Link></p>
                        <p className="footer__para"><Link to="AboutUs" className="footer__navigationItem">About</Link></p>

                    </section>

                    <section className="footer__moreinfo">
                        <div className="footer__moreinfoItems">
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Returns & Refunds</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Delivery</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Privacy Policy</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Terms & Conditions</Link></p>
                        </div>
                    </section>

                    <section className="footer__contact">
                        <h3 className="footer__contactTitle">Contact</h3>
                        <div className="footer__contactItems">
                            <div className="footer__para"><Link to="contact" className="footer__contactItem">
                                <p className="footer__para">2 Joppa Rd, Edinburgh, EH15 2EU</p>
                                <p className="footer__para"><img src={phoneimg} /><span>0131 556 7901</span></p></Link></div>
                            <div className="footer__para"><Link to="contact" className="footer__contactItem">
                                <p className="footer__para">2 Joppa Rd, Edinburgh, EH15 2EU</p>
                                <p className="footer__para"><img src={phoneimg} />01324 629 011</p></Link></div>
                        </div>
                        <section className="footer__socials">
                            <div className="footer__socialsItems">
                                <a href="https://www.facebook.com/hifihorizon" className="footer__socialsItem"><img src={facebookimg} alt="" /></a>
                                <a href="https://x.com/" className="footer__socialsItem"><img src={twitterimg} alt="" /></a>
                                <a href="https://www.instagram.com/hifihorizon/" className="footer__socialsItem"><img src={instagramimg} alt="" /></a>
                                <a href="https://www.instagram.com/hifihorizon/" className="footer__socialsItem"><img src={youtubeimg} alt="" /></a>
                            </div>
                        </section>
                    </section>


                </div>
                <hr></hr>
                <div className="footer__secondary">
                    <div><img src={stribe} alt="" /><img src={mastercard} alt="" /><img src={visa} alt="" /></div>
                    <small className="footer__copyright">HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</small>
                </div>
            </footer>
        </>
    )
}
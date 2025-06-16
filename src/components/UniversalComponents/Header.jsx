import { Link } from "react-router";

export default function Header() {
    return (
        <>
        
        <header className="header">
            <section className="header__logo">
                {/* <img src="" alt="" className="header__logoImg" /> */}
            </section>

            <section className="header__navigation">
                <Link to="/list" className="header__navigationItem">Shop</Link>
                <Link to="/about" className="header__navigationItem">About us</Link>
                <Link to="/contact" className="header__navigationItem">Contact us</Link>
            </section>
        </header>
        </>
    )
}
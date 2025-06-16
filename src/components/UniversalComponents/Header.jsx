import { Link, useNavigate } from "react-router";
import HifiLogo from "./HifiLogo";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";

export default function Header() {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("");


    const handleSearch =  (e) => {
        e.preventDefault()
        navigate('/list')
        setSearchValue("")
    }

    return (
        <>
        
        <header className="header">
            <section className="header__left">
                <section className="header__logo">
                <HifiLogo/>
                </section>

                <section className="header__navigation">
                    <Link to="/list" className="header__navigation-item">Shop</Link>
                    <Link to="/about" className="header__navigation-item">About us</Link>
                    <Link to="/contact" className="header__navigation-item">Contact us</Link>
                </section>
            </section>

            <section className="header__right">
                <form onSubmit={handleSearch} className="header__search">
                    <div className="header__search-wrapper">
                    <input 
                    type="text" 
                    placeholder="Search product..." 
                    className="header__search-input"
                    value={searchValue}
                    onChange={(e)=> setSearchValue(e.target.value)}
                    />
                    <FaSearch className="header__search-icon"/>
                    </div>
                </form>
                <section className="header__link-icons">
                    <Link to="/user">
                    <FaUser className="header__profile-icon"/>
                    </Link>
                    <Link to="/basket">
                    <MdShoppingCart className="header__basket-icon"/>
                    </Link>
                </section>
                
            </section>
        </header>
        </>
    )
}
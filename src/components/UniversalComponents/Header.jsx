import { Link, useNavigate } from "react-router";
import HifiLogo from "./HifiLogo";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/list');
    setSearchValue("");
  };

  const categories = [
    "CD Players",
    "DVD Players",
    "Preamps",
    "Speakers",
    "Turntables",
    "Integrated Amplifiers",
    "Power Amplifiers",
    "Tube Amplifiers"
  ];

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      const dropdown = document.querySelector(".header__navigation-dropdown");
      if (dropdown && !dropdown.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <section className="header__left">
        <section className="header__logo">
          <Link to="/" className="header__logo-link">
            <HifiLogo />
          </Link>
        </section>


        <section className="header__navigation">
          <div 
            className="header__navigation-dropdown" 
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            <span className="header__navigation-item">Shop</span>
            {isDropdownOpen && (
              <div className="dropdown__menu">
                <nav className="dropdown">
                  <h2 className="dropdown__title">Browse Categories</h2>
                  <ul className="dropdown__content">
                    {categories.map((item, index) => (
                      <li key={index}>
                        <Link to="/not-found">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
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
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FaSearch className="header__search-icon" />
          </div>
        </form>
        <section className="header__link-icons">
          <Link to="/login">
            <FaUser className="header__profile-icon" />
          </Link>
          <Link to="/basket">
            <MdShoppingCart className="header__basket-icon" />
          </Link>
        </section>
      </section>
    </header>
  );
}


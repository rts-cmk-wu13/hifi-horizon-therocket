export default function DropdownMenu () {
  return (
    <>
      <div className="dropdown__menu">
        <nav className="dropdown">
          <button className="dropBtn">Dropdown</button>
          <h2>Browse Categories</h2>
          <ul className="dropdown__content">
            <li><a href="#">CD Players</a></li>
            <li><a href="#">DVD Players</a></li>
            <li><a href="#">Preamps</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Turntables</a></li>
            <li><a href="#">Integrated Amplifiers</a></li>
            <li><a href="#">Power Amplifiers</a></li>
            <li><a href="#">Tube Amplifiers</a></li>
          </ul>
        </nav>
      </div>
  
    </>
  );
}
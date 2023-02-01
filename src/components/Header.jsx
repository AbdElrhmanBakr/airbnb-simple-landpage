import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="React-Logo" className="nav--logo" />
      </nav>
    </header>
  );
}

export default Header;
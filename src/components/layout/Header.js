import logo from './logo.svg';

function Header() {
  return (
    <div>
        <img src={logo} style={ { width: "100px" } } /> | Home | Projects | About
    </div>
  );
}

export default Header;

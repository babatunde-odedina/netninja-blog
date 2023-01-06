import { Link } from 'react-router-dom';
import logo from './assets/DSFJKG.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <img src={logo} alt='' />
      </h1>
      <div className='links'>
        <Link to='/'>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;

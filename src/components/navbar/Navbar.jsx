import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Games</Link>
        </li>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
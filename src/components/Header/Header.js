import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.product}>
      <ul>
        <Link to="/"><li>Product Page</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/authentication"><li>Login/signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;

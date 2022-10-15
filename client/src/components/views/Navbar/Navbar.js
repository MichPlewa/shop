import styles from './Navbar.module.scss';
import { Navbar } from 'react-bootstrap';

const Nav = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo}>Logo</li>
    </ul>
  );
};

export default Nav;

import styles from './Navbar.module.scss';

const Nav = () => {
  return (
    <div className={`row ${styles.topnav}`}>
      <div className={` col-2`}>DiceMania</div>
      <div className="col-8">
        <input type="text" className={styles.form} placeholder="Search" />
      </div>
      <div className="col-1">
        <a href="#contact" className="col-3">
          Cart
        </a>
      </div>
    </div>
  );
};

export default Nav;

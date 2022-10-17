import styles from './Navbar.module.scss';

const Nav = () => {
  return (
    <div>
      <div className={`row ${styles.topnav}`}>
        <div className="col-2">
          <a href="/">DiceMania</a>
        </div>
        <div className="col-8">
          <input type="text" className={styles.form} placeholder="Search" />
        </div>
        <div className="col-1">
          <a href="products">Products</a>
        </div>
        <div className="col-1">
          <a href="cart" className="col-3">
            Cart
          </a>
        </div>
      </div>
      <div className={styles.intro}>
        <img
          className={`col-12 ${styles.img}`}
          src="../../../uploads/dice-ranking-list-featured.png"
        />
      </div>
    </div>
  );
};

export default Nav;

import styles from './Navbar.module.scss';

const Nav = () => {
  return (
    <div>
      <div className={`row ${styles.topnav}`}>
        <div className="col-1">
          <a href="/">DiceMania</a>
        </div>
        <div className="col-8"></div>
        <div className="col-1">
          <a href="login">Login</a>
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
    </div>
  );
};

export default Nav;

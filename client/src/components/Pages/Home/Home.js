import styles from './Home.module.scss';
import Halo from '../../views/Halo/Halo';

const Home = () => {
  return (
    <div className={styles.home}>
      <Halo />
    </div>
  );
};

export default Home;

import styles from './Home.module.scss';
import Halo from '../../views/Halo/Halo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProducts } from '../../../redux/productRedux';
import { useEffect } from 'react';

const Home = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  console.log(products);
  return (
    <div className={styles.home}>
      <Halo />
    </div>
  );
};

export default Home;

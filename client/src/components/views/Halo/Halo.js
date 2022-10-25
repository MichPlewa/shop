import styles from './Halo.module.scss';

const Halo = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className={styles.content}>
        Pellentesque dignissim elit at massa ultrices cursus. Sed justo justo,
        mollis sed tempus sit amet, consequat quis elit. Phasellus fringilla
        vitae neque non euismod. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Sed sed pulvinar ante, non
        sodales nunc. Morbi vulputate rhoncus enim, et blandit diam commodo id.
        Donec interdum consectetur leo ac maximus. Aenean iaculis rutrum dictum.
        Vivamus interdum erat lacus, nec fermentum quam bibendum sit amet. In
        nisl ex, faucibus ac augue ac, vehicula varius quam.
      </div>
    </div>
  );
};

export default Halo;

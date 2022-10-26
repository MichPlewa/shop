import { Form, Button } from 'react-bootstrap';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <div>
      <Form className={styles.form}>
        <Form.Group>
          <Form.Label>Login:</Form.Label>
          <Form.Control type="text" placeholder="Login" />
          <Form.Label>Password:</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Button variant="secondary" type="submit" className={styles.btn}>
          Sing In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;

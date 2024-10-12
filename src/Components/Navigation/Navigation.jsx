import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/images/logo1.png" alt="do some coding logo" />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/college-programs">College Programs</Link></li> 
        <li><Link to="/feature">Feature</Link></li> {/* New Link to Feature page */}
      </ul>
    </nav>
  );
};

export default Navigation;

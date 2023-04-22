import {Link, Outlet} from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/displaying">displaying</Link>
        </li>
        <li>
          <Link to="/tutorial">tutorial</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

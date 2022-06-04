import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>City</h3>
      <div>
        <Link to="../">Back to lobby</Link>
      </div>
    </aside>
  );
};

export default Sidebar;

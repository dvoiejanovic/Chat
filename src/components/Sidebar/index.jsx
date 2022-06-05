import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
  const {roomName, members} = props;

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>{roomName}</h3>
      <div>
        {members.map((member) => (
          <div key={member.id}>
            <img src={member.avatarSrc} alt="avatar" className={styles.avatar} />
            {member.name}
          </div>
        ))}
      </div>
      <div>
        <Link to="../">Back to lobby</Link>
      </div>
    </aside>
  );
};

export default Sidebar;

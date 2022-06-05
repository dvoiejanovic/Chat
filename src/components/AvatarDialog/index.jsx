import { useState } from "react";
import { useDispatch } from 'react-redux';

import styles from "./AvatarDialog.module.scss";
import {setUser} from "../../redux/user-slice";
import {avatars} from "../../constants/avatars";


const AvatarDialog = (props) => {
  const { toggleDialog } = props;
  const [name, setName] = useState("");
  const [avatarId, setAvatarId] = useState(undefined);

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const selectAvatar = (id) => {
    setAvatarId(id);
  }

  const finish = () => {
    dispatch(setUser({name, avatarId}));
    toggleDialog(false);
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.dialog}>
        Pick your Avatar
        <section className={styles.avatarSection}>
          {avatars.map((avatar) => (
            <img
              key={avatar.id}
              src={avatar.source}
              alt="avatar"
              className={`${styles.avatar} ${avatarId === avatar.id && styles.selectedAvatar}`}
              onClick={() => selectAvatar(avatar.id)}
            />
          ))}
        </section>
        <section>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            type="text"
            maxLength={40}
            className={styles.input}
            value={name}
            onChange={handleNameChange}
          />
        </section>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.button}
            disabled={!avatarId || !name}
            onClick={finish}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDialog;

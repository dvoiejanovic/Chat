import { useState } from "react";

import styles from "./AvatarDialog.module.scss";
import macak from "../../assets/macak.jpg";
import pingvin from "../../assets/pingvin.jpg";
import prasac from "../../assets/prasac.jpg";
import zirafa from "../../assets/zirafa.jpg";
import { Avatars } from "../../constants/avatars";


const AvatarDialog = (props) => {
  const avatars = [
    {
      id: Avatars.CAT,
      source: macak,
    },
    {
      id: Avatars.GIRAFFE,
      source: zirafa,
    },
    {
      id: Avatars.PENGUIN,
      source: pingvin,
    },
    {
      id: Avatars.PIG,
      source: prasac,
    },
  ];

  const { toggleDialog } = props;
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const selectAvatar = (id) => {
    setSelectedAvatar(id);
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
              className={`${styles.avatar} ${selectedAvatar === avatar.id && styles.selectedAvatar}`}
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
            disabled={!selectedAvatar || !name}
            onClick={() => toggleDialog(false)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDialog;

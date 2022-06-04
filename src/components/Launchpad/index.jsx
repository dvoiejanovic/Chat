import { useState } from "react";
import AvatarDialog from "../AvatarDialog";
import styles from "./Launchpad.module.scss";
import city from "../../assets/city.jpg";
import nature from "../../assets/nature.jpg";
import { Link } from "react-router-dom";

const Launchpad = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <div className={styles.launchpad}>
      {isDialogOpen && <AvatarDialog toggleDialog={setIsDialogOpen} />}

      <div className={styles.roomPickerWrapper}>
        <h3 className={styles.heading}>Choose a room</h3>

        <div className={styles.roomPicker}>
          <Link to="nature">
            <img src={nature} className={styles.roomImage} alt="nature" />
          </Link>

          <Link to="city">
            <img src={city} className={styles.roomImage} alt="city" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;

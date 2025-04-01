import { AtSign } from "lucide-react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="User avatar" />
        <p className={styles.nameHeader}>{name}</p>
        <p className={styles.tag}>
          <AtSign />
          {tag}
        </p>

        <p className={styles.tag}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

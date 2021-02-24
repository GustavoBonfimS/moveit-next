import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GustavoBonfimS.png" alt="Gustavo Bonfim" />
      <div>
        <strong>Gustavo Bonfim</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

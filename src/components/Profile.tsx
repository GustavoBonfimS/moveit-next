import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GustavoBonfimS.png" alt="Gustavo Bonfim" />
      <div>
        <strong>Gustavo Bonfim</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}

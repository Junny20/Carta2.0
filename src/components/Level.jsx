import { useNavigate } from "react-router";
import "../pages/css/Level.css";

function Level({ name, flashcardsRead, flashcardsTested }) {
  const navigate = useNavigate();
  const baseXp = 100
  const totalXp = flashcardsRead * 5 + flashcardsTested * 10;
  let level = 0;

  const getXpForLevel = (lvl) => Math.floor(baseXp * Math.pow(lvl, 1.2));

  while (totalXp >= getXpForLevel(level + 1)) {
    level += 1;
  }

  const xpForCurrentLevel = getXpForLevel(level);
  const xpForNextLevel = getXpForLevel(level + 1);
  const xpInLevel = totalXp - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - xpForCurrentLevel;

  const progressPercent = Math.min((xpInLevel / xpNeeded) * 100, 100);

  return (
    <div className="level-clean-badge" onClick={() => navigate("/profile")}>
      <div className="level-info">
        <span className="level-name">{name}</span>
        <span className="level-number">Level {level}</span>
      </div>
      <div className="level-bar-wrapper" title={`${xpInLevel} / ${xpNeeded} XP`}>
        <div
          className="level-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default Level;

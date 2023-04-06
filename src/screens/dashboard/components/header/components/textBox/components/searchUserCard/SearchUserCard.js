import React, { useCallback } from "react";

import UserInfoCard from "../../../../../../../../components/userInfoCard";
import styles from "./SearchUserCard.module.css";

function SearchUserCard({ user, onCardClick }) {
  const handleCardClick = useCallback(() => {
    onCardClick(user.id);
  }, [onCardClick, user.id]);

  return (
    <button onClick={handleCardClick} className={styles.container}>
      <UserInfoCard user={user} key={user.id} showName={true} />
    </button>
  );
}

export default SearchUserCard;

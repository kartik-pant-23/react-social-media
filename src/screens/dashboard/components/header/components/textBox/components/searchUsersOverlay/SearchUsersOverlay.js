import React, { useMemo } from "react";
import PropTypes from "prop-types";
import _map from "lodash.map";

import Overlay from "../../../../../../../../components/overlay";
import SearchUserCard from "../searchUserCard";

function SearchUsersOverlay({
  isOverlayOpened,
  usersList,
  onSearchCardClicked,
  onOverlayClosed,
  showEmptyList,
}) {
  const emptyCardStyles = useMemo(
    () => ({
      width: "600px",
      maxWidth: "calc(100vw - 2rem)",
      padding: "0.5rem 1rem",
    }),
    []
  );

  const SearchedUsersList = useMemo(
    () => (
      <>
        {_map(usersList, (user) => (
          <SearchUserCard
            key={user.id}
            user={user}
            onCardClick={onSearchCardClicked}
          />
        ))}
        {showEmptyList && (
          <div style={emptyCardStyles}>
            Sorry.. no such user exists in the list!
          </div>
        )}
      </>
    ),
    [usersList, onSearchCardClicked, showEmptyList, emptyCardStyles]
  );

  return (
    <Overlay
      isOpen={isOverlayOpened}
      Content={SearchedUsersList}
      shouldCloseOnOverlayClicked={true}
      contentStyles={{ top: "1rem", maxHeight: "calc(100vh - 6rem)" }}
      overlayStyles={{ top: "4rem", height: "calc(100vh - 4rem)" }}
      onClose={onOverlayClosed}
    />
  );
}

SearchUsersOverlay.propTypes = {
  isOverlayOpened: PropTypes.bool.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSearchCardClicked: PropTypes.func.isRequired,
  onOverlayClosed: PropTypes.func.isRequired,
  showEmptyList: PropTypes.bool.isRequired,
};

export default SearchUsersOverlay;

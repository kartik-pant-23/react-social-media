import React, { useCallback, useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import _reject from "lodash.reject";
import _get from "lodash.get";
import _map from "lodash.map";
import _debounce from "lodash.debounce";

import Overlay from "../../../../../../components/overlay";
import SearchUserCard from "./components/searchUserCard";
import { filterUsersBySearchString } from "./TextBox.utils";
import styles from "./TextBox.module.css";

const usersSelector = createSelector(
  (state) => state.users,
  (userData) =>
    _reject(userData.users, ["id", _get(userData, ["currentUser", "id"])])
);

function TextBox() {
  const [isOverlayOpened, setIsOverlayOpened] = useState(false);
  const [query, setQuery] = useState("");

  const users = useSelector(usersSelector);
  const [searchedUsersList, setSearchedUsersList] = useState([]);

  const searchUser = useCallback(
    (searchQuery) => {
      console.log(searchQuery);
      let filteredUsers = [];
      if (searchQuery.trim().length > 0) {
        filteredUsers = filterUsersBySearchString(users, searchQuery.trim());
      }
      setSearchedUsersList(filteredUsers);
    },
    [users, setSearchedUsersList]
  );

  const debouncedSearch = useMemo(
    () => _debounce(searchUser, 300),
    [searchUser]
  );

  const handleOnOverlayOpened = useCallback(
    () => setIsOverlayOpened(true),
    [setIsOverlayOpened]
  );

  const handleOnOverlayClosed = useCallback(
    () => setIsOverlayOpened(false),
    [setIsOverlayOpened]
  );

  const handleSearchBoxOnFocus = useCallback(() => {
    if (searchedUsersList.length) handleOnOverlayOpened();
  }, [searchedUsersList.length, handleOnOverlayOpened]);

  useEffect(() => {
    if (searchedUsersList.length) handleOnOverlayOpened();
    else handleOnOverlayClosed();
  }, [searchedUsersList.length, handleOnOverlayOpened, handleOnOverlayClosed]);

  const handleOnQueryChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setQuery(newValue);
      debouncedSearch(newValue);
    },
    [setQuery, debouncedSearch]
  );

  const navigate = useNavigate();
  const handleSearchCardClicked = useCallback(
    (userId) => {
      navigate(`/chat/${userId}`);
    },
    [navigate]
  );
  const SearchedUsersList = useMemo(
    () => (
      <>
        {_map(searchedUsersList, (user) => (
          <SearchUserCard
            key={user.id}
            user={user}
            onCardClick={handleSearchCardClicked}
          />
        ))}
      </>
    ),
    [searchedUsersList, handleSearchCardClicked]
  );

  return (
    <>
      <input
        className={styles.searchBox}
        type='text'
        placeholder='Search users'
        value={query}
        onChange={handleOnQueryChange}
        onFocus={handleSearchBoxOnFocus}
      />
      <Overlay
        isOpen={isOverlayOpened}
        Content={SearchedUsersList}
        shouldCloseOnOverlayClicked={true}
        contentStyles={{ top: "1rem" }}
        overlayStyles={{ top: "4rem", height: "calc(100vh - 4rem)" }}
        onClose={handleOnOverlayClosed}
      />
    </>
  );
}

export default TextBox;

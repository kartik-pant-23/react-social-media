import React, { useCallback, useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import _reject from "lodash.reject";
import _get from "lodash.get";
import _debounce from "lodash.debounce";

import SearchUsersOverlay from "./components/searchUsersOverlay";
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
  const [showEmptyList, setShowEmptyList] = useState(false);

  const users = useSelector(usersSelector);
  const [searchedUsersList, setSearchedUsersList] = useState([]);

  const searchUser = useCallback(
    (searchQuery) => {
      let filteredUsers = [];
      if (searchQuery.trim().length > 0) {
        filteredUsers = filterUsersBySearchString(users, searchQuery.trim());
      }
      setSearchedUsersList(filteredUsers);
      setShowEmptyList(!filteredUsers.length && searchQuery.length > 0);
    },
    [users, setSearchedUsersList, setShowEmptyList]
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
    if (searchedUsersList.length || showEmptyList) handleOnOverlayOpened();
    else handleOnOverlayClosed();
  }, [
    searchedUsersList.length,
    showEmptyList,
    handleOnOverlayOpened,
    handleOnOverlayClosed,
  ]);

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
      setQuery("");
      setSearchedUsersList([]);
      navigate(`/chat/${userId}`);
    },
    [navigate]
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
      <SearchUsersOverlay
        isOverlayOpened={isOverlayOpened}
        onOverlayClosed={handleOnOverlayClosed}
        usersList={searchedUsersList}
        onSearchCardClicked={handleSearchCardClicked}
        showEmptyList={showEmptyList}
      />
    </>
  );
}

export default TextBox;

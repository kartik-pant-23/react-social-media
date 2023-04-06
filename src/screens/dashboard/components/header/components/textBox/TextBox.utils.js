import _filter from "lodash.filter";
import _get from "lodash.get";
import _includes from "lodash.includes";
import _lowerCase from "lodash.lowercase";

export const filterUsersBySearchString = (users, query) => {
  const lowerCaseSearchQuery = _lowerCase(query);
  return _filter(users, (user) => {
    return (
      _includes(_lowerCase(_get(user, "name")), lowerCaseSearchQuery) ||
      _includes(_lowerCase(_get(user, "username")), lowerCaseSearchQuery) ||
      _includes(_lowerCase(_get(user, "email")), lowerCaseSearchQuery)
    );
  });
};

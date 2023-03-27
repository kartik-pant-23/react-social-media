import _split from "lodash.split";
import _reduce from "lodash.reduce";

export const getInitials = (userName) => {
  let splitName = _split(userName, " ", 2);
  return _reduce(
    splitName,
    (initials, namePart) => {
      return initials + namePart[0];
    },
    ""
  );
};

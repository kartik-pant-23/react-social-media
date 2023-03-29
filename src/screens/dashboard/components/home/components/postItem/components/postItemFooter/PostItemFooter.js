import React from "react";
import PropTypes from "prop-types";

import styles from "./PostItemFooter.module.css";

function PostItemFooter({ post }) {
  return <div className={styles.container}>{post.caption}</div>;
}

PostItemFooter.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    file: PropTypes.object.isRequired,
    caption: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItemFooter;

import React from "react";
import PropTypes from "prop-types";

import styles from "./PostItemFooter.module.css";

function PostItemFooter({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.actionContainer}>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      {post.caption}
    </div>
  );
}

PostItemFooter.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default PostItemFooter;

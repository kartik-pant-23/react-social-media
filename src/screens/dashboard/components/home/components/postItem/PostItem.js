import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import PostItemHeader from "../../../../../../components/userInfoCard";
import PostItemFooter from "./components/postItemFooter";
import styles from "./PostItem.module.css";

function PostItem({ post }) {
  const users = useSelector((state) => state.users.users);
  const [postImage, setPostImage] = useState(null);

  const CardHeader = useMemo(() => {
    const user = users.find((user) => user.id === post.authorId);
    return <PostItemHeader user={user} />;
  }, [users, post]);

  useEffect(() => {
    if (!post.file) {
      setPostImage(null);
      return;
    }

    const objectURL = URL.createObjectURL(post.file);
    setPostImage(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [post.file]);

  const CardImage = useMemo(() => {
    if (postImage) {
      return <img className={styles.cardImage} src={postImage} alt='Post' />;
    }
  }, [postImage]);

  return (
    <div className={styles.container}>
      {CardHeader}
      {CardImage}
      <PostItemFooter post={post} />
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    file: PropTypes.object.isRequired,
    caption: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default PostItem;

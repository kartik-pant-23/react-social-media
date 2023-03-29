import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import _map from "lodash.map";

import PostItem from "./components/postItem";
import styles from "./Home.module.css";

function Home() {
  const posts = useSelector((state) => state.posts.posts);

  const PostsList = useMemo(() => {
    return _map(posts, (post) => <PostItem key={post.id} post={post} />);
  }, [posts]);

  return <div className={styles.container}>{PostsList}</div>;
}

export default Home;

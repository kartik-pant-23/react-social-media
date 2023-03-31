import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  updateDraftPost,
  resetDraftPost,
  createPost,
} from "../../../../actions/Post.actions";
import ErrorCard from "../../../../components/errorCard";
import styles from "./CreatePost.module.css";

function CreatePost() {
  const draftPost = useSelector((state) => state.posts.draftPost);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!draftPost.file) {
      setPreview(null);
      return;
    }
    const objectURL = URL.createObjectURL(draftPost.file);
    setPreview(objectURL);
    return () => URL.revokeObjectURL(objectURL);
  }, [draftPost.file]);

  useEffect(() => {
    if (draftPost.uploadStatus.uploaded) {
      dispatch(resetDraftPost());
      navigate("/home");
    }
  }, [dispatch, navigate, draftPost.uploadStatus.uploaded]);

  const handleOnFileChange = useCallback(
    (event) => {
      dispatch(
        updateDraftPost({
          ...draftPost,
          file: event.target.files[0],
        })
      );
    },
    [dispatch, draftPost]
  );

  const ChooseImageContainer = useMemo(
    () => (
      <div className={styles.imageContainer}>
        {preview && (
          <img
            className={styles.previewImage}
            src={preview}
            alt='Selected file'
          />
        )}
        <input type='file' accept='image/*' onChange={handleOnFileChange} />
      </div>
    ),
    [preview, handleOnFileChange]
  );

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const post = {
        ...draftPost,
        authorId: currentUser.id,
      };
      dispatch(createPost(post));
    },
    [dispatch, draftPost, currentUser]
  );

  const handleCaptionChange = useCallback(
    (event) =>
      dispatch(
        updateDraftPost({
          ...draftPost,
          caption: event.target.value,
        })
      ),
    [dispatch, draftPost]
  );

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {ChooseImageContainer}
        {preview && (
          <form className={styles.postDetails} onSubmit={handleFormSubmit}>
            <textarea
              className={styles.captionTextArea}
              cols='30'
              rows='10'
              placeholder='Enter caption here...'
              value={draftPost.caption}
              onChange={handleCaptionChange}
              required
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
      {draftPost.uploadStatus.loading && <div>Creating post...</div>}
      {draftPost.uploadStatus.error && (
        <ErrorCard message={draftPost.uploadStatus.error} />
      )}
    </div>
  );
}

export default CreatePost;

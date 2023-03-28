import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from "./CreatePost.module.css";

function CreatePost() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectURL = URL.createObjectURL(file);
    setPreview(objectURL);
    return () => URL.revokeObjectURL(objectURL);
  }, [file]);

  const handleOnFileChange = useCallback((event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }, []);

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

  const clearForm = useCallback(() => {
    setFile(null);
    setCaption("");
  }, []);

  /**
   * @todo add functionality of creating the posts
   */
  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const post = {
        file,
        caption,
      };
      console.log(post);
      clearForm();
    },
    [file, caption, clearForm]
  );

  const handleCaptionChange = useCallback(
    (event) => setCaption(event.target.value),
    []
  );

  return (
    <div className={styles.mainContent}>
      {ChooseImageContainer}
      {preview && (
        <form className={styles.postDetails} onSubmit={handleFormSubmit}>
          <textarea
            className={styles.captionTextArea}
            cols='30'
            rows='10'
            placeholder='Enter caption here...'
            value={caption}
            onChange={handleCaptionChange}
            required
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
}

export default CreatePost;

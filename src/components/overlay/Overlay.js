import React, { useCallback } from "react";
import PropTypes from "prop-types";

import styles from "./Overlay.module.css";

function Overlay({
  Content,
  isOpen,
  overlayStyles,
  contentStyles,
  shouldCloseOnOverlayClicked,
  onClose,
}) {
  const handleOnOverlayClosed = useCallback(() => {
    if (shouldCloseOnOverlayClicked) {
      onClose();
    }
  }, [shouldCloseOnOverlayClicked, onClose]);

  if (isOpen)
    return (
      <div
        className={styles.overlay}
        onClick={handleOnOverlayClosed}
        style={{ ...overlayStyles, zIndex: 100 }}
      >
        <div className={styles.content} style={{ ...contentStyles }}>
          {Content}
        </div>
      </div>
    );
  return <></>;
}

Overlay.propTypes = {
  Content: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Overlay.defaultProps = {
  overlayStyles: {},
  contentStyles: {},
  shouldCloseOnOverlayClicked: false,
  onClose: () => {},
};

export default Overlay;

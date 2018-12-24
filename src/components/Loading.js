import React from 'react';

const styles = {
  root: {
    fontSize: 32,
  },
};

export default ({ style = {} }) => (
  <div style={{ ...styles.root, ...style }}>Loading...</div>
);

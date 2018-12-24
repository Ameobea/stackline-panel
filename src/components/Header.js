import React from 'react';

import { borderStyles } from '../commonStyles';

const styles = {
  root: {
    ...borderStyles,
    borderWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
  },
};

const Header = () => (
  <div style={styles.root}>
    <img src="https://ameo.link/u/5y2.png" alt="Stackline Logo" />
  </div>
);

export default Header;

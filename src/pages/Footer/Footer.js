// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Your Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
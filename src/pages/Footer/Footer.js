

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}> ©{new Date().getFullYear() }Copyright: Shopify.com </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    opacity:0.9,

  },
  text: {
    margin: 0,
  },
};

export default Footer;
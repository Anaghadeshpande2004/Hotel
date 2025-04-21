import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa';

const HeaderFooter = () => {
  
const pageTitles = {
    '/home': <h2>StayEaze</h2>,
    '/checkin': <h2>CheckIn</h2>,
    '/accommodation': <h2>Accommodation</h2>,
    '/suspects': <h2>CheckOut</h2>,
    '/profile': <h2>Profile</h2>,

    
  
  };

  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2 style={styles.pageTitle}>StayEaze</h2>
        <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
            <span style={styles.navItem}>Home</span>
          </Link>
          <Link to="/checkin" style={styles.link}>
            <span style={styles.navItem}>CheckIn</span>
          </Link>
          <span style={styles.navItem}>Accommodation</span>
          <span style={styles.navItem}>CheckOut</span>
          <span style={styles.navItem}>Profile</span>
          <FaBell style={styles.icon} />
        </div>
      </div>

      


      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 StayEaze. All rights reserved.</p>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: ' #041a59', // Dark blue background
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    fontSize: '30px', // Increase navbar font size
    
  },
  pageTitle: {
    margin: '0',
    fontSize: '26px', // Increase title font size
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
  },
  navItem: {
    color: 'white',
    fontSize: '20px', // Increase navigation item font size
    fontWeight: '500',
    cursor: 'pointer',
  },
  icon: {
    color: 'white',
    fontSize: '22px', // Increase icon size
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: ' #041a59', // Dark blue background
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    margin: '0',
    fontSize: '14px',
  },
};


export default HeaderFooter;

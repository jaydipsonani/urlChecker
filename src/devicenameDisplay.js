import React, { useState, useEffect } from 'react';

// Enhanced device detection function
const getDeviceName = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  // Device detection logic based on user agent and screen size
  if (/Realme 3 Pro/.test(userAgent)) return 'Realme 3 Pro';
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/Pixel/.test(userAgent)) return 'Google Pixel Device';
  if (/Android/.test(userAgent)) {
    // Additional checks for common Android devices
    if (screenWidth === 1080 && screenHeight === 2340) return 'Realme 3 Pro'; // Example for Realme 3 Pro
    return 'Android Device';
  }
  if (/iPad/.test(userAgent)) return 'iPad';
  if (/Windows/.test(userAgent)) return 'Windows PC';
  if (/Mac/.test(userAgent)) return 'Macintosh';

  return 'Unknown Device';
};

// React component to display device name
const DeviceNameDisplay = () => {
  const [deviceName, setDeviceName] = useState('Unknown Device');

  useEffect(() => {
    const detectedDeviceName = getDeviceName();
    setDeviceName(detectedDeviceName);
  }, []);

  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <p>You're using a {deviceName}</p>
    </div>
  );
};

export default DeviceNameDisplay;

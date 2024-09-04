import React, { useState, useEffect } from 'react';

// Simplified device detection function
const getDeviceName = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Device detection based on user agent and screen size
  if (/RMX1851/.test(userAgent)) return 'Realme 3 Pro';
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/Android/.test(userAgent) && /Pixel/.test(userAgent)) return 'Google Pixel Device';
//   if (/Android/.test(userAgent)) return 'Android Device';
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

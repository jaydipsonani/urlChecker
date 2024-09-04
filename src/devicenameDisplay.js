import React, { useState, useEffect } from 'react';

// Device detection function
const getDeviceName = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iPhone models
  const iPhoneModels = {
    'iPhone14,2': 'iPhone 13 Pro',
    'iPhone10,6': 'iPhone X',
    'iPhone10,5': 'iPhone 8 Plus',
    // Add more iPhone mappings here
  };

  for (const model in iPhoneModels) {
    if (userAgent.includes(model)) {
      return iPhoneModels[model];
    }
  }

  // Android models
  const androidModels = {
    'Pixel 4': 'Google Pixel 4',
    'SM-G991B': 'Samsung Galaxy S21',
    'RMX1851': 'Realme 3 Pro',  // Added Realme 3 Pro
    // Add more Android mappings here
  };

  for (const model in androidModels) {
    if (userAgent.includes(model)) {
      return androidModels[model];
    }
  }

  // Fallbacks
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/Android/.test(userAgent)) return 'Android Device';
  if (/iPad/.test(userAgent)) return 'iPad';
  if (/Windows/.test(userAgent)) return 'Windows PC';
  if (/Mac/.test(userAgent)) return 'Macintosh';

  return 'Unknown Device';
};

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

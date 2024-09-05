// src/DeviceInfo.js

import React, { useEffect, useState } from 'react';

// Enhanced device detection logic
const getDeviceModel = () => {
  const userAgent = navigator.userAgent;

  // Debugging information
  console.log('User Agent:', userAgent);

  // Device detection patterns
  const devices = {
    'iPhone X': /iPhone.*OS 11_\d+/,
    'iPhone 8 Plus': /iPhone.*OS 11_\d+/,
    'Pixel 3': /Pixel 3/,
    'Realme 3 Pro': /Realme 3 Pro/,
    // Add more devices as needed
  };

  for (const [model, pattern] of Object.entries(devices)) {
    if (pattern.test(userAgent)) {
      return model;
    }
  }

  return 'Unknown Device';
};

const DeviceInfo = () => {
  const [deviceModel, setDeviceModel] = useState('Loading...');

  useEffect(() => {
    const model = getDeviceModel();
    setDeviceModel(model);
  }, []);

  return (
    <div>
      <h1>Device Model</h1>
      <p>{deviceModel}</p>
    </div>
  );
};

export default DeviceInfo;

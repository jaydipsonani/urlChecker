import React, { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

// Device detection function using ua-parser-js
const getDeviceName = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  
  // Extract device information
  const deviceModel = result.device.model;
  const deviceType = result.device.type;
  const osName = result.os.name;
  
  // Provide a fallback for Realme 3 Pro
  if (/Realme 3 Pro/.test(deviceModel)) {
    return 'Realme 3 Pro';
  }

  // Use other detection logic or fallbacks
  if (deviceType === 'mobile') {
    if (osName === 'iOS') {
      return 'iPhone';
    }
    if (osName === 'Android') {
      return 'Android Device';
    }
  } else if (deviceType === 'tablet') {
    return 'Tablet';
  } else if (osName === 'Windows') {
    return 'Windows PC';
  } else if (osName === 'Mac OS') {
    return 'Macintosh';
  }

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

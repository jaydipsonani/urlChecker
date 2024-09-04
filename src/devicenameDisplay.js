import React, { useState, useEffect } from 'react';
import DeviceDetector from 'device-detector-js';

// Device detection function using device-detector-js
const getDeviceName = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const detector = new DeviceDetector();
  const device = detector.detect(userAgent);

  if (device.device) {
    return `${device.device.model} (${device.device.vendor})`;
  } else if (device.os) {
    return `${device.os.name} Device`;
  } else if (device.browser) {
    return `${device.browser.name} Browser`;
  }

  // Fallbacks
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/Android/.test(userAgent)) return 'Android Device';
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

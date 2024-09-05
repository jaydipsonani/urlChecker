import React, { useState, useEffect } from 'react';
import DeviceDetector from 'device-detector-js';

// Helper function for manual detection
const getDeviceModelManually = (userAgent) => {
  if (/Pixel 3/.test(userAgent)) {
    return 'Google Pixel 3';
  }
  if (/Pixel 4/.test(userAgent)) {
    return 'Google Pixel 4';
  }
  if (/iPhone/.test(userAgent) && /iPhone OS 13/.test(userAgent)) {
    return 'iPhone 8';
  }
  if (/RMX1851/.test(userAgent)) {
    return 'Realme 3 Pro';
  }
  return 'Unknown Device';
};

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator.userAgent;

    // Try detecting device using device-detector-js
    const deviceData = deviceDetector.parse(userAgent);

    // Fallback to manual detection if needed
    const model = deviceData.device.model || getDeviceModelManually(userAgent);

    setDeviceInfo({
      type: deviceData.device.type || 'Unknown',
      brand: deviceData.device.brand || 'Unknown',
      model: model,
      os: deviceData.os.name || 'Unknown',
      browser: deviceData.client.name || 'Unknown',
    });
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Type: {deviceInfo.type}</p>
      <p>Brand: {deviceInfo.brand}</p>
      <p>Model: {deviceInfo.model}</p>
      <p>OS: {deviceInfo.os}</p>
      <p>Browser: {deviceInfo.browser}</p>

      {/* Show the install button if the device type is a smartphone */}
      {deviceInfo.type === 'smartphone' ? (
        <button>Install eSIM</button>
      ) : (
        <p>Does not support eSIM</p>
      )}
    </div>
  );
};

export default DeviceInfo;

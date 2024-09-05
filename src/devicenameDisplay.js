import React, { useState, useEffect } from 'react';
import DeviceDetector from 'device-detector-js';

// Helper function for manual detection
const getDeviceModelManually = (userAgent) => {
  if (!userAgent) return 'Unknown Device';

  const ua = userAgent.toLowerCase();

  if (/pixel 3/.test(ua)) {
    return 'Google Pixel 3';
  }
  if (/pixel 4/.test(ua)) {
    return 'Google Pixel 4';
  }
  if (/iphone/.test(ua) && /iphone os 13/.test(ua)) {
    return 'iPhone 8';
  }
  if (/RMX1851/.test(ua)) {
    return 'Realme 3 Pro';
  }
  return 'Unknown Device';
};

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    try {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent || '';

      // Log userAgent and device data for debugging
      console.log("User-Agent:", userAgent);

      const deviceData = deviceDetector.parse(userAgent);
      console.log("Parsed Device Data:", deviceData);

      // Fallback to manual detection if model is not detected
      const model = deviceData.device.model || getDeviceModelManually(userAgent);

      setDeviceInfo({
        type: deviceData.device.type || 'Unknown',
        brand: deviceData.device.brand || 'Unknown',
        model: model,
        os: deviceData.os.name || 'Unknown',
        browser: deviceData.client.name || 'Unknown',
      });
    } catch (error) {
      console.error("Error detecting device information:", error);
      setDeviceInfo({
        type: 'Unknown',
        brand: 'Unknown',
        model: 'Unknown Device',
        os: 'Unknown',
        browser: 'Unknown',
      });
    }
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Type: {deviceInfo.type}</p>
      <p>Brand: {deviceInfo.brand}</p>
      <p>Model: {deviceInfo.model}</p>
      <p>OS: {deviceInfo.os}</p>
      <p>Browser: {deviceInfo.browser}</p>
      <p>UserAgent: {deviceInfo.userAgent}</p>

      {/* Show the install button if the device type is a smartphone */}
      {(deviceInfo.type?.toLowerCase() === 'smartphone') ? (
        <button>Install eSIM</button>
      ) : (
        <p>Does not support eSIM</p>
      )}
    </div>
  );
};

export default DeviceInfo;

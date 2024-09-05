import React, { useState, useEffect } from 'react';
import DeviceDetector from 'device-detector-js';

// Helper function for manual detection
const getDeviceModelManually = (userAgent) => {
  const ua = userAgent.toLowerCase();
  console.log("Testing User-Agent:", ua); // Debug log

  if (/pixel 3/.test(ua)) {
    console.log("Matched Pixel 3"); // Debug log
    return 'Google Pixel 3';
  }
  if (/pixel 4/.test(ua)) {
    console.log("Matched Pixel 4"); // Debug log
    return 'Google Pixel 4';
  }
  if (/iphone.*os 13/.test(ua)) {
    console.log("Matched iPhone 8"); // Debug log
    return 'iPhone 8';
  }
  if (/realme 3 pro/.test(ua)) {
    console.log("Matched Realme 3 Pro"); // Debug log
    return 'Realme 3 Pro';
  }
  if (/samsung galaxy s21/.test(ua)) {
    console.log("Matched Samsung Galaxy S21"); // Debug log
    return 'Samsung Galaxy S21';
  }
  if (/iphone.*os 14/.test(ua)) {
    console.log("Matched iPhone 12"); // Debug log
    return 'iPhone 12';
  }

  // Adding general patterns for known devices
  if (/android/.test(ua)) {
    console.log("Matched Android Device"); // Debug log
    return 'Android Device';
  }
  if (/iphone/.test(ua)) {
    console.log("Matched iPhone Device"); // Debug log
    return 'iPhone Device';
  }
  if (/windows nt/.test(ua)) {
    console.log("Matched Windows Device"); // Debug log
    return 'Windows Device';
  }
  if (/macintosh/.test(ua)) {
    console.log("Matched Mac Device"); // Debug log
    return 'Mac Device';
  }

  return 'Unknown Device';
};

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    try {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent || '';

      console.log("User-Agent:", userAgent);

      const deviceData = deviceDetector.parse(userAgent);
      console.log("Parsed Device Data:", deviceData);

      // Fallback to manual detection if deviceData is incomplete
      const model = deviceData.device?.model || getDeviceModelManually(userAgent);

      setDeviceInfo({
        type: deviceData.device?.type || 'Unknown',
        brand: deviceData.device?.brand || 'Unknown',
        model: model,
        os: deviceData.os?.name || 'Unknown',
        browser: deviceData.client?.name || 'Unknown',
        userAgent: userAgent
      });
    } catch (error) {
      console.error("Error detecting device information:", error);
      setDeviceInfo({
        type: 'Unknown',
        brand: 'Unknown',
        model: 'Unknown Device',
        os: 'Unknown',
        browser: 'Unknown',
        userAgent: navigator.userAgent || 'Unknown',
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

      {(deviceInfo.type?.toLowerCase() === 'smartphone') ? (
        <button>Install eSIM</button>
      ) : (
        <p>Does not support eSIM</p>
      )}
    </div>
  );
};

export default DeviceInfo;

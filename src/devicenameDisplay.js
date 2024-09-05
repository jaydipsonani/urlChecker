import React, { useState, useEffect } from 'react';
import DeviceDetector from 'device-detector-js';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    try {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent || '';

      console.log("User-Agent:", userAgent);

      const deviceData = deviceDetector.parse(userAgent);
      console.log("Parsed Device Data:", deviceData);

      // const model = deviceData.device?.model || getDeviceModelManually(userAgent);

      setDeviceInfo({
        type: deviceData.device?.type || 'Unknown',
        brand: deviceData.device?.brand || 'Unknown',
        model: deviceData.device.model,
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


// import { useState, useEffect } from 'react';

// const detectIOSDeviceInfo = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   const deviceInfo = {
//     device: 'unknown', // iPhone, iPad, or iPod
//     iosVersion: 'unknown' // iOS version
//   };

//   // Check if it's an iPhone or iPad
//   if (/iPhone/.test(userAgent)) {
//     deviceInfo.device = 'iPhone';
//   } else if (/iPad/.test(userAgent)) {
//     deviceInfo.device = 'iPad';
//   } else if (/iPod/.test(userAgent)) {
//     deviceInfo.device = 'iPod';
//   }

//   // Extract the iOS version
//   const iosVersionMatch = userAgent.match(/OS (\d+)_/);
//   if (iosVersionMatch) {
//     deviceInfo.iosVersion = iosVersionMatch[1];
//   }

//   return deviceInfo;
// };

// const DeviceInfoPage = () => {
//   const [deviceInfo, setDeviceInfo] = useState({ device: 'unknown', iosVersion: 'unknown' });

//   useEffect(() => {
//     const info = detectIOSDeviceInfo();
//     setDeviceInfo(info)
// ;
//   }, []);

//   return (
//     <div>
//       <h1>Device Information</h1>
//       <p>Device Type: {deviceInfo.device}</p>
//       <p>iOS Version: {deviceInfo.iosVersion}</p>
//     </div>
//   );
// };

// export default DeviceInfoPage;

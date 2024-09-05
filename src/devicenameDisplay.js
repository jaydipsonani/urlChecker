// import React, { useState, useEffect } from 'react';
// import DeviceDetector from 'device-detector-js';

// const DeviceInfo = () => {
//   const [deviceInfo, setDeviceInfo] = useState({});

//   useEffect(() => {
//     try {
//       const deviceDetector = new DeviceDetector();
//       const userAgent = navigator.userAgent || '';

//       console.log("User-Agent:", userAgent);

//       const deviceData = deviceDetector.parse(userAgent);
//       console.log("Parsed Device Data:", deviceData);

//       // const model = deviceData.device?.model || getDeviceModelManually(userAgent);

//       setDeviceInfo({
//         type: deviceData.device?.type || 'Unknown',
//         brand: deviceData.device?.brand || 'Unknown',
//         model: deviceData.device.model,
//         os: deviceData.os?.name || 'Unknown',
//         browser: deviceData.client?.name || 'Unknown',
//         userAgent: userAgent
//       });
//     } catch (error) {
//       console.error("Error detecting device information:", error);
//       setDeviceInfo({
//         type: 'Unknown',
//         brand: 'Unknown',
//         model: 'Unknown Device',
//         os: 'Unknown',
//         browser: 'Unknown',
//         userAgent: navigator.userAgent || 'Unknown',
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Device Information</h1>
//       <p>Type: {deviceInfo.type}</p>
//       <p>Brand: {deviceInfo.brand}</p>
//       <p>Model: {deviceInfo.model}</p>
//       <p>OS: {deviceInfo.os}</p>
//       <p>Browser: {deviceInfo.browser}</p>
//       <p>UserAgent: {deviceInfo.userAgent}</p>

//       {(deviceInfo.type?.toLowerCase() === 'smartphone') ? (
//         <button>Install eSIM</button>
//       ) : (
//         <p>Does not support eSIM</p>
//       )}
//     </div>
//   );
// };

// export default DeviceInfo;


import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

// List of eSIM supported devices
const esimSupportedDevices = [
  { brand: 'Apple', models: ['iPhone XR', 'iPhone XS', 'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 8 Plus', 'iPhone 8'] },
  { brand: 'Google', models: ['Pixel 3', 'Pixel 4', 'Pixel 5', 'Pixel 6'] },
  { brand: 'Samsung', models: ['Galaxy S20', 'Galaxy S21', 'Galaxy Z Fold 3'] },
  // Add more devices as needed
];

// Utility function to get device information using ua-parser-js
const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  const deviceModel = result.device.model || 'Unknown';
  const osName = result.os.name || 'Unknown';
  return { deviceModel, osName };
};

// Function to check if a device supports eSIM
const isEsimSupported = (deviceModel) => {
  for (const device of esimSupportedDevices) {
    if (device.models.includes(deviceModel)) {
      return true;
    }
  }
  return false;
};

const EsimSupportChecker = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [esimSupported, setEsimSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = getDeviceInfo();
      setDeviceInfo(info)
;
      setEsimSupported(isEsimSupported(info.deviceModel));
    }
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Device Model: {deviceInfo.deviceModel}</p>
      <p>Operating System: {deviceInfo.osName}</p>
      {esimSupported ? (
        <p>Your device supports eSIM!</p>
      ) : (
        <p>Your device does not support eSIM.</p>
      )}
    </div>
  );
};

export default EsimSupportChecker;
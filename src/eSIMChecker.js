// import { useEffect, useState } from "react";

// // Function to detect platform and possible eSIM support based on user agent

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(true);

//   useEffect(() => {
//     const isEsimSupported = detectEsimSupport();
//     setEsimSupported(isEsimSupported);
//   }, []);

//   const detectEsimSupport = () => {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     // Check if it's an iOS device
//     if (/iPhone|iPad|iPod/i.test(userAgent)) {
//       // List of iOS devices that support eSIM
//       const supportedDevices = [
//         "iPhone XS",
//         "iPhone XS Max",
//         "iPhone XR",
//         "iPhone 11",
//         "iPhone 11 Pro",
//         "iPhone 11 Pro Max",
//         "iPhone SE (2nd generation)",
//         "iPhone 12",
//         "iPhone 12 mini",
//         "iPhone 12 Pro",
//         "iPhone 12 Pro Max",
//         "iPhone 13",
//         "iPhone 13 mini",
//         "iPhone 13 Pro",
//         "iPhone 13 Pro Max",
//         "iPhone 14",
//         "iPhone 14 Plus",
//         "iPhone 14 Pro",
//         "iPhone 14 Pro Max",
//       ];

//       // Check if userAgent contains any of the supported devices
//       return supportedDevices.some((device) => userAgent.includes(device));
//     }

//     // Check if it's an Android device
//     if (/Android/i.test(userAgent)) {
//       // Android devices are more complex; generally, assume newer devices (from 2018 onwards) support eSIM.
//       // You could add more specific checks based on device models, if known.
//       // Example: Check for 'Pixel 4', 'Pixel 5', etc., if you have a comprehensive list.

//       const year = new Date().getFullYear();

//       // For this example, let's assume devices from 2018 onwards might support eSIM.

//       return year >= 2018;
//     }

//     // Default to not supporting eSIM
//     return false;
//   };

//   // Function to redirect to the eSIM setup page for iOS
//   const redirectToEsimSetup = () => {
//     const smdpAddress = "consumer.e-sim.global";
//     const activationCode = "TN2024032517501135006332";
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       {esimSupported ? (
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;



// import { useEffect, useState } from "react";

// const InstallESimPage = () => {
//   const [deviceName, setDeviceName] = useState("Unknown Device");
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const { name, esimSupport } = detectDeviceInfo();
//     console.log("Detected Device:", name);
//     console.log("eSIM Supported:", esimSupport);
//     setDeviceName(name);
//     setEsimSupported(esimSupport);
//   }, []);

//   const detectDeviceInfo = () => {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//     console.log("User Agent:", userAgent); // Debugging line

//     let deviceInfo = { name: "Device Not Recognized", esimSupport: false };

//     // Check if it's an iOS device
//     if (/iPhone|iPad|iPod/i.test(userAgent)) {
//       const supportedIosDevices = [
//         "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone 11",
//         "iPhone 11 Pro", "iPhone 11 Pro Max", "iPhone SE (2nd generation)",
//         "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
//         "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
//         "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"
//       ];

//       // Check for eSIM support in iOS devices
//       const isSupportedIosDevice = supportedIosDevices.some(device => userAgent.includes(device));
//       deviceInfo = isSupportedIosDevice
//         ? { name: "iOS Device", esimSupport: true }
//         : { name: "iOS Device", esimSupport: false };
//     }

//     // Check if it's an Android device
//     else if (/Android/i.test(userAgent)) {
//       const supportedAndroidDevices = [
//         "Pixel 3", "Pixel 3 XL", "Pixel 4", "Pixel 4 XL", "Pixel 5",
//         "Pixel 6", "Pixel 6 Pro", "Pixel 7", "Pixel 7 Pro",
//         "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra",
//         "Galaxy Note 20", "Galaxy Note 20 Ultra",
//         "Galaxy Z Fold 2", "Galaxy Z Fold 3", "Galaxy Z Fold 4",
//         "Galaxy Z Flip", "Galaxy Z Flip 3", "Galaxy Z Flip 4",
//         "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra",
//         "Motorola Razr (2019)", "Motorola Razr 5G",
//         "Huawei P40", "Huawei P40 Pro", "Huawei Mate 40 Pro"
//       ];

//       // Check for eSIM support in Android devices
//       const isSupportedAndroidDevice = supportedAndroidDevices.some(device => userAgent.toLowerCase().includes(device.toLowerCase()));
//       deviceInfo = isSupportedAndroidDevice
//         ? { name: "Android Device", esimSupport: true }
//         : { name: "Android Device", esimSupport: false };
//     }

//     return deviceInfo;
//   };

//   const redirectToEsimSetup = () => {
//     const smdpAddress = "consumer.e-sim.global";
//     const activationCode = "TN2024032517501135006332";
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       <p>Device: {deviceName}</p> {/* Display the detected device name */}
//       {esimSupported ? (
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;


import React, { useState, useEffect } from 'react';
import {
  isAndroid,
  isIOS,
  isMobile,
  isTablet,
  browserName,
  osName
} from 'react-device-detect';

// Function to check if a device is eSIM supported
const isESIMSupported = () => {
  const userAgent = navigator.userAgent;

  // List of known eSIM supported devices
  const eSIMSupportedDevices = {
    android: [/Pixel.*(3|4|5|6|7)/],  // Example for Google Pixel 3 and newer
    ios: [/iPhone.*(X|11|12|13|14)/]  // Example for iPhone X and newer
  };

  if (isMobile) {
    if (isAndroid) {
      return eSIMSupportedDevices.android.some((regex) => regex.test(userAgent));
    } else if (isIOS) {
      return eSIMSupportedDevices.ios.some((regex) => regex.test(userAgent));
    }
  }
  return false;
};

const DeviceCheck = () => {
  const [eSIMSupported, setESIMSupported] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setESIMSupported(isESIMSupported());
    } catch (e) {
      setError('Error detecting device.');
    }
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {eSIMSupported ? (
        <p>Your device supports eSIM.</p>
      ) : (
        <p>Your device does not support eSIM or could not be detected.</p>
      )}
    </div>
  );
};

export default DeviceCheck;


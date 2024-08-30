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


// import { useEffect, useState } from 'react';

// // Function to detect platform and possible eSIM support based on user agent
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     // List of iOS devices that support eSIM
//     const supportedIOSDevices = [
//       'iPhone10,3', 'iPhone10,6', // iPhone Xs, Xs Max
//       'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', // iPhone XR, 11, 11 Pro, 11 Pro Max
//       'iPhone12,1', 'iPhone12,3', 'iPhone12,5', // iPhone 12, 12 Pro, 12 Pro Max, 12 mini
//       'iPhone13,1', 'iPhone13,2', 'iPhone13,3', 'iPhone13,4', // iPhone 13 series
//       'iPhone14,4', 'iPhone14,5', 'iPhone14,2', 'iPhone14,3'  // iPhone 14 series
//     ];

//     // Check if the user agent contains any of the supported iOS devices
//     return supportedIOSDevices.some(device => userAgent.includes(device));
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     // List of Android devices that support eSIM
//     const supportedAndroidDevices = [
//       'Pixel 3', 'Pixel 3 XL', 'Pixel 4', 'Pixel 4 XL', 'Pixel 4a', 'Pixel 4a 5G',
//       'Pixel 5', 'Pixel 5a', 'Pixel 6', 'Pixel 6 Pro', 'Pixel 6a',
//       'Pixel 7', 'Pixel 7 Pro', 'Pixel 7a',
//       'Galaxy S20', 'Galaxy S20+', 'Galaxy S20 Ultra', 'Galaxy S21', 'Galaxy S21+', 'Galaxy S21 Ultra',
//       'Galaxy Note 20', 'Galaxy Note 20 Ultra',
//       'Galaxy Z Fold 2', 'Galaxy Z Fold 3', 'Galaxy Z Fold 4',
//       'Galaxy Z Flip', 'Galaxy Z Flip 3', 'Galaxy Z Flip 4',
//       'Motorola Razr (2019)', 'Motorola Razr 5G',
//       'Huawei P40', 'Huawei P40 Pro', 'Huawei Mate 40 Pro'
//     ];

//     // Check if the user agent contains any of the supported Android devices
//     return supportedAndroidDevices.some(device => userAgent.includes(device));
//   }

//   // Default to not supporting eSIM
//   return false;
// };

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const isEsimSupported = detectEsimSupport();
//     setEsimSupported(isEsimSupported);
//   }, []);

//   // Function to redirect to the eSIM setup page for iOS
//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'your_smdp_address'; // Replace with actual SM-DP+ Address
//     const activationCode = 'your_activation_code'; // Replace with actual Activation Code
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

// import { useEffect, useState } from 'react';

// // Function to detect the platform
// const detectDevicePlatform = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     return 'iOS';
//   } else if (/android/i.test(userAgent)) {
//     return 'Android';
//   }
//   return 'Unknown';
// };

// // Function to check for general eSIM support based on platform
// const detectEsimSupport = () => {
//   const platform = detectDevicePlatform();
  
//   if (platform === 'iOS') {
//     // Most modern iOS devices support eSIM
//     return true;
//   } else if (platform === 'Android') {
//     // Android devices from around 2018 onwards generally support eSIM
//     // Add further checks or assumptions based on general support for recent Android versions
//     const userAgent = navigator.userAgent.toLowerCase();
//     // Assume devices with certain characteristics (like newer Android versions) support eSIM
//     const newerAndroid = /android [9-]{0,1}[1-9]\d*/.test(userAgent) || /android 10|11|12/.test(userAgent);
//     return newerAndroid;
//   }
  
//   return false;
// };

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const isEsimSupported = detectEsimSupport();
//     console.log("eSIM Supported:", isEsimSupported); // Log result for debugging
//     setEsimSupported(isEsimSupported);
//   }, []);

//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'your_smdp_address'; // Replace with actual SM-DP+ Address
//     const activationCode = 'your_activation_code'; // Replace with actual Activation Code
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



// import { useEffect, useState } from 'react';

// // Function to detect platform, device name, and possible eSIM support based on user agent
// const detectDeviceInfo = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   let deviceName = 'Unknown Device';
//   let esimSupported = false;

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     const iOSVersionMatch = userAgent.match(/OS (\d+_\d+)/);
//     if (iOSVersionMatch) {
//       const version = iOSVersionMatch[1].replace('_', '.');
//       const supportedVersion = parseFloat(version) >= 12; // iOS 12 and above generally support eSIM
//       esimSupported = supportedVersion;

//       if (/iPhone/i.test(userAgent)) {
//         deviceName = `iPhone (iOS ${version})`;
//       } else if (/iPad/i.test(userAgent)) {
//         deviceName = `iPad (iOS ${version})`;
//       } else if (/iPod/i.test(userAgent)) {
//         deviceName = `iPod (iOS ${version})`;
//       }
//     }
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     const androidVersionMatch = userAgent.match(/Android\s([0-9\.]*)/);
//     if (androidVersionMatch) {
//       const version = androidVersionMatch[1];
//       esimSupported = true; // Assume most modern Android devices support eSIM

//       const deviceModelMatch = userAgent.match(/\(([^)]+)\)/);
//       if (deviceModelMatch) {
//         const modelInfo = deviceModelMatch[1].split(';');
//         deviceName = modelInfo[modelInfo.length - 1].trim(); // Extract model name
//       } else {
//         deviceName = `Android Device (Version ${version})`;
//       }
//     }
//   }

//   return { esimSupported, deviceName };
// };

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);
//   const [deviceName, setDeviceName] = useState('');

//   useEffect(() => {
//     const { esimSupported, deviceName } = detectDeviceInfo();
//     setEsimSupported(esimSupported);
//     setDeviceName(deviceName);
//   }, []);

//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'consumer.e-sim.global';
//     const activationCode = 'TN2024032517501135006332';
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       <p>Device: {deviceName}</p>
//       {esimSupported ? (
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;



// import { useEffect, useState } from 'react';

// // Function to detect the platform
// const detectDevicePlatform = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     return 'iOS';
//   } else if (/android/i.test(userAgent)) {
//     return 'Android';
//   }
//   return 'Unknown';
// };

// // Function to check eSIM support based on platform and characteristics
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   const platform = detectDevicePlatform();

//   let esimSupported = false;
//   let deviceName = 'Device Not Recognized';

//   if (platform === 'iOS') {
//     const iOSVersionMatch = userAgent.match(/OS (\d+_\d+)/);
//     if (iOSVersionMatch) {
//       const version = iOSVersionMatch[1].replace('_', '.');
//       const supportedVersion = parseFloat(version) >= 12; // iOS 12 and above generally support eSIM
//       esimSupported = supportedVersion;

//       if (/iPhone/i.test(userAgent)) {
//         deviceName = `iPhone (iOS ${version})`;
//       } else if (/iPad/i.test(userAgent)) {
//         deviceName = `iPad (iOS ${version})`;
//       } else if (/iPod/i.test(userAgent)) {
//         deviceName = `iPod (iOS ${version})`;
//       }
//     }
//     deviceName = 'iOS Device';
//   } else if (platform === 'Android') {
//     const androidVersionMatch = userAgent.match(/Android\s([0-9\.]*)/);
//     if (androidVersionMatch) {
//       const version = parseFloat(androidVersionMatch[1]);
      
//       // Check if the Android version is 12 or above
//       if (version >= 10) {
//         esimSupported = true;
//       }

//       // Extract device model name
//       const deviceModelMatch = userAgent.match(/\(([^)]+)\)/);
//       if (deviceModelMatch) {
//         const modelInfo = deviceModelMatch[1].split(';');
//         deviceName = modelInfo[modelInfo.length - 1].trim(); // Extract model name
//       } else {
//         deviceName = `Android Device (Version ${version})`;
//       }
//     }
//   }

//   return { esimSupported, deviceName };
// };

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);
//   const [deviceName, setDeviceName] = useState('');

//   useEffect(() => {
//     const { esimSupported, deviceName } = detectEsimSupport();
//     console.log("eSIM Supported:", esimSupported); // Log result for debugging
//     console.log("Device Name:", deviceName); // Log device name for debugging
//     setEsimSupported(esimSupported);
//     setDeviceName(deviceName);
//   }, []);

//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'your_smdp_address'; // Replace with actual SM-DP+ Address
//     const activationCode = 'your_activation_code'; // Replace with actual Activation Code
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       <p>Device: {deviceName}</p>
//       {esimSupported ? (
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;



import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

// Define a list of devices known to support eSIM
const esimSupportedDevices = [
  'iPhone 12', 'iPhone 13', 'iPhone 14',
  'Samsung Galaxy S20', 'Samsung Galaxy S21', 'Samsung Galaxy S22'
  // Add more devices as needed
];

const InstallESIM = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    const { device } = result;
    
    // Check if device model is in the supported list
    if (device.model && esimSupportedDevices.some(model => device.model.includes(model))) {
      setIsSupported(true);
    } else {
      setIsSupported(false);
    }
  }, []);

  return (
    <div>
      {isSupported ? (
        <button onClick={() => window.location.href = '/install-esim'}>
          Install eSIM
        </button>
      ) : (
        <p>Your device does not support eSIM installation.</p>
      )}
    </div>
  );
};

export default InstallESIM;








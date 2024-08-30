import React, { useState, useEffect } from 'react';

// Combined JSON data and JS logic in one file
const deviceList = {
  iOS: [
    "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone 11", "iPhone 11 Pro",
    "iPhone 11 Pro Max", "iPhone SE (2nd generation)", "iPhone 12",
    "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13",
    "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 14",
    "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"
  ],
  Android: [
    "Pixel 2", "Pixel 3", "Pixel 3a", "Pixel 4", "Pixel 4a", "Pixel 5",
    "Pixel 5a", "Samsung Galaxy S20", "Samsung Galaxy S20+", "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S21", "Samsung Galaxy S21+", "Samsung Galaxy S21 Ultra"
  ]
};

// Utility function to normalize text
const normalizeText = (text) => text.trim().toLowerCase();

// Utility function to check if the device supports eSIM
const checkDeviceSupport = (userAgent, deviceList) => {
  const normalizedUserAgent = normalizeText(userAgent);

  if (/iphone/.test(normalizedUserAgent)) {
    const matchedDevice = deviceList.iOS.find(device =>
      normalizedUserAgent.includes(normalizeText(device))
    );
    return matchedDevice
      ? { device: matchedDevice, isESIMSupported: true }
      : { device: 'Unknown iPhone', isESIMSupported: false };
  } else if (/android/.test(normalizedUserAgent)) {
    const matchedDevice = deviceList.Android.find(device =>
      normalizedUserAgent.includes(normalizeText(device))
    );
    return matchedDevice
      ? { device: matchedDevice, isESIMSupported: true }
      : { device: 'Unknown Android Device', isESIMSupported: false };
  } else {
    return { device: 'Unknown Device', isESIMSupported: false };
  }
};

// Main component to check eSIM support
const InstallESimPage = () => {
  const [device, setDevice] = useState('');
  const [isESIMSupported, setIsESIMSupported] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const result = checkDeviceSupport(userAgent, deviceList);
    setDevice(result.device);
    setIsESIMSupported(result.isESIMSupported);
  }, []);

  return (
    <div>
      <h1>Device: {device}</h1>
      {isESIMSupported ? (
        <p>Your device supports eSIM.</p>
      ) : (
        <p>Your device does not support eSIM.</p>
      )}
    </div>
  );
};

export default InstallESimPage;




// ======================================================================================================================

// import React, { useState, useEffect } from 'react';

// const EsimDetector = () => {
//   const [deviceInfo, setDeviceInfo] = useState({});
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const getDeviceInfo = async () => {
//       try {
//         const userAgent = navigator.userAgent;
//         const device = {
//           os: '',
//           browser: '',
//           device: '',
//         };

//         // Parse user agent to get device info
//         if (userAgent.match(/Android/i)) {
//           device.os = 'Android';
//         } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
//           device.os = 'iOS';
//         }

//         if (userAgent.match(/Chrome/i)) {
//           device.browser = 'Chrome';
//         } else if (userAgent.match(/Safari/i)) {
//           device.browser = 'Safari';
//         }

//         // Check if device supports eSIM
//         if ('icc' in navigator) {
//           setEsimSupported(true);
//         }

//         setDeviceInfo(device);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDeviceInfo();
//   }, []);

//   return (
//     <div>
//       <h1>Device Info</h1>
//       <p>OS: {deviceInfo.os}</p>
//       <p>Browser: {deviceInfo.browser}</p>
//       <p>Device: {deviceInfo.device}</p>
//       <p>eSIM Supported: {esimSupported ? 'Yes' : 'No'}</p>
//     </div>
//   );
// };

// export default EsimDetector;
// ===============================================================================================================

// import { useEffect, useState } from 'react';

// // Function to detect platform and possible eSIM support based on user agent
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   const lowerCasedUserAgent = userAgent.toLowerCase();

//   // Check if it's an iOS device
//   if (/iphone|ipad|ipod/i.test(lowerCasedUserAgent)) {
//     // iOS devices that support eSIM, matching partially on device names and model numbers
//     const supportedIOSDevices = [
//       'iphone10,3', 'iphone10,6',  // iPhone X
//       'iphone11',                  // iPhone XS, XR, XS Max
//       'iphone12',                  // iPhone 11 series
//       'iphone13',                  // iPhone 12 series
//       'iphone14',                  // iPhone 13 series
//       'iphone15'                   // iPhone 14 series
//     ];
//     return supportedIOSDevices.some(device => lowerCasedUserAgent.includes(device));
//   }

//   // Check if it's an Android device
//   if (/android/i.test(lowerCasedUserAgent)) {
//     // Broadly support eSIM on certain known families of Android devices
//     const supportedAndroidDevices = [
//       'pixel 3', 'pixel 4', 'pixel 5', 'pixel 6', 'pixel 7', // Pixel series
//       'galaxy s20', 'galaxy s21', 'galaxy note 20',         // Samsung Galaxy
//       'galaxy z fold', 'galaxy z flip',                     // Samsung Foldables
//       'motorola razr',                                      // Motorola Razr
//       'huawei p40', 'huawei mate 40'                        // Huawei models
//     ];

//     return supportedAndroidDevices.some(device => 
//       lowerCasedUserAgent.includes(device) ||
//       lowerCasedUserAgent.includes(device.replace(/ /g, '').toLowerCase()) // Handling without spaces
//     );
//   }

//   // Default to not supporting eSIM
//   return false;
// };

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const isEsimSupported = detectEsimSupport();
//     console.log("User Agent:", navigator.userAgent); // For debugging purposes
//     console.log("eSIM Supported:", isEsimSupported); // To verify detection logic
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
//       <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;

// ============================================================================================================

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

// ============================================================================================================

// import { useEffect, useState } from 'react';

// // Function to detect platform and possible eSIM support based on user agent
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     // List of iOS devices that support eSIM
//     const supportedDevices = [
//       'iPhone XS', 'iPhone XS Max', 'iPhone XR',
//       'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
//       'iPhone SE (2nd generation)', 'iPhone 12', 'iPhone 12 mini',
//       'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13', 
//       'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
//       'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max'
//     ];

//     // Check if userAgent contains any of the supported devices
//     return supportedDevices.some(device => userAgent.includes(device));
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     // Android devices are more complex; generally, assume newer devices (from 2018 onwards) support eSIM.
//     // You could add more specific checks based on device models, if known.
//     // Example: Check for 'Pixel 4', 'Pixel 5', etc., if you have a comprehensive list.
//     const year = new Date().getFullYear();
//     // For this example, let's assume devices from 2018 onwards might support eSIM.
//     return year >= 2010;
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
//     const smdpAddress = 'consumer.e-sim.global'; // Replace with actual SM-DP+ Address
//     const activationCode = 'TN2024032517501135006332'; // Replace with actual Activation Code
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

// =================================================================================================================

// import { useEffect, useState } from 'react';

// // Function to detect platform and possible eSIM support based on user agent
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     // Check if it's a supported iOS device using a more generic check
//     // For iOS, you can use `iOS` detection with specific versions if needed
//     const iOSVersionMatch = userAgent.match(/OS (\d+_\d+)/);
//     if (iOSVersionMatch) {
//       const version = iOSVersionMatch[1].replace('_', '.');
//       const supportedVersion = parseFloat(version) >= 12; // iOS 12 and above generally support eSIM
//       return supportedVersion;
//     }
//     return false; // Default to not supporting eSIM if version cannot be parsed
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     // Generally, assume newer Android devices support eSIM
//     // You can also use a more specific check for certain models if needed
//     return true; // Assumes modern Android devices support eSIM
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

  
//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'consumer.e-sim.global';
//     const activationCode = 'TN2024032517501135006332';
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

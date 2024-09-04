// import { useEffect, useState } from 'react';

// // Function to detect platform and possible eSIM support based on user agent
// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Function to get iOS device name based on user agent
//   const getIosDeviceName = () => {
//     const iosPatterns = [
//     { pattern: /iPhone.*OS 16_1/, model: 'iPhone 8 Plus' },
//   { pattern: /iPhone.*OS 16_7/, model: 'iPhone 11/11 Pro/11 Pro Max' },// Latest version for iPhone 11 series
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 12/12 mini/12 Pro/12 Pro Max' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 13/13 mini/13 Pro/13 Pro Max' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone SE (2nd generation)' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 14/14 Plus/14 Pro/14 Pro Max' },
//   { pattern: /iPhone.*OS 17_1/, model: 'iPhone 15/15 Plus/15 Pro/15 Pro Max' }, // Latest version for iPhone 15 series
//   { pattern: /iPhone.*OS 16_0/, model: 'iPhone XS/XS Max/XR' },
//     ];

//     // Log userAgent for debugging
//     console.log('User Agent:', userAgent);

//     // Match user agent against known patterns
//     for (const { pattern, model } of iosPatterns) {
//       if (pattern.test(userAgent)) {
//         return model;
//       }
//     }

//     return 'iOS Device';
//   };

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     const deviceName = getIosDeviceName();
//     return {
//       isSupported: [
//         'iPhone 11/11 Pro/11 Pro Max', 'iPhone 12/12 mini/12 Pro/12 Pro Max',
//         'iPhone 13/13 mini/13 Pro/13 Pro Max','iPhone SE (2nd generation)',
//         'iPhone 14/14 Plus/14 Pro/14 Pro Max','iPhone 15/15 Plus/15 Pro/15 Pro Max',
//         'iPhone XS/XS Max/XR','iPhone 8 Plus',
//       ].includes(deviceName),
//       deviceName
//     };
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     const year = new Date().getFullYear();
//     return {
//       isSupported: year >= 2018,
//       deviceName: 'Android Device'
//     };
//   }

//   // Default to not supporting eSIM
//   return {
//     isSupported: false,
//     deviceName: 'Unknown Device'
//   };
// };

// const InstallESimPage = () => {
//   const [esimInfo, setEsimInfo] = useState({ isSupported: false, deviceName: 'Unknown Device' });

//   useEffect(() => {
//     const { isSupported, deviceName } = detectEsimSupport();
//     setEsimInfo({ isSupported, deviceName });
//   }, []);

//   // Function to redirect to the eSIM setup page for iOS
//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'consumer.e-sim.global'; 
//     const activationCode = 'TN2024032517501135006332';
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       <p>Device: {esimInfo.deviceName}</p>
//       <p>useragernt:</p>
//        {esimInfo.isSupported ? (
//         <>
//       <p>userAgent:{esimInfo.userAgent}</p>
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//         </>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;

import React, { useState, useEffect } from 'react';

const detectEsimSupport = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const getIosDeviceName = () => {
    const iosPatterns = [
    { pattern: /iPhone.*OS 16_1/, model: 'iPhone 8 Plus' },
  { pattern: /iPhone.*OS 16_7/, model: 'iPhone 11/11 Pro/11 Pro Max' },// Latest version for iPhone 11 series
  { pattern: /iPhone.*OS 17_0/, model: 'iPhone 12/12 mini/12 Pro/12 Pro Max' },
  { pattern: /iPhone.*OS 17_0/, model: 'iPhone 13/13 mini/13 Pro/13 Pro Max' },
  { pattern: /iPhone.*OS 17_0/, model: 'iPhone SE (2nd generation)' },
  { pattern: /iPhone.*OS 17_0/, model: 'iPhone 14/14 Plus/14 Pro/14 Pro Max' },
  { pattern: /iPhone.*OS 17_1/, model: 'iPhone 15/15 Plus/15 Pro/15 Pro Max' }, // Latest version for iPhone 15 series
  { pattern: /iPhone.*OS 16_0/, model: 'iPhone XS/XS Max/XR' },
    ];

    // Log userAgent for debugging
    console.log('User Agent:', userAgent);

    // Match user agent against known patterns
    for (const { pattern, model } of iosPatterns) {
      if (pattern.test(userAgent)) {
        return model;
      }
    }

    return 'iOS Device';
  };


  // Check if it's an iOS device
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    const deviceName = getIosDeviceName();
    return {
      isSupported: [
        'iPhone 11/11 Pro/11 Pro Max', 'iPhone 12/12 mini/12 Pro/12 Pro Max',
        'iPhone 13/13 mini/13 Pro/13 Pro Max','iPhone SE (2nd generation)',
        'iPhone 14/14 Plus/14 Pro/14 Pro Max','iPhone 15/15 Plus/15 Pro/15 Pro Max',
        'iPhone XS/XS Max/XR','iPhone 8 Plus',
      ].includes(deviceName),
      deviceName
    };
  }

  // Check if it's an Android device
  if (/Android/i.test(userAgent)) {
    const androidVersionMatch = userAgent.match(/Android (\d+(\.\d+)?)/);
    if (androidVersionMatch) {
      const version = parseFloat(androidVersionMatch[1]);
      console.log("Version", version);
      return { isSupported: version > 13, userAgent };
    }
    return { isSupported: true, userAgent };
  }

  // Default to not supporting eSIM
  return { isSupported: false, userAgent };
};

const InstallESimPage = () => {
  const [esimInfo, setEsimInfo] = useState({ isSupported: false, userAgent: '' });

  useEffect(() => {
    const { isSupported, userAgent } = detectEsimSupport();
    setEsimInfo({ isSupported, userAgent });
  }, []);

  const redirectToEsimSetup = () => {
    const smdpAddress = 'consumer.e-sim.global';
    const activationCode = 'TN2024032517501135006332';
    const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;
    window.location.href = url;
  };

  return (
    <div>
      <h1>eSIM Installation</h1>
      <p>Device: {esimInfo.deviceName}</p>

      {esimInfo.isSupported ? (
        <>
        <button onClick={redirectToEsimSetup}>Install eSIM</button>
        </>
      ) : (
        <p>Your device does not support eSIM installation.</p>
      )}
    </div>
  );
};

export default InstallESimPage;



// ========================================================================================

// import { useEffect, useState } from 'react';

// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   const getIosDeviceName = () => {
//     const iosPatterns = [
//   { pattern: /iPhone.*OS 16_1/, model: 'iPhone 8 Plus' },
//   { pattern: /iPhone.*OS 16_7/, model: 'iPhone 11/11 Pro/11 Pro Max' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 12/12 mini/12 Pro/12 Pro Max' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 13/13 mini/13 Pro/13 Pro Max' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone SE (2nd generation)' },
//   { pattern: /iPhone.*OS 17_0/, model: 'iPhone 14/14 Plus/14 Pro/14 Pro Max' },
//   { pattern: /iPhone.*OS 17_1/, model: 'iPhone 15/15 Plus/15 Pro/15 Pro Max' }, 
//   { pattern: /iPhone.*OS 16_0/, model: 'iPhone XS/XS Max/XR' },
//   ];

//     console.log('User Agent:', userAgent);

//     for (const { pattern, model } of iosPatterns) {
//       if (pattern.test(userAgent)) {
//         return model;
//       }
//     }

//     return 'iOS Device';
//   };

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
//     const deviceName = getIosDeviceName();
//     return {
//       isSupported: [
//         'iPhone 11/11 Pro/11 Pro Max','iPhone 12/12 mini/12 Pro/12 Pro Max',
//         'iPhone 13/13 mini/13 Pro/13 Pro Max','iPhone SE (2nd generation)',
//         'iPhone 14/14 Plus/14 Pro/14 Pro Max','iPhone 15/15 Plus/15 Pro/15 Pro Max',
//         'iPhone XS/XS Max/XR','iPhone 8 Plus Plus'
//       ].includes(deviceName),
//       deviceName
//     };
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     const year = new Date().getFullYear();
//     return {
//       isSupported: year >= 2018,
//       deviceName: 'Android Device'
//     };
//   }

//   // Default to not supporting eSIM
//   return {
//     isSupported: false,
//     deviceName: 'Unknown Device'
//   };
// };

// const InstallESimPage = () => {
//   const [esimInfo, setEsimInfo] = useState({ isSupported: false, deviceName: 'Unknown Device' });

//   useEffect(() => {
//     const { isSupported, deviceName } = detectEsimSupport();
//     setEsimInfo({ isSupported, deviceName });
//   }, []);

//   // Function to redirect to the eSIM setup page for iOS
//   const redirectToEsimSetup = () => {
//     const smdpAddress = 'your_smdp_address'; 
//     const activationCode = 'your_activation_code';
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <h1>eSIM Installation</h1>
//       <p>Device: {esimInfo.deviceName}</p>
//       {esimInfo.isSupported ? (
//         <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device does not support eSIM installation.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;

// ============================================================================================================

// import React, { useState, useEffect } from 'react';

// const CheckIntentSupport = () => {
//   const [isSupported, setIsSupported] = useState(false);

//   useEffect(() => {
//     const testIntent = async () => {
//       const intentUrl = "intent://settings/#Intent;scheme=http;package=com.android.settings;end";
//       try {
//         // Create an iframe to test if the URL scheme is supported
//         const iframe = document.createElement('iframe');
//         iframe.style.display = 'none';
//         document.body.appendChild(iframe);

//         // Attempt to load the URL in the iframe
//         iframe.src = intentUrl;

//         // Wait a short period to determine if the URL is supported
//         setTimeout(() => {
//           // If the iframe fails to load or the user is redirected, assume not supported
//           document.body.removeChild(iframe);
//           setIsSupported(true); 
//         }, 1000);
//       } catch (error) {
//         setIsSupported(false);
//       }
//     };

//     testIntent();
//   }, []);

//   return (
//     <div>
//       {isSupported ? (
//         <button onClick={() => (window.location.href = "intent://settings/#Intent;scheme=http;package=com.android.settings;end")}>
//           Open Settings
//         </button>
//       ) : (
//         <p>Your device does not support this feature.</p>
//       )}
//     </div>
//   );
// };

// export default CheckIntentSupport;

// ============================================================================================================

// import React, { useState, useEffect } from 'react';

// // Combined JSON data and JS logic in one file
// const deviceList = {
//   iOS: [
//     "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone 11", "iPhone 11 Pro",
//     "iPhone 11 Pro Max", "iPhone SE (2nd generation)", "iPhone 12",
//     "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13",
//     "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 14",
//     "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"
//   ],
//   Android: [
//     "Pixel 2", "Pixel 3", "Pixel 3a", "Pixel 4", "Pixel 4a", "Pixel 5",
//     "Pixel 5a", "Samsung Galaxy S20", "Samsung Galaxy S20+", "Samsung Galaxy S20 Ultra",
//     "Samsung Galaxy S21", "Samsung Galaxy S21+", "Samsung Galaxy S21 Ultra", "OPPO A76"
//   ]
// };

// const checkDeviceSupport = (userAgent, deviceList) => {
//   const normalizedUserAgent = userAgent.toLowerCase();
//   console.log('Normalized User Agent:', normalizedUserAgent);

//   // Check for iOS devices
//   if (/iphone|ipad|ipod/.test(normalizedUserAgent)) {
//     const matchedDevice = deviceList.iOS.find(device =>
//       normalizedUserAgent.includes(device.toLowerCase())
//     );
//     return matchedDevice
//       ? { device: matchedDevice, isESIMSupported: true }
//       : { device: 'Unknown iPhone', isESIMSupported: false };
//   }

//   // Check for Android devices with specific checks
//   if (/android/.test(normalizedUserAgent)) {
//     // Specific checks for certain Android devices

//     const matchedDevice = deviceList.Android.find(device =>
//       normalizedUserAgent.includes(device.toLowerCase())
//     );
//     return matchedDevice
//       ? { device: matchedDevice, isESIMSupported: true }
//       : { device: 'Unknown Android Device', isESIMSupported: false };
//   }

//   return { device: 'Unknown Device', isESIMSupported: false };
// };

// // Main component to check eSIM support
// const InstallESimPage = () => {
//   const [device, setDevice] = useState('');
//   const [isESIMSupported, setIsESIMSupported] = useState(false);

//   useEffect(() => {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     console.log('User Agent:', userAgent); // For debugging

//     const result = checkDeviceSupport(userAgent, deviceList);
//     console.log('Detection Result:', result); // For debugging

//     setDevice(result.device);
//     setIsESIMSupported(result.isESIMSupported);
//   }, []);

//   return (
//     <div>
//       <h1>Device: {device}</h1>
//       {isESIMSupported ? (
//         <p>Your device supports eSIM.</p>
//       ) : (
//         <p>Your device does not support eSIM.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [deviceName, setDeviceName] = useState('Unknown Device');

//   useEffect(() => {
//     function getDeviceName() {
//       const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//       // Known Android device patterns
//       const androidDevicePatterns = [
//         { name: "Pixel 4", pattern: /Pixel 4/ },
//         { name: "Samsung Galaxy S21", pattern: /SM-G991/ },
//         { name: "Samsung Galaxy S20", pattern: /SM-G981/ },
//         { name: "OnePlus 8", pattern: /OnePlus8/ },
//         { name: "OnePlus 9", pattern: /LE211/ },
//         { name: "Huawei P30", pattern: /ELE-L29/ },
//         { name: "Xiaomi Mi 10", pattern: /M2001J2G/ },
//         { name: "OPPO A76", pattern: /CPH2375/ },
//         // Add more device patterns here
//       ];

//       // Detect Android devices and extract model name if available
//       if (/android/i.test(userAgent)) {
//         for (const device of androidDevicePatterns) {
//           if (device.pattern.test(userAgent)) {
//             return device.name;
//           }
//         }
//         return "Android Device"; // Default label if no specific model is matched
//       }

//       // Detect iOS devices and show type
//       if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         const match = userAgent.match(/(iPhone|iPad|iPod)/);
//         if (match && match[1]) {
//           return match[1]; // Return the device type
//         }
//         return "Unknown iOS Device";
//       }

//       return "Unknown Device";
//     }

//     setDeviceName(getDeviceName());
//   }, []);

//   return (
//     <div>
//       <p>{deviceName}</p>

//     <h1>hello</h1>
//     </div>
//   );
// }

// export default App;

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

// import React, { useState, useEffect } from 'react';

// const detectEsimSupport = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Check if it's an iOS device
//   if (/iPhone|iPad|iPod/i.test(userAgent)) {
   
//     const iOSVersionMatch = userAgent.match(/OS (\d+_\d+)/);
//     if (iOSVersionMatch) {
//       const version = iOSVersionMatch[1].replace('_', '.');
//       console.log("Version", version)
//       const supportedVersion = parseFloat(version) >= 12;
//       return supportedVersion;
//     }
//     return false;
//   }

//   // Check if it's an Android device
//   if (/Android/i.test(userAgent)) {
//     // Extract Android version from user agent string
//     const androidVersionMatch = userAgent.match(/Android (\d+(\.\d+)?)/);
//     if (androidVersionMatch) {
//       const version = parseFloat(androidVersionMatch[1]);
//       console.log("Version", version)
//       return version > 13;
//     }
//     // Default to supporting eSIM for newer Android versions if version cannot be parsed
//     return true;
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

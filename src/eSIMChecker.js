import { useEffect, useState } from "react";

// Function to detect platform and possible eSIM support based on user agent

const InstallESimPage = () => {
  const [esimSupported, setEsimSupported] = useState(true);

  useEffect(() => {
    const isEsimSupported = detectEsimSupport();
    setEsimSupported(isEsimSupported);
  }, []);

  const detectEsimSupport = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if it's an iOS device
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // List of iOS devices that support eSIM
      const supportedDevices = [
        "iPhone XS",
        "iPhone XS Max",
        "iPhone XR",
        "iPhone 11",
        "iPhone 11 Pro",
        "iPhone 11 Pro Max",
        "iPhone SE (2nd generation)",
        "iPhone 12",
        "iPhone 12 mini",
        "iPhone 12 Pro",
        "iPhone 12 Pro Max",
        "iPhone 13",
        "iPhone 13 mini",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone 14",
        "iPhone 14 Plus",
        "iPhone 14 Pro",
        "iPhone 14 Pro Max",
      ];

      // Check if userAgent contains any of the supported devices
      return supportedDevices.some((device) => userAgent.includes(device));
    }

    // Check if it's an Android device
    if (/Android/i.test(userAgent)) {
      // Android devices are more complex; generally, assume newer devices (from 2018 onwards) support eSIM.
      // You could add more specific checks based on device models, if known.
      // Example: Check for 'Pixel 4', 'Pixel 5', etc., if you have a comprehensive list.

      const year = new Date().getFullYear();

      // For this example, let's assume devices from 2018 onwards might support eSIM.

      return year >= 2018;
    }

    // Default to not supporting eSIM
    return false;
  };

  // Function to redirect to the eSIM setup page for iOS
  const redirectToEsimSetup = () => {
    const smdpAddress = "consumer.e-sim.global";
    const activationCode = "TN2024032517501135006332";
    const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

    window.location.href = url;
  };

  return (
    <div>
      <h1>eSIM Installation</h1>
      {esimSupported ? (
        <button onClick={redirectToEsimSetup}>Install eSIM</button>
      ) : (
        <p>Your device does not support eSIM installation.</p>
      )}
    </div>
  );
};

export default InstallESimPage;


// import React, { useEffect, useState } from 'react';

// const InstallESimPage = () => {
//   const [esimSupported, setEsimSupported] = useState(false);

//   useEffect(() => {
//     const checkEsimSupport = () => {
//       const userAgent = navigator.userAgent.toLowerCase();

//       // Simple check for known eSIM-supported devices
//       const esimDevices = [
//         'iphone',
//         'pixel',
//         'galaxy s',
//         'galaxy z',
//         'ipad',
//         'surface pro x',
//         'surface pro 7+',
//         'razr',
//         'xperia',
//         'oppo find'
//       ];

//       for (let device of esimDevices) {
//         if (userAgent.includes(device)) {
//           setEsimSupported(true);
//           return;
//         }
//       }

//       // If no match is found, we assume no eSIM support
//       setEsimSupported(false);
//     };

//     checkEsimSupport();
//   }, []);

//     const redirectToEsimSetup = () => {
//     const smdpAddress = 'consumer.e-sim.global'; 
//     const activationCode = 'TN2024032517501135006332'; 
//     const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

//     window.location.href = url;
//   };

//   return (
//     <div>
//       {esimSupported ? (
//        <button onClick={redirectToEsimSetup}>Install eSIM</button>
//       ) : (
//         <p>Your device not support eSIM.</p>
//       )}
//     </div>
//   );
// };

// export default InstallESimPage;

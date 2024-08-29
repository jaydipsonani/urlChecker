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


import { useEffect, useState } from "react";

const InstallESimPage = () => {
  const [deviceName, setDeviceName] = useState("Unknown Device");
  const [esimSupported, setEsimSupported] = useState(false);
  const [web, setWeb] = useState("");

  useEffect(() => {
    const { name, esimSupport } = detectDeviceInfo();
    console.log("Detected Device:", name);
    console.log("eSIM Supported:", esimSupport);
    setDeviceName(name);
    setEsimSupported(esimSupport);
  }, []);

  const detectDeviceInfo = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User Agent:", userAgent); // Debugging line

    let deviceInfo = { name: "Device Not Recognized", esimSupport: false };

    // Check if it's an iOS device
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // Define supported iOS devices if needed
      const supportedIosDevices = [
        /iPhone (?:XS|XS Max|XR|11|11 Pro|11 Pro Max|SE \(2nd generation\)|12|12 mini|12 Pro|12 Pro Max|13|13 mini|13 Pro|13 Pro Max|14|14 Plus|14 Pro|14 Pro Max)/i
      ];

      if (supportedIosDevices.some((regex) => regex.test(userAgent))) {
        deviceInfo = { name: "Supported iOS Device", esimSupport: true };
      } else {
        deviceInfo = { name: "iOS Device", esimSupport: false };
      }
    }

    // Check if it's an Android device
    else if (/Android/i.test(userAgent)) {
      // Define supported Android devices if needed
      const supportedAndroidDevices = [
        /Pixel (?:3|3 XL|4|4 XL|5|6|6 Pro)/i,
        /Galaxy (?:S20|S20\+|S20 Ultra|Note 20|Note 20 Ultra|Z Fold 2|Z Fold 3|Z Fold 4|Z Flip|Z Flip 3|Z Flip 4|S21|S21\+|S21 Ultra)/i,
        /Motorola Razr (?:2019|5G)/i,
        /Huawei (?:P40|P40 Pro|Mate 40 Pro)/i
      ];

      if (supportedAndroidDevices.some((regex) => regex.test(userAgent))) {
        deviceInfo = { name: "Supported Android Device", esimSupport: true };
      } else {
        deviceInfo = { name: "Android Device", esimSupport: false };
      }
    } else {
      setWeb("hello world"); // This will display if neither iOS nor Android is matched
    }

    return deviceInfo;
  };

  const redirectToEsimSetup = () => {
    const smdpAddress = "consumer.e-sim.global";
    const activationCode = "TN2024032517501135006332";
    const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationCode}`;

    window.location.href = url;
  };

  return (
    <div>
      <h1>eSIM Installation</h1>
      <p>Device: {deviceName}</p> {/* Display the detected device name */}
      {esimSupported ? (
        <button onClick={redirectToEsimSetup}>Install eSIM</button>
      ) : (
        <p>Your device does not support eSIM installation.</p>
      )}
      <h1>{web}</h1>
    </div>
  );
};

export default InstallESimPage;







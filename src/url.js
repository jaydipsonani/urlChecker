import { useEffect } from "react";

// // Function to detect platform (simplified check)

// const YourComponent = () => {

//   // Example usage
//   const smdpAddress = 'consumer.e-sim.global';
//   const activationToken = 'TN2024032517501135006332';

//   useEffect(() => {
//     installESimProfile(smdpAddress, activationToken);
//   }, []);

// const detectPlatform = () => {
//   if (navigator.userAgent.match(/Android/i)) {
//     return 'Android';
//   } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
//     return 'Web';
//   } else {
//     return 'Web';
//   }
// };

// const installESimProfile = (smdpAddress, activationToken) => {

//   let url = '';

//   const platform = detectPlatform();
//   console.log("platform",platform)
//   if (platform === 'Android') {
//     url = `LPA:1$${smdpAddress}$${activationToken}`;
//   } else if (platform === 'Web') {
//     url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationToken}`;
//   } else {
//     console.error('Unsupported platform');
//     return;
//   }

//   // Open URL
//   // window.location.href = url;
//   window.open(url, '_blank');
// };

//   return (
//     <div>
//       <button onClick={installESimProfile} >click</button>
//     </div>
//   );
// };

// export default YourComponent;

// =========================================================================================================

const YourComponent = () => {
  // Ensure these variables are defined as strings
  const smdpAddress = "consumer.e-sim.global";
  const activationToken = "TN2024032517501135006332";

  // useEffect(() => {
  // Directly call the function with the defined strings
  // const smdpAddress = "consumer.e-sim.global";
  // const activationToken = "TN2024032517501135006332";
  //   installESimProfile(smdpAddress, activationToken);
  // }, [smdpAddress, activationToken]);

  const detectPlatform = () => {
    if (navigator.userAgent.match(/Android/i)) {
      return "Android";
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      return "iOS";
    } else {
      return "Web";
    }
  };

  const installESimProfile = () => {
    // Check if both parameters are correctly passed
    if (!smdpAddress || !activationToken) {
      console.error("smdpAddress or activationToken is undefined or invalid");
      return;
    }

    let url = "";

    const platform = detectPlatform();
    console.log("Platform:", platform);
    if (platform === "Android") {
      url = `LPA:1$${smdpAddress}$${activationToken}`;
    } else if (platform === "iOS") {
      url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationToken}`;
    } else {
      console.error("Unsupported platform");
      return;
    }
    console.log("URL:", url);

    // window.location.href = url;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={installESimProfile}>Click</button>
    </div>
  );
};

export default YourComponent;

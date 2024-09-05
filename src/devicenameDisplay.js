import DeviceDetector from 'device-detector-js';

const DeviceInfo = () => {
  const deviceDetector = new DeviceDetector();
  const userAgent = navigator.userAgent; // Get the user agent from the browser
  const device = deviceDetector.parse(userAgent);

  console.log(device);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Type: {device.device.type}</p>
      <p>Brand: {device.device.brand}</p>
      <p>Model: {device.device.model}</p>
      <p>OS: {device.os.name}</p>
      <p>Browser: {device.client.name}</p>
    </div>
  );
};

export default DeviceInfo;

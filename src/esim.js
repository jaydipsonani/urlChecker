import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({ model: '', type: '' });

  useEffect(() => {
    // Create a new instance of UAParser
    const parser = new UAParser();
    // Get device information
    const result = parser.getResult();
    const { device } = result;
    
    // Update state with device information
    setDeviceInfo({
      model: device.model || 'Unknown Model',
      type: device.type || 'Unknown Type',
    });
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p><strong>Device Model:</strong> {deviceInfo.model}</p>
      <p><strong>Device Type:</strong> {deviceInfo.type}</p>
    </div>
  );
};

export default DeviceInfo;

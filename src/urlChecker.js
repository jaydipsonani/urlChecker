import React, { useState } from "react";

const URLChecker = () => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a URL");
      setIsValid(null);
      return;
    }
    setLoading(true);
    setError("");
    setIsValid(null);

    try {
      await fetch(url, { method: "HEAD", mode: "no-cors" });
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
      console.log("error", error);
    }
    setLoading(false);
  };

  const handleRedirect = async () => {
    if (url.trim()) {
      window.open(url, "_blank");

      setUrl("");
      setIsValid(null);
      setError("");
    } else {
      setError("URL is not valid or reachable");
    }
  };

  const smdpAddress = "consumer.e-sim.global";
  const activationToken = "TN2024032517501135006332";

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
    let url = "";

    const platform = detectPlatform();

    console.log("platform", platform);
    if (platform === "Android") {
      url = `LPA:1$${smdpAddress}$${activationToken}`;
    } else if (platform === "iOS") {
      url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$${smdpAddress}$${activationToken}`;
    } else {
      console.error("Unsupported platform");
      return;
    }
    console.log("URL: ", url);
    window.open(url, "_blank");
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ width: "300px", padding: "5px", marginRight: "10px" }}
      />
      <button
        style={{ cursor: "pointer", height: "27px" }}
        onClick={checkUrl}
        disabled={loading}
      >
        {loading ? "Checking..." : "Check URL"}
      </button>
      <button
        onClick={handleRedirect}
        style={{ cursor: "pointer", height: "27px", marginLeft: "10px" }}
      >
        Redirect URL
      </button>
    
      <button
        style={{ cursor: "pointer", height: "27px", marginLeft: "10px" }}
        onClick={installESimProfile}
      >
        click
      </button>

      {error && <div style={{ marginTop: "10px", color: "red" }}>{error}</div>}

      {isValid !== null && !error && (
        <div style={{ marginTop: "10px", color: isValid ? "green" : "red" }}>
          {isValid ? "URL is working!" : "URL is not working!"}
        </div>
      )}
    </div>
  );
};

export default URLChecker;

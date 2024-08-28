

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
      // Check if the URL is reachable
      await fetch(url, { method: "HEAD", mode: "no-cors" });
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
    setLoading(false);
  };

  const handleRedirect = async () => {
    // if (isValid === null) {
    //   await checkUrl();
    // }

    if (url.trim()) {
      // Redirect to the URL in a new tab
      window.open(url, "_blank");

      setUrl("");
      setIsValid(null);
      setError("");

    } else {
      setError("URL is not valid or reachable");
    }
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

      {error && <div style={{ marginTop: "10px", color: "red" }}>{error}</div>}

      {isValid !== null && !error && (
        <div style={{ marginTop: "10px", color: isValid ? "green" : "red" }}>
          {isValid ? "URL is working!" : "URL is not working!"}
          {console.log("isValid", isValid)}
        </div>
      )}
    </div>
  );
};

export default URLChecker;


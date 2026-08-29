"use client";

import { useEffect, useState } from "react";
import "./LocationLoader.css";

export default function LocationLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLocationOpen(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const requestLocation = () => {
    setError("");

    if (!navigator.geolocation) {
      setError("Location services are not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setLocation("Your Location");
        setLocationOpen(false);
      },
      () => {
        setError(
          "Location permission was denied. Please select your area manually."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const selectLocation = (area) => {
    setLocation(area);
    setLocationOpen(false);
  };

  if (loading) {
    return (
      <div className="location-loader">
        <div className="loader-content">

          <div className="loader-logo">
            <span>BURGER</span>
            <strong>IN TOWN</strong>
          </div>

          <div className="loader-line">
            <span />
          </div>

          <p>
            LOADING THE TOWN...
          </p>

        </div>
      </div>
    );
  }

  return (
    <>
      {children}

      {locationOpen && (
        <div className="location-overlay">

          <div className="location-popup">

            <button
              className="location-close"
              onClick={() => setLocationOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <span className="location-kicker">
              BURGER IN TOWN
            </span>

            <div className="location-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <h2>
              WHERE ARE
              <span>YOU LOCATED?</span>
            </h2>

            <p>
              Allow location access to find the
              nearest Burger In Town and check
              delivery availability.
            </p>

            <button
              type="button"
              className="allow-location"
              onClick={requestLocation}
            >
              <span>
                USE MY LOCATION
              </span>

              <b>
                ↗
              </b>
            </button>

            <div className="location-divider">
              <span />
              OR
              <span />
            </div>

            <div className="area-options">

              <button
                type="button"
                onClick={() =>
                  selectLocation("Rawalpindi")
                }
              >
                <span>RAWALPINDI</span>
                <b>↗</b>
              </button>

              <button
                type="button"
                onClick={() =>
                  selectLocation("Islamabad")
                }
              >
                <span>ISLAMABAD</span>
                <b>↗</b>
              </button>

            </div>

            {error && (
              <p className="location-error">
                {error}
              </p>
            )}

            <small>
              Your location is only used to determine
              delivery availability.
            </small>

          </div>

        </div>
      )}

      {location && (
        <div className="selected-location">
          <span>DELIVERING TO</span>
          <strong>{location}</strong>
        </div>
      )}
    </>
  );
}
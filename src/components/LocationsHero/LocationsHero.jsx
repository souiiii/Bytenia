import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";
import "./LocationsHero.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Exact coordinates matching earlier server pages (Dallas, Chicago, Miami, London, Amsterdam, Frankfurt, Sydney)
const markers = [
  { id: "dallas", flag: "us", coordinates: [-96.797, 32.7767] },
  { id: "chicago", flag: "us", coordinates: [-87.6298, 41.8781] },
  { id: "miami", flag: "us", coordinates: [-80.1918, 25.7617] },
  { id: "london", flag: "gb", coordinates: [-0.1276, 51.5072] },
  { id: "amsterdam", flag: "nl", coordinates: [4.9041, 52.3676] },
  { id: "frankfurt", flag: "de", coordinates: [8.6821, 50.1109] },
  { id: "sydney", flag: "au", coordinates: [151.2093, -33.8688] },
];

const LocationsHero = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePinClick = (id) => {
    console.log(`Pin clicked for popup foundation: ${id}`);
    // Popup logic will go here per user direction later.
  };

  return (
    <section className="locations-hero">
      <div className="container">
        {/* Top Dark Datacenters Card */}
        <div className="locations-datacenter-card">
          <h1 className="hero-title text-white">Our Global Datacenters</h1>
          <p className="hero-description text-gray">
            High-performance servers strategically located around the world to
            serve your business needs with speed, reliability, and flexibility.
          </p>
        </div>

        {/* Map Widget */}
        <div className="map-container">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 120, center: [0, 45] }}
            width={800}
            height={500}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup
              zoom={1}
              minZoom={1}
              maxZoom={4}
              onMoveEnd={(position) => setZoomLevel(position.zoom)}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => geo.properties.name !== "Antarctica")
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#cbced8"
                        stroke="#ffffff"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#cbd5e1", outline: "none" },
                          pressed: { fill: "#94a3b8", outline: "none" },
                        }}
                      />
                    ))
                }
              </Geographies>

              {/* Shadows Definition for markers */}
              <defs>
                <filter
                  id="marker-shadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="3"
                    floodColor="rgba(0,0,0,0.15)"
                  />
                </filter>
                <clipPath id="flag-clip">
                  <circle cx="0" cy="-26" r="7" />
                </clipPath>
              </defs>

              {markers.map(({ id, flag, coordinates }) => (
                <Marker
                  key={id}
                  coordinates={coordinates}
                  onClick={() => handlePinClick(id)}
                >
                  <g
                    className="map-marker-group"
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.1s",
                      transform: `scale(calc(${1 / zoomLevel} * var(--pin-scale, 1)))`,
                    }}
                  >
                    {/* Teardrop style pin background */}
                    <path
                      d="M 0 0 C -8 -10 -14 -18 -14 -26 C -14 -33.7 -7.7 -40 0 -40 C 7.7 -40 14 -33.7 14 -26 C 14 -18 8 -10 0 0 Z"
                      fill="#ffffff"
                      filter="url(#marker-shadow)"
                      className="marker-bg"
                    />
                    {/* Tiny accent ring */}
                    <circle cx="0" cy="-26" r="8" fill="#e2e8f0" />
                    {/* Inner active flag */}
                    <image
                      href={`https://flagcdn.com/w40/${flag}.png`}
                      x="-7"
                      y="-33"
                      width="14"
                      height="14"
                      clipPath="url(#flag-clip)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Bottom Text Hook */}
        <div
          className="text-center"
          style={{ marginTop: "20px", marginBottom: "80px" }}
        >
          <h3
            className="h3"
            style={{
              fontSize: "1.25rem",
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}
          >
            MULTI-REGION ARCHITECTURE READY
          </h3>
          <p
            className="subtitle"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
            }}
          >
            Deploy in one location or build geographically distributed
            infrastructure with full control over performance and resource
            allocation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationsHero;

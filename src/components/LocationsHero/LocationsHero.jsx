import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule
} from 'react-simple-maps';
import './LocationsHero.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Approximate coordinates matching the mockups (US West, US East, Central Europe, Australia)
const markers = [
  { id: 'us-west', coordinates: [-118.2437, 34.0522] },
  { id: 'us-east', coordinates: [-74.006, 40.7128] },
  { id: 'eu-central', coordinates: [8.6821, 50.1109] },
  { id: 'apac', coordinates: [151.2093, -33.8688] }
];

const LocationsHero = () => {
  const [activePin, setActivePin] = useState(null);

  const handlePinClick = (id) => {
    setActivePin(id);
    console.log(`Pin clicked for popup foundation: ${id}`);
    // Popup logic will go here per user direction later.
  };

  return (
    <section className="locations-hero">
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Top Dark Datacenters Card */}
        <div className="locations-datacenter-card">
          <h1 className="h1 text-white">Our Global<br/>Datacenters</h1>
          <p className="text-gray" style={{ maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            High-performance infrastructure strategically located worldwide to deliver lower latency, higher availability, and scalability to users globally.
          </p>
        </div>

        {/* Map Widget */}
        <div className="map-container">
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ scale: 140, center: [0, 25] }}
            width={800}
            height={450}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[0, 0], [800, 450]]}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e2e8f0"
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
                <filter id="marker-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.15)" />
                </filter>
              </defs>

              {markers.map(({ id, coordinates }) => (
                <Marker key={id} coordinates={coordinates} onClick={() => handlePinClick(id)}>
                  <g 
                    className="map-marker-group" 
                    style={{ cursor: "pointer", transition: "transform 0.2s" }}
                  >
                    {/* Teardrop style pin background */}
                    <path
                      d="M 0 0 C -8 -10 -14 -18 -14 -26 C -14 -33.7 -7.7 -40 0 -40 C 7.7 -40 14 -33.7 14 -26 C 14 -18 8 -10 0 0 Z"
                      fill="#ffffff"
                      filter="url(#marker-shadow)"
                      className="marker-bg"
                    />
                    {/* Inner active dot */}
                    <circle cx="0" cy="-26" r="6" fill="#0f121b" className="marker-dot" />
                    {/* Tiny accent color */}
                    <circle cx="0" cy="-26" r="2" fill="#fff" />
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Bottom Text Hook */}
        <div className="text-center" style={{ marginTop: '20px', marginBottom: '80px' }}>
          <h3 className="h3" style={{ fontSize: '1.125rem', letterSpacing: '0.5px', marginBottom: '16px' }}>MULTI-REGION<br/>ARCHITECTURE READY</h3>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
            Deploy your infrastructure strategically built on multi-tier secure data centers providing lowest edge routing, robust secure connections, and ultimate resilience for enterprise operations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LocationsHero;

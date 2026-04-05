import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";
import { ArrowsIn, X } from "@phosphor-icons/react";
import "./LocationsHero.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Exact coordinates matching earlier server pages (Dallas, Chicago, Miami, London, Amsterdam, Frankfurt, Sydney)
const markers = [
  { id: "dallas", flag: "us", coordinates: [-96.797, 32.7767] },
  { id: "chicago", flag: "us", coordinates: [-87.6298, 41.8781] },
  { id: "miami", flag: "us", coordinates: [-80.1918, 25.7617] },
  { id: "frankfurt", flag: "de", coordinates: [8.6821, 50.1109] },
  { id: "amsterdam", flag: "nl", coordinates: [4.9041, 52.3676] },
  { id: "london", flag: "gb", coordinates: [-0.1276, 51.5072] },
  { id: "sydney", flag: "au", coordinates: [151.2093, -33.8688] },
];

const locationDetails = {
  sydney: {
    title: "Sydney, Australia",
    address: "Unit B, 200 Bourke Road, Alexandria, Sydney NSW 2015, Australia",
    description: "The Equinix SY5 facility is a high-density Sydney location built for production workloads that need predictable performance, strong physical security, and access to Australia's most interconnected carrier and cloud ecosystems. As part of the broader Equinix Sydney campus, SY5 supports direct fiber cross-connect options into other Sydney IBX sites and delivers private, low-latency connectivity to leading clouds, networks, and peering services.",
    infrastructure: [
      "Dedicated bare-metal deployments in a carrier-dense Sydney campus",
      "N+1 electrical redundancy with N+1 generator-backed standby power",
      "Interconnection services including Cross Connect, Equinix Fabric, and Equinix Internet Exchange",
      "Enterprise operational standards including ISO 27001, PCI DSS, SOC 1 Type II, SOC 2 Type II, and LEED"
    ],
    summary: "Sydney is well-suited for APAC expansion, latency-sensitive application hosting, and cloud-adjacent architectures that benefit from dense network choice and private connectivity options.",
    flag: "au"
  },
  london: {
    title: "London, United Kingdom",
    address: "20 Lanrick Road, London E14 OJF, United Kingdom",
    description: "IP House operates a purpose-built Docklands facility designed for enterprise colocation and dedicated infrastructure, positioned for low-latency connectivity into London's core interconnection ecosystem. The site is aligned to Uptime Institute Tier III classification and is built around resilient power, monitoring, and security systems for always-on workloads.",
    infrastructure: [
      "Purpose-built, enterprise-class colocation and dedicated servers in London Docklands",
      "Uptime Institute Tier III classification for resilient operations",
      "24/7 technical engineering support and on-site operations",
      "Power, cooling, monitoring, and physical security designed for production environments"
    ],
    summary: "London is well-suited for UK and European application hosting, latency-sensitive services, and network-adjacent deployments that benefit from Docklands connectivity.",
    flag: "gb"
  },
  miami: {
    title: "Miami, USA",
    address: "36 NE 2nd Street, Miami, FL 33132, United States",
    description: "Digital Realty's downtown Miami facility is positioned as a major international connectivity gateway, optimized for high-bandwidth traffic and routes into Latin America. It is engineered for extreme weather resilience, including Category 5 hurricane survivability.",
    infrastructure: [
      "International gateway positioning for Latin America and South America connectivity",
      "Flexible space options from single cabinets to private suites",
      "Secure colocation environment designed for carrier-quality operational demands",
      "Located outside the 100-year flood zone"
    ],
    summary: "Miami is well-suited for LatAm-focused platforms, international network hubs, and edge-adjacent deployments that prioritize global reach and interconnection density.",
    flag: "us"
  },
  amsterdam: {
    title: "Amsterdam, Nederlands",
    address: "J.W. Lucasweg 35, 2031 BE Haarlem, Netherlands",
    description: "Iron Mountain Data Centers AMS1 is a campus-style facility engineered for secure, compliance-forward hosting, with a focus on resilient design and carrier-neutral connectivity in the Amsterdam metro area. The site supports regulated workloads and is aligned with a broad set of security and compliance frameworks.",
    infrastructure: [
      "Carrier-neutral facility with access to on-site carriers and Amsterdam peering options (including AMS-IX and NL-ix)",
      "2N/N+1 redundancy design with concurrently maintainable infrastructure",
      "Enhanced physical and operational security layers designed for high-regulation environments",
      "Compliance support and certifications including ISO 27001 and SOC reporting, with PCI-DSS support across the platform"
    ],
    summary: "Amsterdam is well-suited for EU-west deployments, compliance-driven platforms, and network-adjacent infrastructure that benefits from regional peering and carrier diversity.",
    flag: "nl"
  },
  dallas: {
    title: "Dallas, USA",
    address: "1950 N Stemmons Fwy, Dallas, TX 75207, United States",
    description: "The Equinix DA1 facility is a vital interconnection hub offering low-latency connectivity to telecommunications networks and enterprise customers across the American Southwest.",
    infrastructure: [
      "Strategic location in the Infomart, a premier interconnection facility",
      "Dense ecosystem of cloud providers, ISPs, and enterprise networks",
      "Direct connections to major Latin American networks",
      "Robust power and cooling infrastructure with 2N electrical redundancy"
    ],
    summary: "Dallas is ideal for North American enterprise deployments requiring robust interconnection options and direct bridges into LatAm networks.",
    flag: "us"
  },
  chicago: {
    title: "Chicago, USA",
    address: "350 E Cermak Rd, Chicago, IL 60616, United States",
    description: "Located in one of the world's largest data centers, our Chicago deployment leverages massive carrier density and strategic Midwestern positioning to serve latency-sensitive workloads.",
    infrastructure: [
      "Premier 350 E Cermak facility offering unparalleled network density",
      "Direct access to top financial exchanges and enterprise networks",
      "Sustainable energy initiatives and advanced cooling systems",
      "N+1 power and cooling redundancy for resilient enterprise operations"
    ],
    summary: "Chicago serves as a crucial hub for financial services, enterprise colocation, and low-latency deployments targeting deep North American routing.",
    flag: "us"
  },
  frankfurt: {
    title: "Frankfurt, Germany",
    address: "Kruppstraße 121, 60388 Frankfurt am Main, Germany",
    description: "The Interxion FRA campus is a leading European data center hub, providing unmatched access to DE-CIX, Europe's largest internet exchange, and deep connectivity into core European markets.",
    infrastructure: [
      "Direct access to DE-CIX and hundreds of international carriers",
      "Purpose-built for high-density cloud computing and enterprise workloads",
      "Adherence to strict European data sovereignty and compliance standards",
      "100% renewable energy commitments across the facility operations"
    ],
    summary: "Frankfurt is the definitive choice for Central European deployments, high-volume internet peering, and enterprise architectures demanding high interconnect density.",
    flag: "de"
  }
};

const LocationsHero = () => {
  const [position, setPosition] = useState({ coordinates: [0, 45], zoom: 1 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeLocation, setActiveLocation] = useState(null);

  const closeModal = () => setActiveLocation(null);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const handleMoveEnd = (pos) => {
    setPosition(pos);
    setZoomLevel(pos.zoom);
  };

  const handleResetMap = () => {
    const startZoom = position.zoom;
    const startCenter = position.coordinates;
    const endZoom = 1;
    const endCenter = [0, 45];

    const duration = 400;
    const startTime = performance.now();

    const animate = (time) => {
      let progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;

      // Calculate easing (easeOutCubic)
      const ease = 1 - Math.pow(1 - progress, 3);

      const currentZoom = startZoom + (endZoom - startZoom) * ease;
      const currentX = startCenter[0] + (endCenter[0] - startCenter[0]) * ease;
      const currentY = startCenter[1] + (endCenter[1] - startCenter[1]) * ease;

      setPosition({ coordinates: [currentX, currentY], zoom: currentZoom });
      setZoomLevel(currentZoom);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const isDefaultPosition =
    zoomLevel === 1 &&
    Math.abs(position.coordinates[0] - 0) < 0.01 &&
    Math.abs(position.coordinates[1] - 45) < 0.01;

  const handlePinClick = (id) => {
    setActiveLocation(id);
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
          {/* Modal Popup overlay natively resolving active selections */}
          {activeLocation && locationDetails[activeLocation] && (
            <div className="modal-overlay" onClick={handleOverlayClick}>
              <div className="location-modal-card">
                <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                  <X size={20} weight="bold" color="#fff" />
                </button>

                <div className="modal-header">
                  <div className="modal-teardrop">
                    <img src={`https://flagcdn.com/w40/${locationDetails[activeLocation].flag}.png`} alt="Country Flag" />
                  </div>
                  <div className="modal-header-text">
                    <h2>{locationDetails[activeLocation].title}</h2>
                    <p>{locationDetails[activeLocation].address}</p>
                  </div>
                </div>

                <p className="modal-desc">
                  {locationDetails[activeLocation].description}
                </p>

                <div className="modal-infrastructure">
                  <h3>INFRASTRUCTURE OVERVIEW</h3>
                  <ul>
                    {locationDetails[activeLocation].infrastructure.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="modal-summary">
                  {locationDetails[activeLocation].summary}
                </p>

                <div className="modal-buttons">
                  <Link to="/enterprise" className="modal-pill-btn">Enterprise Dedicated Servers</Link>
                  <Link to="/cost-optimized" className="modal-pill-btn">Cost-Optimized Servers</Link>
                  <Link to="/vds" className="modal-pill-btn">Virtual Dedicated Servers</Link>
                </div>
              </div>
            </div>
          )}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 120, center: [0, 45] }}
            width={800}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              minZoom={1}
              maxZoom={8}
              translateExtent={[
                [0, 0],
                [800, 500],
              ]}
              onMoveEnd={handleMoveEnd}
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

          {!isDefaultPosition && (
            <button
              className="reset-map-btn"
              onClick={handleResetMap}
              title="Reset Map"
              aria-label="Reset Map"
            >
              <ArrowsIn size={20} weight="bold" />
            </button>
          )}
        </div>

        {/* Bottom Text Hook */}
        <div className="text-center" style={{ marginTop: "20px" }}>
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

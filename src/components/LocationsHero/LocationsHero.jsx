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
import { serversData as enterpriseData } from "../EnterpriseServers/EnterpriseServersList";
import { serversData as costOptimizedData } from "../CostOptimizedServers/CostOptimizedServers";
import { serversData as vdsData } from "../VdsServers/VdsServers";
import "./LocationsHero.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


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
    address: "1221 Coit Road, Plano, TX 75075, United States",
    description: "Evocative DAL6 is a Dallas metro facility built for scalable colocation and dedicated deployments, with a focus on uptime-driven design and audited operational controls. The site is supported by redundant power and cooling architecture and is positioned for strong regional connectivity within Texas, and surrounding states.",
    infrastructure: [
      "Dedicated bare-metal and colocation options for production workloads",
      "N+1 redundancy across UPS, cooling, and standby power systems",
      "Meet-Me Room (MMR) for carrier interconnect and cross-connect workflows",
      "Certifications include HIPAA, PCI-DSS, SOC 2 Type II, SOC 3, ISAE 3402, SSAE 18, and LEED"
    ],
    summary: "Dallas is well-suited for US central deployments, multi-region architectures, and latency-balanced application hosting across North America.",
    flag: "us"
  },
  chicago: {
    title: "Chicago, USA",
    address: "350 E Cermak Road, 5th Floor, Chicago, Illinois 60616, United States",
    description: "The Equinix Chicago campus is positioned in one of the world's major financial hubs and is designed for interconnection-focused deployments that prioritize performance, predictable latency, and direct access to dense network and cloud ecosystems.",
    infrastructure: [
      "Interconnection-forward colocation designed to enhance performance and meet latency targets",
      "N+1 electrical system and cooling redundancy",
      "Private connectivity options via Cross Connects and Equinix Fabric",
      "Enterprise compliance and operational standards, including ISO 27001, PCI DSS, SOC 1 Type II, SOC 2 Type II, HIPAA, and NIST 800-53/FISMA High"
    ],
    summary: "Chicago is well-suited for US-central hosting, financial and latency-sensitive workloads, and business continuity architectures that benefit from proximity to major exchanges and dense interconnection ecosystems.",
    flag: "us"
  },
  frankfurt: {
    title: "Frankfurt, Germany",
    address: "Eschborner Landstraße 100, Frankfurt am Main, Germany",
    description: "NTT DATA FRA1 is a large-scale campus designed for high-availability enterprise and hyperscale requirements, with direct access to major carrier hubs, cloud networks, and DE-CIX. The facility is built around resilient electrical and mechanical systems to support continuously running production infrastructure.",
    infrastructure: [
      "Campus-scale footprint with multiple purpose-built data center buildings",
      "Connectivity into major carrier hubs, cloud networks, and DE-CIX",
      "2N UPS architecture with dual A- and B-supply systems",
      "Multiple certifications available across the Global Data Centers platform including ISO/IEC 27001, ISO 50001, PCI DSS, ISAE 3402/SOC 1, and ISAE 3000/SOC 2"
    ],
    summary: "Frankfurt is well-suited for EU-central hosting, financial and latency-sensitive applications, and architectures that benefit from dense peering and cloud-adjacent connectivity.",
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
        
        <div className="locations-datacenter-card">
          <h1 className="hero-title text-white">Our Global Datacenters</h1>
          <p className="hero-description text-gray">
            High-performance servers strategically located around the world to
            serve your business needs with speed, reliability, and flexibility.
          </p>
        </div>

        
        <div className="map-container">
          
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
                  {enterpriseData.some(s => s.city.toLowerCase() === activeLocation.toLowerCase()) && (
                    <Link to={`/enterprise?loc=${activeLocation}`} className="modal-pill-btn">Enterprise Dedicated Servers</Link>
                  )}
                  {costOptimizedData.some(s => s.city.toLowerCase() === activeLocation.toLowerCase()) && (
                    <Link to={`/cost-optimized?loc=${activeLocation}`} className="modal-pill-btn">Cost-Optimized Servers</Link>
                  )}
                  {vdsData.some(s => s.city.toLowerCase() === activeLocation.toLowerCase()) && (
                    <Link to={`/vds?loc=${activeLocation}`} className="modal-pill-btn">Virtual Dedicated Servers</Link>
                  )}
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
                    
                    <path
                      d="M 0 0 C -8 -10 -14 -18 -14 -26 C -14 -33.7 -7.7 -40 0 -40 C 7.7 -40 14 -33.7 14 -26 C 14 -18 8 -10 0 0 Z"
                      fill="#ffffff"
                      filter="url(#marker-shadow)"
                      className="marker-bg"
                    />
                    
                    <circle cx="0" cy="-26" r="8" fill="#e2e8f0" />
                    
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

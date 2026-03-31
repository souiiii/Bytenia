import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ServerFilterModal.css';

const ServerFilterModal = ({ isOpen, onClose, onApply }) => {
  const [ramRange, setRamRange] = useState([8, 128]);
  const [cpuVal, setCpuVal] = useState("Show All");
  const [storageVal, setStorageVal] = useState("Show All");

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({
      cpu: cpuVal,
      storage: storageVal,
      ramMin: ramRange[0],
      ramMax: ramRange[1]
    });
    onClose();
  };

  const handleSliderChange = (val) => {
    setRamRange(val);
  };

  const handleMinChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setRamRange([val, ramRange[1]]);
  };

  const handleMaxChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setRamRange([ramRange[0], val]);
  };

  return (
    <div className="filter-modal-overlay" onClick={onClose}>
      <div className="filter-modal-content" onClick={e => e.stopPropagation()}>
        
        <div className="filter-group">
          <label className="filter-label">CPU</label>
          <select 
            className="filter-select" 
            value={cpuVal} 
            onChange={(e) => setCpuVal(e.target.value)}
          >
            <option value="Show All">Show All</option>
            <option value="Intel Xeon">Intel Xeon</option>
            <option value="AMD EPYC">AMD EPYC</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">RAM</label>
          
          <div className="slider-wrapper">
            <Slider
              range
              min={8}
              max={128}
              value={ramRange}
              onChange={handleSliderChange}
            />
          </div>

          <div className="ram-inputs">
            <span className="gb-label">GB</span>
            <input 
              type="number" 
              className="ram-input" 
              value={ramRange[0]} 
              onChange={handleMinChange}
            />
            <input 
              type="number" 
              className="ram-input" 
              value={ramRange[1]} 
              onChange={handleMaxChange}
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Storage</label>
          <select 
            className="filter-select" 
            value={storageVal} 
            onChange={(e) => setStorageVal(e.target.value)}
          >
            <option value="Show All">Show All</option>
            <option value="NVMe SSD">NVMe SSD</option>
            <option value="SATA">SATA</option>
          </select>
        </div>

        <div className="filter-actions">
          <button className="btn-primary filter-apply-btn" onClick={handleApply}>Apply Filters</button>
          <button className="btn-outline filter-cancel-btn" onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
};

export default ServerFilterModal;

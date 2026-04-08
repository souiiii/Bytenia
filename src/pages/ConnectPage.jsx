import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaretDown, TelegramLogo, DiscordLogo } from '@phosphor-icons/react';
import './ConnectPage.css';

const COUNTRY_CODES = [
  { id: 'us', name: 'United States', code: '+1', flag: 'us' },
  { id: 'ca', name: 'Canada', code: '+1', flag: 'ca' },
  { id: 'gb', name: 'United Kingdom', code: '+44', flag: 'gb' },
  { id: 'af', name: 'Afghanistan', code: '+93', flag: 'af' },
  { id: 'al', name: 'Albania', code: '+355', flag: 'al' },
  { id: 'dz', name: 'Algeria', code: '+213', flag: 'dz' },
  { id: 'ad', name: 'Andorra', code: '+376', flag: 'ad' },
  { id: 'ao', name: 'Angola', code: '+244', flag: 'ao' },
  { id: 'ar', name: 'Argentina', code: '+54', flag: 'ar' },
  { id: 'am', name: 'Armenia', code: '+374', flag: 'am' },
  { id: 'au', name: 'Australia', code: '+61', flag: 'au' },
  { id: 'at', name: 'Austria', code: '+43', flag: 'at' },
  { id: 'az', name: 'Azerbaijan', code: '+994', flag: 'az' },
  { id: 'bh', name: 'Bahrain', code: '+973', flag: 'bh' },
  { id: 'bd', name: 'Bangladesh', code: '+880', flag: 'bd' },
  { id: 'by', name: 'Belarus', code: '+375', flag: 'by' },
  { id: 'be', name: 'Belgium', code: '+32', flag: 'be' },
  { id: 'bo', name: 'Bolivia', code: '+591', flag: 'bo' },
  { id: 'ba', name: 'Bosnia', code: '+387', flag: 'ba' },
  { id: 'br', name: 'Brazil', code: '+55', flag: 'br' },
  { id: 'bg', name: 'Bulgaria', code: '+359', flag: 'bg' },
  { id: 'kh', name: 'Cambodia', code: '+855', flag: 'kh' },
  { id: 'cm', name: 'Cameroon', code: '+237', flag: 'cm' },
  { id: 'cl', name: 'Chile', code: '+56', flag: 'cl' },
  { id: 'cn', name: 'China', code: '+86', flag: 'cn' },
  { id: 'co', name: 'Colombia', code: '+57', flag: 'co' },
  { id: 'cr', name: 'Costa Rica', code: '+506', flag: 'cr' },
  { id: 'hr', name: 'Croatia', code: '+385', flag: 'hr' },
  { id: 'cu', name: 'Cuba', code: '+53', flag: 'cu' },
  { id: 'cy', name: 'Cyprus', code: '+357', flag: 'cy' },
  { id: 'cz', name: 'Czechia', code: '+420', flag: 'cz' },
  { id: 'dk', name: 'Denmark', code: '+45', flag: 'dk' },
  { id: 'ec', name: 'Ecuador', code: '+593', flag: 'ec' },
  { id: 'eg', name: 'Egypt', code: '+20', flag: 'eg' },
  { id: 'sv', name: 'El Salvador', code: '+503', flag: 'sv' },
  { id: 'ee', name: 'Estonia', code: '+372', flag: 'ee' },
  { id: 'fi', name: 'Finland', code: '+358', flag: 'fi' },
  { id: 'fr', name: 'France', code: '+33', flag: 'fr' },
  { id: 'ge', name: 'Georgia', code: '+995', flag: 'ge' },
  { id: 'de', name: 'Germany', code: '+49', flag: 'de' },
  { id: 'gh', name: 'Ghana', code: '+233', flag: 'gh' },
  { id: 'gr', name: 'Greece', code: '+30', flag: 'gr' },
  { id: 'gt', name: 'Guatemala', code: '+502', flag: 'gt' },
  { id: 'hn', name: 'Honduras', code: '+504', flag: 'hn' },
  { id: 'hk', name: 'Hong Kong', code: '+852', flag: 'hk' },
  { id: 'hu', name: 'Hungary', code: '+36', flag: 'hu' },
  { id: 'is', name: 'Iceland', code: '+354', flag: 'is' },
  { id: 'in', name: 'India', code: '+91', flag: 'in' },
  { id: 'id', name: 'Indonesia', code: '+62', flag: 'id' },
  { id: 'ir', name: 'Iran', code: '+98', flag: 'ir' },
  { id: 'iq', name: 'Iraq', code: '+964', flag: 'iq' },
  { id: 'ie', name: 'Ireland', code: '+353', flag: 'ie' },
  { id: 'il', name: 'Israel', code: '+972', flag: 'il' },
  { id: 'it', name: 'Italy', code: '+39', flag: 'it' },
  { id: 'jm', name: 'Jamaica', code: '+1', flag: 'jm' },
  { id: 'jp', name: 'Japan', code: '+81', flag: 'jp' },
  { id: 'jo', name: 'Jordan', code: '+962', flag: 'jo' },
  { id: 'kz', name: 'Kazakhstan', code: '+7', flag: 'kz' },
  { id: 'ke', name: 'Kenya', code: '+254', flag: 'ke' },
  { id: 'kr', name: 'South Korea', code: '+82', flag: 'kr' },
  { id: 'kw', name: 'Kuwait', code: '+965', flag: 'kw' },
  { id: 'kg', name: 'Kyrgyzstan', code: '+996', flag: 'kg' },
  { id: 'lv', name: 'Latvia', code: '+371', flag: 'lv' },
  { id: 'lb', name: 'Lebanon', code: '+961', flag: 'lb' },
  { id: 'ly', name: 'Libya', code: '+218', flag: 'ly' },
  { id: 'lt', name: 'Lithuania', code: '+370', flag: 'lt' },
  { id: 'lu', name: 'Luxembourg', code: '+352', flag: 'lu' },
  { id: 'mo', name: 'Macau', code: '+853', flag: 'mo' },
  { id: 'my', name: 'Malaysia', code: '+60', flag: 'my' },
  { id: 'mv', name: 'Maldives', code: '+960', flag: 'mv' },
  { id: 'mt', name: 'Malta', code: '+356', flag: 'mt' },
  { id: 'mx', name: 'Mexico', code: '+52', flag: 'mx' },
  { id: 'md', name: 'Moldova', code: '+373', flag: 'md' },
  { id: 'mc', name: 'Monaco', code: '+377', flag: 'mc' },
  { id: 'mn', name: 'Mongolia', code: '+976', flag: 'mn' },
  { id: 'ma', name: 'Morocco', code: '+212', flag: 'ma' },
  { id: 'mm', name: 'Myanmar', code: '+95', flag: 'mm' },
  { id: 'np', name: 'Nepal', code: '+977', flag: 'np' },
  { id: 'nl', name: 'Netherlands', code: '+31', flag: 'nl' },
  { id: 'nz', name: 'New Zealand', code: '+64', flag: 'nz' },
  { id: 'ng', name: 'Nigeria', code: '+234', flag: 'ng' },
  { id: 'kp', name: 'North Korea', code: '+850', flag: 'kp' },
  { id: 'no', name: 'Norway', code: '+47', flag: 'no' },
  { id: 'om', name: 'Oman', code: '+968', flag: 'om' },
  { id: 'pk', name: 'Pakistan', code: '+92', flag: 'pk' },
  { id: 'pa', name: 'Panama', code: '+507', flag: 'pa' },
  { id: 'py', name: 'Paraguay', code: '+595', flag: 'py' },
  { id: 'pe', name: 'Peru', code: '+51', flag: 'pe' },
  { id: 'ph', name: 'Philippines', code: '+63', flag: 'ph' },
  { id: 'pl', name: 'Poland', code: '+48', flag: 'pl' },
  { id: 'pt', name: 'Portugal', code: '+351', flag: 'pt' },
  { id: 'qa', name: 'Qatar', code: '+974', flag: 'qa' },
  { id: 'ro', name: 'Romania', code: '+40', flag: 'ro' },
  { id: 'ru', name: 'Russia', code: '+7', flag: 'ru' },
  { id: 'rw', name: 'Rwanda', code: '+250', flag: 'rw' },
  { id: 'sa', name: 'Saudi Arabia', code: '+966', flag: 'sa' },
  { id: 'sn', name: 'Senegal', code: '+221', flag: 'sn' },
  { id: 'rs', name: 'Serbia', code: '+381', flag: 'rs' },
  { id: 'sg', name: 'Singapore', code: '+65', flag: 'sg' },
  { id: 'sk', name: 'Slovakia', code: '+421', flag: 'sk' },
  { id: 'si', name: 'Slovenia', code: '+386', flag: 'si' },
  { id: 'za', name: 'South Africa', code: '+27', flag: 'za' },
  { id: 'es', name: 'Spain', code: '+34', flag: 'es' },
  { id: 'lk', name: 'Sri Lanka', code: '+94', flag: 'lk' },
  { id: 'se', name: 'Sweden', code: '+46', flag: 'se' },
  { id: 'ch', name: 'Switzerland', code: '+41', flag: 'ch' },
  { id: 'sy', name: 'Syria', code: '+963', flag: 'sy' },
  { id: 'tw', name: 'Taiwan', code: '+886', flag: 'tw' },
  { id: 'tz', name: 'Tanzania', code: '+255', flag: 'tz' },
  { id: 'th', name: 'Thailand', code: '+66', flag: 'th' },
  { id: 'tr', name: 'Turkey', code: '+90', flag: 'tr' },
  { id: 'ug', name: 'Uganda', code: '+256', flag: 'ug' },
  { id: 'ua', name: 'Ukraine', code: '+380', flag: 'ua' },
  { id: 'ae', name: 'United Arab Emirates', code: '+971', flag: 'ae' },
  { id: 'uy', name: 'Uruguay', code: '+598', flag: 'uy' },
  { id: 'uz', name: 'Uzbekistan', code: '+998', flag: 'uz' },
  { id: 've', name: 'Venezuela', code: '+58', flag: 've' },
  { id: 'vn', name: 'Vietnam', code: '+84', flag: 'vn' },
  { id: 'ye', name: 'Yemen', code: '+967', flag: 'ye' },
  { id: 'zm', name: 'Zambia', code: '+260', flag: 'zm' },
  { id: 'zw', name: 'Zimbabwe', code: '+263', flag: 'zw' }
];

const ALT_CONTACTS = [
  { id: 'telegram', label: 'Telegram', placeholder: 'Enter Telegram ID', icon: <TelegramLogo size={20} weight="fill" color="#229ED9" /> },
  { id: 'discord', label: 'Discord', placeholder: 'Enter Discord ID', icon: <DiscordLogo size={20} weight="fill" color="#5865F2" /> }
];

const ConnectPage = () => {
  const navigate = useNavigate();
  const [phoneCountry, setPhoneCountry] = useState(COUNTRY_CODES[0]);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [altContact, setAltContact] = useState(ALT_CONTACTS[0]);
  const [altContactDropdownOpen, setAltContactDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    altContactId: '',
    message: ''
  });
  const [error, setError] = useState('');

  const phoneRef = useRef();
  const altRef = useRef();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields marked with *');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    if (phoneNumber.trim()) {
      const phoneRegex = /^[\d\s\-()]{6,20}$/;
      if (!phoneRegex.test(phoneNumber.trim())) {
        setError('Please enter a valid phone number (digits, spaces, hyphens)');
        return;
      }
    }

    navigate('/thankyou');
  };

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (val.trim().startsWith('+')) {
      const cleanVal = val.replace(/\s/g, '');
      const sortedCountries = [...COUNTRY_CODES].sort((a, b) => b.code.length - a.code.length);
      const matched = sortedCountries.find(c => cleanVal.startsWith(c.code));
      
      if (matched) {
        setPhoneCountry(matched);
        let matchIndex = 0;
        let cutoff = 0;
        for (let i = 0; i < val.length; i++) {
          if (val[i] !== ' ' && val[i] === matched.code[matchIndex]) {
            matchIndex++;
          }
          if (matchIndex === matched.code.length) {
            cutoff = i + 1;
            break;
          }
        }
        val = val.substring(cutoff).trimStart();
      }
    }
    setPhoneNumber(val);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneRef.current && !phoneRef.current.contains(event.target)) {
        setPhoneDropdownOpen(false);
      }
      if (altRef.current && !altRef.current.contains(event.target)) {
        setAltContactDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <main className="page-content connect-page">
        <div className="container connect-container">
          <div className="connect-card">
            
            <header className="connect-header">
              <h1 className="connect-title">Connect with Our Experts</h1>
              <p className="connect-subtitle">
                Tell us your requirements. We'll deliver a solution optimized for your business needs.
              </p>
            </header>

            <div className="connect-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="Enter Your Full Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="form-input" placeholder="Enter Company Name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Website</label>
                  <input type="text" name="website" value={formData.website} onChange={handleInputChange} className="form-input" placeholder="Enter Website" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="Enter Email" />
                </div>
              </div>

              <div className="form-row">
                
                <div className="form-group" ref={phoneRef}>
                  <label className="form-label">Phone Number</label>
                  <div className="input-with-dropdown">
                    <div 
                      className="inline-dropdown-trigger" 
                      onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                    >
                      <img src={`https://flagcdn.com/w40/${phoneCountry.flag}.png`} alt={phoneCountry.flag} className="flag-icon" />
                      <CaretDown size={14} color="#fff" />
                      <span className="code-text">{phoneCountry.code}</span>
                    </div>
                    {phoneDropdownOpen && (
                      <div className="inline-dropdown-menu">
                        {COUNTRY_CODES.map((country) => (
                          <div 
                            key={country.id} 
                            className={`dropdown-item ${phoneCountry.id === country.id ? 'active' : ''}`}
                            onClick={() => {
                              setPhoneCountry(country);
                              setPhoneDropdownOpen(false);
                            }}
                          >
                            <img src={`https://flagcdn.com/w40/${country.flag}.png`} alt={country.flag} className="flag-icon" />
                            <span className="item-text">{country.name} ({country.code})</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <input 
                      type="tel" 
                      className="inline-input" 
                      placeholder="(000) 000 0000" 
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                
                <div className="form-group" ref={altRef}>
                  <label className="form-label">Alternative Contact</label>
                  <div className="input-with-dropdown">
                    <div 
                      className="inline-dropdown-trigger" 
                      onClick={() => setAltContactDropdownOpen(!altContactDropdownOpen)}
                    >
                      <div className="dropdown-icon-wrapper">
                        {altContact.icon}
                      </div>
                      <CaretDown size={14} color="#fff" />
                    </div>
                    {altContactDropdownOpen && (
                      <div className="inline-dropdown-menu">
                        {ALT_CONTACTS.map((alt) => (
                          <div 
                            key={alt.id} 
                            className={`dropdown-item ${altContact.id === alt.id ? 'active' : ''}`}
                            onClick={() => {
                              setAltContact(alt);
                              setAltContactDropdownOpen(false);
                            }}
                          >
                            <div className="dropdown-icon-wrapper">{alt.icon}</div>
                            <span className="item-text">{alt.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <input type="text" name="altContactId" value={formData.altContactId} onChange={handleInputChange} className="inline-input" placeholder={altContact.placeholder} />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label className="form-label">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} className="form-textarea" placeholder="Enter Your Message"></textarea>
                </div>
              </div>

              <div className="form-footer">
                {error && <div style={{ color: '#ff4c4c', marginBottom: '20px', fontSize: '0.95rem', fontWeight: 500 }}>{error}</div>}
                <button className="connect-submit-btn" onClick={handleSubmit}>Contact Our Experts</button>
                <div className="connect-disclaimer">
                  By clicking Submit, I agree to the use of my personal data in accordance with Tempest <a href="/privacy-policy">Privacy Notice</a>. Tempest will not sell, trade, lease, or rent your personal data to third parties.
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
          </>
  );
};

export default ConnectPage;

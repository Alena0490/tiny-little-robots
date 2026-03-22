import { useState } from 'react';
import './Cookies.css';

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    () => localStorage.getItem('cookiesAccepted') === 'true'
  );
  const [showDetails, setShowDetails] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(
    () => localStorage.getItem('cookiesAccepted') !== null
  );

  const handleCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setBannerDismissed(true);
  };

  // Hide banner if user already made a choice
  if (cookiesAccepted || bannerDismissed) return null;

  return (
    <div className='cookies' id='cookies'>

      {/* Info text and optional details */}
      <div className='cookies-text'>
        <p className='cookie-info'>We use the cookies to make this project work better for you.</p>
        {showDetails && (
          <div className='cookie-details'>
            <p>
              Essential cookies only. Your email is used to send your demo order confirmation and is not stored.
            </p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className='buttons'>
        <button
          className='primary-button cookies-btn squircle-xl'
          onClick={handleCookies}
        >
          Accept
        </button>
        <button
          className='secondary-button cookies-btn squircle-xl'
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Show Less' : 'Show More'}
        </button>
        <button
          className='secondary-button cookies-btn squircle-xl'
          onClick={handleReject}
        >
          Reject
        </button>
      </div>

    </div>
  );
};

export default Cookies;
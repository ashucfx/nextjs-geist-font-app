'use client';

import ReactGA from 'react-ga';
import CookieConsent from 'react-cookie-consent';

export default function RippleNexusCookieBanner() {
  const handleAccept = () => {
    ReactGA.initialize('G-4FJL8SG1W9');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="rippleNexusCookieConsent"
      style={{ background: '#1e56d6', color: 'white' }}
      buttonStyle={{ 
        background: 'white',
        color: '#1e56d6',
        fontSize: '14px',
        borderRadius: '4px',
        padding: '8px 16px'
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: 'white',
        border: '1px solid white',
        borderRadius: '4px',
        padding: '8px 16px'
      }}
      enableDeclineButton
      onAccept={handleAccept}
      expires={365}
    >
      This website uses cookies to enhance the user experience and for analytics purposes.
      <a href="/privacy-policy" className="ml-2 underline">Learn more</a>
    </CookieConsent>
  );
}

"use client"

import React from 'react';

/**Allows the user share the current post to whatsapp, this component appears inline as they scroll */

const SharePostWA = ({ postUrl, postTitle }) => {
  const whatsappBaseUrl = 'https://wa.me/?text=';

  // Determine the share URL based on the  Facebook prop
  const shareUrl = `${whatsappBaseUrl}${encodeURIComponent(`${postTitle} - ${postUrl}`)}`;
  return (
    <>
      <button
        onClick={() => {
          window.open(shareUrl, '_blank');
        }}
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#25d366', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        {'Share on WhatsApp'}
      </button>
    </>
  );
};

export default SharePostWA;

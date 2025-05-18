"use client";

import Script from 'next/script';

export default function CalendlyWidget() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/ripplenexus/book-a-consultation"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}

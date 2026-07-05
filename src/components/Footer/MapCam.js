import React from "react";

export default function MapCam() {
  return (
    <div className="w-full h-[400px] md:h-[500px] mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-lg shadow-black/50 relative">
      {/* Dark overlay to make the map blend with the dark theme */}
      <div className="absolute inset-0 bg-slate-900/40 pointer-events-none mix-blend-color-burn z-10"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.15120755919!2d104.73379658245598!3d11.579666922258837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c668bf65ea74cc!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1714488390000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="w-full h-full object-cover"
      ></iframe>
    </div>
  );
}
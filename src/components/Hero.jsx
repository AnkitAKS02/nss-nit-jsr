import React from 'react';

export default function Hero() {



  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
     
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/NSSPoster.jpg" //agar video na chale to ye chalega
        preload="auto"
      >
        <source src="/NSSWeb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-black z-10 opacity-60'></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
  <h1 
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500"
  >
    Welcome to <span className="text-white">NSS</span>,
    <span className="block mt-2 text-white">NIT Jamshedpur</span>
  </h1>
  
  <p
    className="text-lg sm:text-xl md:text-2xl max-w-xl lg:max-w-2xl drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-400 to-blue-400"
  >
    National Service Scheme | <span className="font-semibold text-white">Not Me, But You.</span>
  </p>
</div>


      <div className="absolute z-30 flex md:flex-col gap-6 md:left-8 md:top-1/2 md:transform md:-translate-y-1/2 bottom-16 left-1/2 transform -translate-x-1/2 md:translate-x-0">
        {/* Facebook */}
        <a 
          href="#" 
          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-2"
          aria-label="Facebook"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"/>
          </svg>
        </a>
        
        {/* Instagram */}
        <a 
          href="#" 
          className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-125 p-2"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        
        {/* Twitter */}
        <a 
          href="#" 
          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-2"
          aria-label="Twitter"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.93 13.93 0 011.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
          </svg>
        </a>
        
        {/* LinkedIn */}
        <a 
          href="#" 
          className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-125 p-2"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>



      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 hidden md:block animate-bounce">
        <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center overflow-hidden">
          <div className="w-2 h-2 bg-white mt-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}
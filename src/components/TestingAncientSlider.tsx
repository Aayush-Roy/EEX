// import React, { useState, useEffect } from 'react';

// const videos = [
//   { id: 1, src: "https://tecdn.b-cdn.net/img/video/Tropical.mp4", label: "First slide label", text: "Some representative placeholder content for the first slide." },
//   { id: 2, src: "https://tecdn.b-cdn.net/img/video/forest.mp4", label: "Second slide label", text: "Some representative placeholder content for the second slide." },
//   { id: 3, src: "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4", label: "Third slide label", text: "Some representative placeholder content for the third slide." },
// ];

// const VideoCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // स्लाइड बदलने के लिए फ़ंक्शन
//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === 0 ? videos.length - 1 : prevIndex - 1
//     );
//   };

//   // ऑटो-स्लाइडिंग के लिए useEffect
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // 5 सेकंड में स्लाइड बदलेगा
//     return () => clearInterval(interval); // कॉम्पोनेंट अनमाउंट होने पर इंटरवल साफ़ करें
//   }, [activeIndex]); 

//   // 

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
      
//       {/* 📹 Slides Container */}
//       <div 
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {videos.map((video, index) => (
//           <div key={video.id} className="w-full flex-shrink-0 relative">
//             <video className="w-full" autoPlay loop muted>
//               <source src={video.src} type="video/mp4" />
//             </video>
            
//             {/* Slide Caption */}
//             <div className="absolute inset-x-[15%] bottom-5 p-5 text-center text-white bg-black bg-opacity-50 rounded-md">
//               <h5 className="text-xl font-bold">{video.label}</h5>
//               <p>{video.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ⬅️ Controls (Previous Button) */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-0 z-10 p-3 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-r-lg transition"
//       >
//         &#10094;
//       </button>

//       {/* ➡️ Controls (Next Button) */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 z-10 p-3 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-l-lg transition"
//       >
//         &#10095;
//       </button>

//       {/* 🎯 Indicators */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
//         {videos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === activeIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default VideoCarousel;
import React, { useState, useEffect } from 'react';

const videos = [
  { id: 1, src: "/videos/ganga.mp4" },
  { id: 2, src: "/videos/EEX.mp4" },
  { id: 3, src: "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4" },
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[400px] max-w-2xl mx-auto overflow-hidden rounded-lg shadow-2xl">
      
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {videos.map((video) => (
          <div key={video.id} className="w-full flex-shrink-0 relative">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* Clean Previous Button - NO BACKGROUND */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 w-12 h-12 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Clean Next Button - NO BACKGROUND */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 w-12 h-12 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Minimal Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-white w-10 scale-110' 
                : 'bg-white/40 hover:bg-white/70 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

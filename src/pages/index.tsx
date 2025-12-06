



import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
// 🚨 ASSUMING THIS IS YOUR NEW CAROUSEL COMPONENT
import VideoCarousel from "@/components/TestingAncientSlider";

// --- Type Definitions ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface HomePageProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMobile: boolean;
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  router: any;
}
// --- End Type Definitions ---

const HomePage = ({
  currentPage,
  setCurrentPage,
  isMobile,
  menuOpen,
  setMenuOpen,
  router,
}: HomePageProps) => {
  
  // Retaining the mobile video state logic for the mobile view:
  const [textAnimationCompleted, setTextAnimationCompleted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const imageFadeDelay = 9;
  const imageFadeDuration = 1;

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Only keep the text animation timer for mobile text to fade
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextAnimationCompleted(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);


  // Framer Motion variants for text animation (used in mobile view)
  const textVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 2,
        duration: 1, // 1s fade
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, y: 20 }, // initial state
  };
  
  // Mobile mute logic 
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="standard-container">
      <div className="h-[100vh] bg-black text-white relative overflow-hidden standard-container">

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area: Adjusted height for desktop */}
        <div
          className={`relative ${isMobile ? "pt-12 " : "flex items-center" /* Desktop: Full viewport height */
            }`}
          style={!isMobile ? { height: "100vh" } : {}}
        >
          {/* ====== DESKTOP SPECIFIC LAYOUT: MODIFIED AND UI FIXED ====== */}
          {!isMobile && (
            <div className="w-full flex h-[85vh] absolute inset-0"> {/* Parent Flex Container takes full viewport */}
              
              {/* Left Side Content (Logo/Images - Retained) */}
              {/* Left Side Content - PERFECTLY CENTERED */}
<div className="w-1/2 h-full flex items-center justify-center relative">
  {/* Background Logo - Full container coverage */}
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    <Image
      src="/bg-logo9.png"
      alt="Background decorative logo"
      width={400}
      height={360}
      className="max-w-[90%] max-h-[90%] object-contain"
      style={{
        filter: "grayscale(100%) brightness(200%)",
        zIndex: 1
      }}
      priority
    />
  </div>
  
  {/* Main EEX Logo - Perfect center */}
  <div className="relative z-10 flex items-center justify-center p-4">
    <Image
      src="/eex.png"
      alt="EEX Logo"
      width={320}
      height={230}
      className="w-[420px] h-[250px] object-contain drop-shadow-2xl"
      priority
    />
  </div>
</div>



              {/* Right Side Content: VideoCarousel with fixed size control */}
              <div className="w-1/2 flex items-center justify-center z-10 pr-12"> {/* Right side takes half width, centered, with right padding */}
                {/*
                  UI FIX: Full height carousel with proper sizing
                */}
                <div className="w-full h-full flex items-center justify-center py-8"> 
                  <VideoCarousel /> 
                </div>
              </div>
            </div>
          )}
          {/* ====== END DESKTOP MODIFICATION ====== */}


          {/* ====== MOBILE SPECIFIC LAYOUT (Unchanged) ====== */}
          {isMobile && (
            <div className="w-full flex flex-col items-center text-center space-y-6 z-10 relative mt-2">
              
              {/* ... Mobile Background Logo ... */}
              <Image
                src="/bg-logo9.png"
                alt="Background decorative logo"
                width={200}
                height={180}
                className="absolute top-0 bg-logo-mobile"
                style={{
                  zIndex: 1,
                  filter: "grayscale(100%) brightness(150%)",
                }}
                priority
              />

              {/* ... Mobile EEX Image ... */}
              <div className="relative w-full flex justify-center mb-[3px] z-10 mt-3">
                <div className="max-w-[250px] sm:max-w-[270px]">
                  <Image
                    src="/eex.png"
                    alt="Descriptive image for main content"
                    width={270}
                    height={174}
                    className="w-full h-auto rounded shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* ... Mobile Text Animations ... */}
              <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 3, staggerChildren: 1 },
                  },
                }}
              >
                <motion.h2
                  className="font-Aboreto tracking-wide drop-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-2"
                  style={{ fontFamily: "Aboreto, Sans-serif" }}
                  variants={textVariants}
                  custom={0}
                >
                  AN ANCIENT SECRET SO POWERFUL...
                </motion.h2>

                <motion.h3
                  className="font-Aboreto tracking-wide drop-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 -ml-2"
                  style={{ fontFamily: "Aboreto" }}
                  variants={textVariants}
                  custom={1}
                >
                  IT GAVE RISE TO MODERN CIVILIZATION.
                </motion.h3>

                <motion.p
                  className="font-Raleway tracking-wide drop-shadow-lg text-[#ada08c] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-2 -mt-2 ml-1 max-w-md text-center"
                  style={{ fontFamily: "Raleway" }}
                  variants={textVariants}
                  custom={2}
                >
                  Join us as we rediscover the mystery of earth energy.
                </motion.p>
              </motion.div>

              {/* ... Mobile Video/Placeholder ... */}
              <div className="relative w-full max-w-[550px] md:max-w-[450px] sm:max-w-[100vw] mb-3 z-10">
                {!textAnimationCompleted ? (
                  <Image
                    src="/bg-image-2.png" // use your placeholder
                    alt="Placeholder"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover rounded shadow-lg"
                    priority
                  />
                ) : (
                  <>
                    {!isVideoLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 rounded shadow-lg space-y-3">
                        <div className="loader border-4 border-amber-100 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      src="https://firebasestorage.googleapis.com/v0/b/invicta-29211.firebasestorage.app/o/Final%20EEX%20Teaser%20vertical%20increase%20With%20end%20logo%20text.mp4?alt=media&token=4dab2742-f1c8-40f5-a93e-effc60766da1"
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      preload="auto"
                      onLoadedData={handleVideoLoaded}
                      className="w-full h-full object-cover rounded shadow-lg"
                    />
                  </>
                )}

                {/* ... Mobile Mute Toggle ... */}
                {textAnimationCompleted && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/50 border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer z-40"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        {isMobile ? (
          <div className="relative flex space-x-4 justify-center pt-4 pb-4 z-10">
            <SocialLinks />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------------

const EarthEnergyXplorers = () => {
    
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return currentPage === "home" ? (
    <HomePage
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isMobile={isMobile}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      router={router}
    />
  ) : (
    <>
   
    </>
  );
};

export default EarthEnergyXplorers;

// import React, { useState, useEffect, useRef } from "react";
// import { Volume2, VolumeX, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";

// import Navbar from "@/components/Navbar";
// import SocialLinks from "@/components/SocialLinks";
// import AncientVideoSlider from "@/components/VideoSlider";
// import TestingAncientSlider from "@/components/TestingAncientSlider";

// // --- Type Definitions ---
// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
// }

// interface HomePageProps {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
//   isMobile: boolean;
//   menuOpen: boolean;
//   setMenuOpen: (isOpen: boolean) => void;
//   router: any;
// }

// interface TeamPageProps {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
//   teamMembers: TeamMember[];
//   isMobile: boolean;
//   menuOpen: boolean;
//   setMenuOpen: (isOpen: boolean) => void;
// }
// // --- End Type Definitions ---

// const HomePage = ({
//   currentPage,
//   setCurrentPage,
//   isMobile,
//   menuOpen,
//   setMenuOpen,
//   router,
// }: HomePageProps) => {
//   const [textAnimationCompleted, setTextAnimationCompleted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [istoggleActive, setIstoggleActive] = useState(false);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const imageFadeDelay = 9;

//   const imageFadeDuration = 1;

//   const handleVideoLoaded = () => {
//     setIsVideoLoaded(true);
//   };


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTextAnimationCompleted(true);
//     }, 9000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (textAnimationCompleted) {
//       setShowVideo(true);
//     }
//   }, [textAnimationCompleted]);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//     setIstoggleActive(true);
//   };

//   // Framer Motion variants for text animation
//   const textVariants = {
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 2,
//         duration: 1, // 1s fade
//         ease: "easeOut",
//       },
//     }),
//     hidden: { opacity: 0, y: 20 }, // initial state
//   };

//   return (
//     <div className="standard-container">
//       <div className="min-h-screen bg-black text-white relative overflow-hidden standard-container">


//         {/* Navigation */}
//         <Navbar />

//         {/* Main Content Area */}
//         <div
//           className={`relative ${isMobile ? "pt-12 " : "min-h-[calc(100vh-120px)] flex items-center"
//             }`}
//         >
//           {/* ====== DESKTOP SPECIFIC LAYOUT ====== */}
//           {!isMobile && (
//             <>
//               <Image
//                 src="/bg-logo9.png"
//                 alt="Background decorative logo"
//                 width={350}
//                 height={320}
//                 className="centered-bg-logo"
//                 objectFit="center"
//                 style={{
//                   alignItems: "center",
//                   zIndex: 5,
//                   filter: "grayscale(100%) brightness(200%)",
//                 }}
//                 priority
//               />
//               <Image
//                 src="/eex.png"
//                 alt="Descriptive image for main content"
//                 width={320}
//                 height={230}
//                 className="centered-eex"
//                 priority
//               />

//               <div className="w-2/3 fixed top-0 right-0 h-screen flex flex-col justify-center z-10">
//                 {!textAnimationCompleted && (
//                   <motion.div
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: 0 }}
//                     transition={{
//                       duration: imageFadeDuration,
//                       ease: "easeInOut",
//                       delay: imageFadeDelay,
//                     }}
//                     className="absolute top-0 right-0 w-[60vw] h-[100vh]"
//                   >
//                     <Image
//                       src="/bg-final5.png"
//                       alt="Background for right side"
//                       fill
//                       style={{
//                         objectFit: "contain",
//                         objectPosition: "right center",
//                         filter: "brightness(100%)",
//                         zIndex: 0,
//                       }}
//                     />
//                   </motion.div>
//                 )}

//                 {textAnimationCompleted ? (
//                   <button
//                     onClick={toggleMute}
//                     className={`
//                       absolute bottom-4 right-4 w-12 h-12 rounded-full 
//                       bg-black/50 border border-white/30 
//                       flex items-center justify-center 
//                       hover:bg-black/70 transition-colors cursor-pointer z-99
//                       ${!istoggleActive ? "animate-bounce" : ""}
//                     `}
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-5 h-5 text-white" />
//                     ) : (
//                       <Volume2 className="w-5 h-5 text-white" />
//                     )}
//                   </button>
//                 ) : null}

//                 {/* Desktop: Text content - fade out when animation completes */}
//                 <motion.div
//                   className="absolute inset-0 flex flex-col justify-center transform -translate-y-8 px-8 ml-3 z-70"
//                   initial="hidden"
//                   animate={textAnimationCompleted ? "hidden" : "visible"}
//                   variants={{
//                     hidden: { opacity: 0, transition: { duration: 1 } },
//                     visible: {
//                       opacity: 1,
//                       transition: {
//                         duration: 3.5,
//                         staggerChildren: 4,
//                         staggerDirection: -1,
//                       },
//                     },
//                   }}
//                 >
//                   <motion.h2
//                     className="text-lg md:text-xl lg:text-2xl mb-2 tracking-wide drop-shadow-lg"
//                     style={{ fontFamily: "Aboreto, Sans-serif", fontWeight: 300 }}
//                     variants={textVariants}
//                     custom={0}
//                   >
//                     AN ANCIENT SECRET SO POWERFUL...
//                   </motion.h2>

//                   <motion.h3
//                     className="text-lg md:text-xl lg:text-2xl mb-6 -ml-2 tracking-wide drop-shadow-lg"
//                     style={{ fontFamily: "Aboreto", fontWeight: 300 }}
//                     variants={textVariants}
//                     custom={1}
//                   >
//                     IT GAVE RISE TO MODERN CIVILIZATION.
//                   </motion.h3>



//                   <motion.p
//                     className="
//                       relative
//                       text-[1.15rem] ml-1 mb-[1px] -mt-2 tracking-wide text-[#ded0ba]
//                       font-Raleway font-light
//                         backdrop-blur-[1px] px-4 py-2 rounded-lg
//                       max-w-lg w-full mx-auto
//                       drop-shadow-lg
//                     "
//                     variants={textVariants}
//                     custom={2}
//                   >
//                     Join us as we rediscover the mystery of earth energy.
//                   </motion.p>
//                 </motion.div>

//                 <div
//                   className="absolute inset-0 flex justify-end items-center z-10 bg-transparent"
//                   style={{
//                     opacity: textAnimationCompleted ? 1 : 0,
//                     transition: "opacity 0.2s ease-out",
//                   }}
//                 >
//                   {showVideo && (
//                     <>
//                       {!isVideoLoaded && textAnimationCompleted ? (
//                         <div className="absolute right-[0.6%] flex flex-col items-center justify-center w-[75%] h-full bg-black/40 z-20 rounded shadow-lg space-y-3">
//                           <div className="flex flex-col items-center space-y-2">
//                             <div className="loader border-4 border-amber-100 border-t-transparent rounded-full w-8 h-8 animate-spin opacity-75"></div>
//                             <div className="text-amber-100 text-lg font-Aboreto opacity-75">
//                               Exploring...
//                             </div>
//                           </div>
//                         </div>
//                       ) : null}

//                       <video
//                         ref={videoRef}
//                         src="https://firebasestorage.googleapis.com/v0/b/invicta-29211.firebasestorage.app/o/teaser%20new%20ratio%20desktop%20V%201.mp4?alt=media&token=8c2c7b58-ffc9-4ed0-b064-e2ed737872ad"
//                         autoPlay
//                         preload="auto"
//                         muted={isMuted}
//                         loop
//                         playsInline
//                         onLoadedData={handleVideoLoaded}
//                         className="w-[90%] tab-height object-cover rounded shadow-lg"
//                       />
//                     </>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}

//           {/* ====== MOBILE SPECIFIC LAYOUT ====== */}
//           {isMobile && (
//             <div className="w-full flex flex-col items-center text-center space-y-6 z-10 relative mt-2">
//               {/* Mobile: bg-logo.png positioned on the right side, half visible */}
//               <Image
//                 src="/bg-logo9.png"
//                 alt="Background decorative logo"
//                 width={200}
//                 height={180}
//                 className="absolute top-0 bg-logo-mobile"
//                 style={{
//                   zIndex: 1,
//                   filter: "grayscale(100%) brightness(150%)",
//                 }}
//                 priority
//               />

//               {/* Mobile: the eex.png image - reduced size and shifted left */}
//               <div className="relative w-full max-w-[250px] sm:max-w-[270px] mb-[3px] z-10 self-start mt-3">
//                 <Image
//                   src="/eex.png"
//                   alt="Descriptive image for main content"
//                   width={270}
//                   height={174}
//                   className="w-full h-auto rounded shadow-lg"
//                   style={{
//                     transform: "translateX(0%)", // Shift left
//                   }}
//                   priority
//                 />
//               </div>

//               {/* Mobile: text content with framer motion animations */}
//               <motion.div
//                 className="relative z-10"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: { duration: 3, staggerChildren: 1 },
//                   },
//                 }}
//               >
//                 <motion.h2
//                   className="
//                   font-Aboreto tracking-wide drop-shadow-lg
//                   text-sm        /* ≤640px */
//                   sm:text-base  /* 640–767px */
//                   md:text-lg    /* 768–1023px */
//                   lg:text-xl    /* 1024–1279px */
//                   xl:text-2xl   /* 1280–1535px */
//                   2xl:text-3xl  /* ≥1536px */
//                   mb-2
//                 "
//                   style={{ fontFamily: "Aboreto, Sans-serif" }}
//                   variants={textVariants}
//                   custom={0}
//                 >
//                   AN ANCIENT SECRET SO POWERFUL...
//                 </motion.h2>

//                 <motion.h3
//                   className="
//                   font-Aboreto tracking-wide drop-shadow-lg
//                   text-sm
//                   sm:text-base
//                   md:text-lg
//                   lg:text-xl
//                   xl:text-2xl
//                   2xl:text-3xl
//                   mb-6 -ml-2
//                 "
//                   style={{ fontFamily: "Aboreto" }}
//                   variants={textVariants}
//                   custom={1}
//                 >
//                   IT GAVE RISE TO MODERN CIVILIZATION.
//                 </motion.h3>

//                 <motion.p
//                   className="
//                   font-Raleway tracking-wide drop-shadow-lg text-[#ada08c]
//                   text-xs        /* ≤640px */
//                   sm:text-sm    /* 640–767px */
//                   md:text-base  /* 768–1023px */
//                   lg:text-lg    /* 1024–1279px */
//                   xl:text-xl    /* 1280–1535px */
//                   2xl:text-2xl  /* ≥1536px */
//                   mx-auto mb-2 -mt-2 ml-1 max-w-md text-center
//                 "
//                   style={{ fontFamily: "Raleway" }}
//                   variants={textVariants}
//                   custom={2}
//                 >
//                   Join us as we rediscover the mystery of earth energy.
//                 </motion.p>
//               </motion.div>

//               {/* Mobile: video appears below the building image */}
//               <div className="relative w-full max-w-[550px] md:max-w-[450px] sm:max-w-[100vw] mb-3 z-10">
//                 {!textAnimationCompleted ? (
//                   <Image
//                     src="/bg-image-2.png" // use your placeholder
//                     alt="Placeholder"
//                     width={600}
//                     height={800}
//                     className="w-full h-auto object-cover rounded shadow-lg"
//                     priority
//                   />
//                 ) : (
//                   // 2️⃣ once slogans complete, switch to video
//                   <>
//                     {!isVideoLoaded && (
//                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 rounded shadow-lg space-y-3">
//                         <div className="loader border-4 border-amber-100 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
//                       </div>
//                     )}
//                     <video
//                       ref={videoRef}
//                       src="https://firebasestorage.googleapis.com/v0/b/invicta-29211.firebasestorage.app/o/Final%20EEX%20Teaser%20vertical%20increase%20With%20end%20logo%20text.mp4?alt=media&token=4dab2742-f1c8-40f5-a93e-effc60766da1"
//                       autoPlay
//                       muted={isMuted}
//                       loop
//                       playsInline
//                       preload="auto"
//                       onLoadedData={handleVideoLoaded}
//                       className="w-full h-full object-cover rounded shadow-lg"
//                     />
//                   </>
//                 )}

//                 {/* keep your mute toggle only when the video is active */}
//                 {textAnimationCompleted && (
//                   <button
//                     onClick={toggleMute}
//                     className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/50 border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer z-40"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-5 h-5 text-white" />
//                     ) : (
//                       <Volume2 className="w-5 h-5 text-white" />
//                     )}
//                   </button>
//                 )}

//                 {/* optional top-gradient overlay */}
//                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/100 to-transparent z-10" />
//               </div>
//             </div>
//           )}
//         </div>
//           <div className="relative z-10 py-16">
//           {/* <AncientVideoSlider /> */}
//           <AncientVideoSlider/>
//         </div>
//         {isMobile ? (
//           <div className="relative flex space-x-4 justify-center pt-4 pb-4 z-10">
//             {/* Custom Social Media Icons */}
//             <SocialLinks />
//           </div>
//         ) : (
//           ""
//         )}
        
//       </div>
      
//     </div>

    
//   );
// };

// const EarthEnergyXplorers = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return currentPage === "home" ? (
//     <HomePage
//       currentPage={currentPage}
//       setCurrentPage={setCurrentPage}
//       isMobile={isMobile}
//       menuOpen={menuOpen}
//       setMenuOpen={setMenuOpen}
//       router={router}
//     />
//   ) : (
//     <>
   
//     </>
//   );
// };

// export default EarthEnergyXplorers;



// import React, { useState, useEffect, useRef } from "react";
// import { Volume2, VolumeX, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";

// import Navbar from "@/components/Navbar";
// import SocialLinks from "@/components/SocialLinks";

// // --- Type Definitions ---
// interface HomePageProps {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
//   isMobile: boolean;
//   menuOpen: boolean;
//   setMenuOpen: (isOpen: boolean) => void;
//   router: any;
// }

// // Video slider ke liye videos array
// const videos = [
//   "/videos/ganga.mp4",  
//   "https://firebasestorage.googleapis.com/v0/b/invicta-29211.firebasestorage.app/o/teaser%20new%20ratio%20desktop%20V%201.mp4?alt=media&token=8c2c7b58-ffc9-4ed0-b064-e2ed737872ad",
//   // Yahan aur video URLs add kar sakte ho
  
//   "/video3.mp4",
// ];

// const HomePage = ({
//   currentPage,
//   setCurrentPage,
//   isMobile,
//   menuOpen,
//   setMenuOpen,
//   router,
// }: HomePageProps) => {
//   const [textAnimationCompleted, setTextAnimationCompleted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [showVideo, setShowVideo] = useState(false);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [istoggleActive, setIstoggleActive] = useState(false);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   const handleVideoLoaded = () => {
//     setIsVideoLoaded(true);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTextAnimationCompleted(true);
//     }, 9000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (textAnimationCompleted) {
//       setShowVideo(true);
//     }
//   }, [textAnimationCompleted]);

//   // Auto slide effect - har 5 seconds me next video
//   useEffect(() => {
//     if (showVideo) {
//       const interval = setInterval(() => {
//         setCurrentVideoIndex((prevIndex) => 
//           prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//         );
//       }, ); // 5 seconds

//       return () => clearInterval(interval);
//     }
//   }, [showVideo]);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//     setIstoggleActive(true);
//   };

//   // Framer Motion variants for text animation
//   const textVariants = {
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 2,
//         duration: 1,
//         ease: "easeOut",
//       },
//     }),
//     hidden: { opacity: 0, y: 20 },
//   };

//   return (
//     <div className="standard-container">
//       <div className="min-h-screen bg-black text-white relative overflow-hidden standard-container">
//         {/* Navigation */}
//         <Navbar />

//         {/* Main Content Area */}
//         <div
//           className={`relative ${
//             isMobile ? "pt-12 " : "min-h-[calc(100vh-120px)] flex items-center"
//           }`}
//         >
//           {/* ====== DESKTOP SPECIFIC LAYOUT ====== */}
//           {!isMobile && (
//             <>
//               <Image
//                 src="/bg-logo9.png"
//                 alt="Background decorative logo"
//                 width={350}
//                 height={320}
//                 className="centered-bg-logo"
//                 objectFit="center"
//                 style={{
//                   alignItems: "center",
//                   zIndex: 5,
//                   filter: "grayscale(100%) brightness(200%)",
//                 }}
//                 priority
//               />
//               <Image
//                 src="/eex.png"
//                 alt="Descriptive image for main content"
//                 width={320}
//                 height={230}
//                 className="centered-eex"
//                 priority
//               />

//               <div className="w-2/3 fixed top-0 right-0 h-screen flex flex-col justify-center z-10">
//                 {/* Desktop: Text content - fade out when animation completes */}
//                 <motion.div
//                   className="absolute inset-0 flex flex-col justify-center transform -translate-y-8 px-8 ml-3 z-70"
//                   initial="hidden"
//                   animate={textAnimationCompleted ? "hidden" : "visible"}
//                   variants={{
//                     hidden: { opacity: 0, transition: { duration: 1 } },
//                     visible: {
//                       opacity: 1,
//                       transition: {
//                         duration: 3.5,
//                         staggerChildren: 4,
//                         staggerDirection: -1,
//                       },
//                     },
//                   }}
//                 >
//                   <motion.h2
//                     className="text-lg md:text-xl lg:text-2xl mb-2 tracking-wide drop-shadow-lg"
//                     style={{ fontFamily: "Aboreto, Sans-serif", fontWeight: 300 }}
//                     variants={textVariants}
//                     custom={0}
//                   >
//                     AN ANCIENT SECRET SO POWERFUL...
//                   </motion.h2>

//                   <motion.h3
//                     className="text-lg md:text-xl lg:text-2xl mb-6 -ml-2 tracking-wide drop-shadow-lg"
//                     style={{ fontFamily: "Aboreto", fontWeight: 300 }}
//                     variants={textVariants}
//                     custom={1}
//                   >
//                     IT GAVE RISE TO MODERN CIVILIZATION.
//                   </motion.h3>

//                   <motion.p
//                     className="
//                       relative
//                       text-[1.15rem] ml-1 mb-[1px] -mt-2 tracking-wide text-[#ded0ba]
//                       font-Raleway font-light
//                         backdrop-blur-[1px] px-4 py-2 rounded-lg
//                       max-w-lg w-full mx-auto
//                       drop-shadow-lg
//                     "
//                     variants={textVariants}
//                     custom={2}
//                   >
//                     Join us as we rediscover the mystery of earth energy.
//                   </motion.p>
//                 </motion.div>

//                 {/* Video Slider - Right Side */}
//                 <div
//                   className="absolute inset-0 flex justify-end items-center z-10 bg-transparent"
//                   style={{
//                     opacity: textAnimationCompleted ? 1 : 0,
//                     transition: "opacity 0.2s ease-out",
//                   }}
//                 >
//                   {showVideo && (
//                     <div className="relative w-[90%] h-full flex items-center">
//                       {!isVideoLoaded && textAnimationCompleted ? (
//                         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 rounded shadow-lg space-y-3">
//                           <div className="flex flex-col items-center space-y-2">
//                             <div className="loader border-4 border-amber-100 border-t-transparent rounded-full w-8 h-8 animate-spin opacity-75"></div>
//                             <div className="text-amber-100 text-lg font-Aboreto opacity-75">
//                               Exploring...
//                             </div>
//                           </div>
//                         </div>
//                       ) : null}

//                       {/* Video Slider */}
//                       <video
//                         key={currentVideoIndex}
//                         ref={videoRef}
//                         src={videos[currentVideoIndex]}
//                         autoPlay
//                         preload="auto"
//                         muted={isMuted}
//                         loop
//                         playsInline
//                         onLoadedData={handleVideoLoaded}
//                         className="w-full tab-height object-cover rounded shadow-lg"
//                         style={{
//                           transition: "opacity 0.5s ease-in-out",
//                         }}
//                       />

//                       {/* Mute Button */}
//                       {textAnimationCompleted && (
//                         <button
//                           onClick={toggleMute}
//                           className={`
//                             absolute bottom-4 right-4 w-12 h-12 rounded-full 
//                             bg-black/50 border border-white/30 
//                             flex items-center justify-center 
//                             hover:bg-black/70 transition-colors cursor-pointer z-99
//                             ${!istoggleActive ? "animate-bounce" : ""}
//                           `}
//                         >
//                           {isMuted ? (
//                             <VolumeX className="w-5 h-5 text-white" />
//                           ) : (
//                             <Volume2 className="w-5 h-5 text-white" />
//                           )}
//                         </button>
//                       )}

//                       {/* Slider Indicators */}
//                       <div className="absolute bottom-16 right-4 flex space-x-2 z-50">
//                         {videos.map((_, index) => (
//                           <div
//                             key={index}
//                             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                               index === currentVideoIndex
//                                 ? "bg-amber-100 w-6"
//                                 : "bg-white/40"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}

//           {/* ====== MOBILE SPECIFIC LAYOUT ====== */}
//           {isMobile && (
//             <div className="w-full flex flex-col items-center text-center space-y-6 z-10 relative mt-2">
//               {/* Mobile: bg-logo.png positioned on the right side, half visible */}
//               <Image
//                 src="/bg-logo9.png"
//                 alt="Background decorative logo"
//                 width={200}
//                 height={180}
//                 className="absolute top-0 bg-logo-mobile"
//                 style={{
//                   zIndex: 1,
//                   filter: "grayscale(100%) brightness(150%)",
//                 }}
//                 priority
//               />

//               {/* Mobile: the eex.png image - reduced size and shifted left */}
//               <div className="relative w-full max-w-[250px] sm:max-w-[270px] mb-[3px] z-10 self-start mt-3">
//                 <Image
//                   src="/eex.png"
//                   alt="Descriptive image for main content"
//                   width={270}
//                   height={174}
//                   className="w-full h-auto rounded shadow-lg"
//                   style={{
//                     transform: "translateX(0%)",
//                   }}
//                   priority
//                 />
//               </div>

//               {/* Mobile: text content with framer motion animations */}
//               <motion.div
//                 className="relative z-10"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: { duration: 3, staggerChildren: 1 },
//                   },
//                 }}
//               >
//                 <motion.h2
//                   className="
//                   font-Aboreto tracking-wide drop-shadow-lg
//                   text-sm
//                   sm:text-base
//                   md:text-lg
//                   lg:text-xl
//                   xl:text-2xl
//                   2xl:text-3xl
//                   mb-2
//                 "
//                   style={{ fontFamily: "Aboreto, Sans-serif" }}
//                   variants={textVariants}
//                   custom={0}
//                 >
//                   AN ANCIENT SECRET SO POWERFUL...
//                 </motion.h2>

//                 <motion.h3
//                   className="
//                   font-Aboreto tracking-wide drop-shadow-lg
//                   text-sm
//                   sm:text-base
//                   md:text-lg
//                   lg:text-xl
//                   xl:text-2xl
//                   2xl:text-3xl
//                   mb-6 -ml-2
//                 "
//                   style={{ fontFamily: "Aboreto" }}
//                   variants={textVariants}
//                   custom={1}
//                 >
//                   IT GAVE RISE TO MODERN CIVILIZATION.
//                 </motion.h3>

//                 <motion.p
//                   className="
//                   font-Raleway tracking-wide drop-shadow-lg text-[#ada08c]
//                   text-xs
//                   sm:text-sm
//                   md:text-base
//                   lg:text-lg
//                   xl:text-xl
//                   2xl:text-2xl
//                   mx-auto mb-2 -mt-2 ml-1 max-w-md text-center
//                 "
//                   style={{ fontFamily: "Raleway" }}
//                   variants={textVariants}
//                   custom={2}
//                 >
//                   Join us as we rediscover the mystery of earth energy.
//                 </motion.p>
//               </motion.div>

//               {/* Mobile: video appears below the building image */}
//               <div className="relative w-full max-w-[550px] md:max-w-[450px] sm:max-w-[100vw] mb-3 z-10">
//                 {!textAnimationCompleted ? (
//                   <Image
//                     src="/bg-image-2.png"
//                     alt="Placeholder"
//                     width={600}
//                     height={800}
//                     className="w-full h-auto object-cover rounded shadow-lg"
//                     priority
//                   />
//                 ) : (
//                   <>
//                     {!isVideoLoaded && (
//                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 rounded shadow-lg space-y-3">
//                         <div className="loader border-4 border-amber-100 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
//                       </div>
//                     )}
//                     <video
//                       ref={videoRef}
//                       src="https://firebasestorage.googleapis.com/v0/b/invicta-29211.firebasestorage.app/o/Final%20EEX%20Teaser%20vertical%20increase%20With%20end%20logo%20text.mp4?alt=media&token=4dab2742-f1c8-40f5-a93e-effc60766da1"
//                       autoPlay
//                       muted={isMuted}
//                       loop
//                       playsInline
//                       preload="auto"
//                       onLoadedData={handleVideoLoaded}
//                       className="w-full h-full object-cover rounded shadow-lg"
//                     />
//                   </>
//                 )}

//                 {textAnimationCompleted && (
//                   <button
//                     onClick={toggleMute}
//                     className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/50 border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer z-40"
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-5 h-5 text-white" />
//                     ) : (
//                       <Volume2 className="w-5 h-5 text-white" />
//                     )}
//                   </button>
//                 )}

//                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/100 to-transparent z-10" />
//               </div>
//             </div>
//           )}
//         </div>

//         {isMobile ? (
//           <div className="relative flex space-x-4 justify-center pt-4 pb-4 z-10">
//             <SocialLinks />
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// const EarthEnergyXplorers = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return currentPage === "home" ? (
//     <HomePage
//       currentPage={currentPage}
//       setCurrentPage={setCurrentPage}
//       isMobile={isMobile}
//       menuOpen={menuOpen}
//       setMenuOpen={setMenuOpen}
//       router={router}
//     />
//   ) : (
//     <></>
//   );
// };

// export default EarthEnergyXplorers;
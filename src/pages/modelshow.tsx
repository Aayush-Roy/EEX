"use client";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/bagan.glb");
  return <primitive object={gltf.scene} />;
}

export default function ModelShow() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />

      <div className="flex flex-col md:flex-row w-full h-[calc(100vh-80px)]">

        {/* LEFT TEXT */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-[#c8b79e] font-bold mb-6">
            Explore the Full 3D Temple Model
          </h1>

          <p className="text-md md:text-lg text-gray-400 mb-6 max-w-md">
            Rotate freely and explore every detail of the temple structure in stunning 3D.
          </p>

          <button className="px-6 py-3 bg-[#c8b79e] text-black rounded-lg mx-auto md:mx-0">
            Learn More
          </button>
        </div>

        {/* RIGHT 3D MODEL (FULLY VISIBLE & AUTO-FRAMED) */}
        <div className="md:w-1/2 w-full h-[50vh] md:h-full">
          <Canvas camera={{ position: [6, 6, 6], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            <Suspense fallback={null}>
              {/* The MAGIC: Auto-fit model perfectly */}
              <Bounds fit clip margin={1.2}>
                <Model />
                <OrbitControls 
                  makeDefault
                  enableZoom={true}
                  minDistance={4}
                  maxDistance={12}
                />
              </Bounds>
            </Suspense>
          </Canvas>
        </div>

      </div>
    </div>
  );
}

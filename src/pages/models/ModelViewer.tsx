"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

export default function ModelViewer({ src }: { src: string }) {
  const Model = () => {
    const gltf = useGLTF(src);
    return <primitive object={gltf.scene} />;
  };

  return (
    <div className="w-full h-[70vh]">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={1} />

        <Bounds fit clip margin={1.2}>
          <Model />
        </Bounds>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../../public/Earth";
import fallback from "../assets/images/b-top.png"

const ModelViewer = () => {
  return (
    <Canvas
      className="h-100vh w-full"
      camera={{ position: [18, 5, 5], fov: 75 }} // Set camera distance to center object
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false}  enableRotate={true} rotateSpeed={2} autoRotate={true} autoRotateSpeed={2}/>
      <Suspense fallback={fallback}>
        <Earth scale={1} position={[0, 0, 0]} /> {/* Center and scale down */}
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;

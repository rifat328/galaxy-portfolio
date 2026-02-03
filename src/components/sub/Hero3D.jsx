"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const { width, height } = state.viewport;

        // Control size here:
        // Use a multiplier (e.g. 0.3) to set size relative to the smallest screen dimension.
        // This ensures it looks consistent on both mobile (portrait) and desktop (landscape).
        // Current: ~30-40% of the screen min-dimension.
        const responsiveScale = Math.min(width, height) * 0.35;

        if (sphereRef.current) {
            sphereRef.current.rotation.y = t * 0.2;
            sphereRef.current.position.y = Math.sin(t * 0.5) * 0.2;
            // Apply the responsive scale
            sphereRef.current.scale.setScalar(responsiveScale);
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 200]}>
            <MeshDistortMaterial
                color="#8352FD"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full absolute inset-0 z-[-1] md:z-10 md:relative">
            <Canvas className="w-full h-full sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

export default Hero3D;

"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.y = t * 0.2;
            sphereRef.current.position.y = Math.sin(t * 0.5) * 0.2;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
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
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

export default Hero3D;

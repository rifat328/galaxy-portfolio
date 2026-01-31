"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Cylinder, MeshDistortMaterial } from "@react-three/drei";

const AbstractShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.3;
            meshRef.current.rotation.z = t * 0.2;
        }
    });

    return (
        <Float floatIntensity={2} speed={2}>
            <Cylinder ref={meshRef} args={[1, 1, 2, 6]} scale={1.5}>
                <MeshDistortMaterial
                    color="#5DE4FA"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={false}
                />
            </Cylinder>
        </Float>
    );
};

const Education3D = () => {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <AbstractShape />
            </Canvas>
        </div>
    );
};

export default Education3D;

"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GalaxyModel3D = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Create galaxy
        const galaxyGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        // Galaxy color palette
        const colorPalette = [
            new THREE.Color(0x4f46e5), // Indigo
            new THREE.Color(0x7c3aed), // Purple
            new THREE.Color(0x06b6d4), // Cyan
            new THREE.Color(0xf43f5e), // Rose
            new THREE.Color(0x8b5cf6), // Violet
        ];

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;

            // Spiral galaxy formation
            const radius = Math.random() * 5;
            const spinAngle = radius * 3;
            const branchAngle = ((i % 5) / 5) * Math.PI * 2;

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius;
            positions[i3 + 1] = (Math.random() - 0.5) * 0.5;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius;

            // Color variation
            const color = colorPalette[i % colorPalette.length].clone();
            color.lerp(new THREE.Color(0xffffff), Math.random() * 0.3);

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const galaxyMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
        scene.add(galaxy);

        // Add central glow
        const glowGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.6,
        });
        const centralGlow = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(centralGlow);

        // Add ambient light particles
        const ambientParticlesGeometry = new THREE.BufferGeometry();
        const ambientCount = 200;
        const ambientPositions = new Float32Array(ambientCount * 3);

        for (let i = 0; i < ambientCount * 3; i++) {
            ambientPositions[i] = (Math.random() - 0.5) * 10;
        }

        ambientParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3));

        const ambientMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xffffff,
            transparent: true,
            opacity: 0.3,
        });

        const ambientParticles = new THREE.Points(ambientParticlesGeometry, ambientMaterial);
        scene.add(ambientParticles);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };

        containerRef.current.addEventListener('mousemove', handleMouseMove);

        // Animation
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate galaxy
            galaxy.rotation.y = elapsedTime * 0.1;
            galaxy.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

            // Pulse central glow
            centralGlow.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.1);

            // Rotate ambient particles slowly
            ambientParticles.rotation.y = elapsedTime * 0.05;
            ambientParticles.rotation.x = elapsedTime * 0.03;

            // Mouse interaction
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!containerRef.current) return;

            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            galaxyGeometry.dispose();
            galaxyMaterial.dispose();
            glowGeometry.dispose();
            glowMaterial.dispose();
            ambientParticlesGeometry.dispose();
            ambientMaterial.dispose();
        };
    }, []);

    return <div ref={containerRef} className="w-full h-full" />;
};

export default GalaxyModel3D;
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
    useEffect(() => {
        // Initialize Lenis with a configuration optimized for "heavy" smooth feeling
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
        });

        let timeout;
        let isSnapping = false;

        function snapToNearest() {
            if (isSnapping) return;

            const snapPoints = document.querySelectorAll('.snap-start');
            let minDistance = Infinity;
            let target = null;

            snapPoints.forEach(el => {
                const rect = el.getBoundingClientRect();
                // We want to find the section whose TOP comes closest to the viewport TOP (0)
                const dist = Math.abs(rect.top);

                if (dist < minDistance) {
                    minDistance = dist;
                    target = el;
                }
            });

            // If a target is found and we are not already perfectly aligned (with 1px tolerance)
            if (target && minDistance > 1) {
                isSnapping = true;
                lenis.scrollTo(target, {
                    duration: 1.0, // Slower, luxurious snap duration
                    easing: (t) => 1 - Math.pow(1 - t, 5), // quintOut easing for softer landing
                    onComplete: () => {
                        isSnapping = false;
                    }
                });
            }
        }

        // Hook into the scroll event.
        // We debounce the snap logic: waiting for the user to essentially "release" or stop scrolling
        // before we take over and glide them to the nearest point.
        const unsubscribe = lenis.on('scroll', ({ velocity }) => {
            clearTimeout(timeout);
            // If the user is scrolling fast, we wait longer to let them coast.
            // If they are slow, we snap sooner.
            const waitTime = Math.abs(velocity) > 5 ? 150 : 5;

            timeout = setTimeout(snapToNearest, waitTime);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            clearTimeout(timeout);
            unsubscribe();
        };
    }, []);

    return null;
};

export default SmoothScroll;

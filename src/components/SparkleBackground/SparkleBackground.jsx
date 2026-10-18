import React, { useEffect, useRef, useCallback } from 'react';
import './styles.css';

const SparkleBackground = () => {
    const canvasRef = useRef(null);
    // Removed animationFrameId as continuous redraw is no longer needed

    // A pseudo-random function based on coordinates to ensure the pattern
    // stays exactly the same when resizing the window.
    const pseudoRandom = (x, y) => {
        const dot = x * 12.9898 + y * 78.233;
        return (Math.sin(dot) * 43758.5453) % 1;
    };
    let width, height;
    const GRID_SIZE = 45; // Spacing between grid lines
    const CROSS_SIZE = 6; // Length of the '+' arms
    const CROSS_PROBABILITY = 0.35; // 35% chance to spawn a cross at an intersection

    const draw = useCallback(
        (ctx, width, height) => {
            ctx.clearRect(0, 0, width, height);

            // 1. Draw the faint background grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)'; // Very faint neutral
            ctx.lineWidth = 1;
            ctx.beginPath();

            // Draw vertical lines
            for (let x = 0; x <= width; x += GRID_SIZE) {
                ctx.moveTo(x + 0.5, 0); // +0.5 for crisp lines
                ctx.lineTo(x + 0.5, height);
            }
            // Draw horizontal lines
            for (let y = 0; y <= height; y += GRID_SIZE) {
                ctx.moveTo(0, y + 0.5); // +0.5 for crisp lines
                ctx.lineTo(width, y + 0.5);
            }
            ctx.stroke();

            // 2. Draw the scattered glowing crosses
            // Start offset by GRID_SIZE so they don't hug the very edge tightly
            for (let x = GRID_SIZE; x < width; x += GRID_SIZE) {
                for (let y = GRID_SIZE; y < height; y += GRID_SIZE) {
                    // Use absolute coordinates to seed the random so they don't shift
                    const rand = pseudoRandom(x, y);

                    // If condition matches, draw a cross
                    if (Math.abs(rand) < CROSS_PROBABILITY) {
                        // Determine intensity/glow based on X position
                        // (Matches the image: brighter/more visible on the right)
                        const normalizedX = x / width;
                        const brightness = 0.1 + normalizedX * 0.4; // 10% to 50%

                        // Cross color - neutral grey, picking up a hint of the accent blue on the right
                        const r = Math.floor(150 - 28 * normalizedX);
                        const g = Math.floor(155 + 7 * normalizedX);
                        const b = Math.floor(170 + 85 * normalizedX);

                        const colorStr = `rgba(${r}, ${g}, ${b}, ${brightness})`;

                        // Set drawing properties
                        ctx.strokeStyle = colorStr;
                        ctx.lineWidth = 1.2;

                        // No glow, keep the crosses crisp and subtle
                        ctx.shadowBlur = 0;

                        // Draw the cross (using + 0.5 for crisp 1px lines on canvas)
                        const cx = Math.floor(x) + 0.5;
                        const cy = Math.floor(y) + 0.5;
                        const halfSize = CROSS_SIZE / 2;

                        ctx.beginPath();
                        // Horizontal line
                        ctx.moveTo(cx - halfSize, cy);
                        ctx.lineTo(cx + halfSize, cy);
                        // Vertical line
                        ctx.moveTo(cx, cy - halfSize);
                        ctx.lineTo(cx, cy + halfSize);
                        ctx.stroke();
                    }
                }
            }
        },
        [pseudoRandom],
    ); // Dependencies for useCallback

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!canvas || !ctx) return; // Ensure canvas and context are available

        const GRID_SIZE = 45; // Spacing between grid lines
        const CROSS_PROBABILITY = 0.35; // 35% chance to spawn a cross at an intersection

        let animationFrameId = null;

        const resizeAndDraw = () => {
            // Handle high DPI displays for sharp rendering
            const dpr = window.devicePixelRatio || 1;
            const currentWidth = window.innerWidth;
            const currentHeight = window.innerHeight;

            canvas.width = currentWidth * dpr;
            canvas.height = currentHeight * dpr;

            ctx.scale(dpr, dpr);

            draw(ctx, currentWidth, currentHeight);
        };

        // Initialize
        window.addEventListener('resize', resizeAndDraw);
        resizeAndDraw(); // Trigger initial sizing and drawing

        return () => {
            window.removeEventListener('resize', resizeAndDraw);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [draw]); // Dependencies for useEffect: only re-run if 'draw' changes

    return (
        <div
            id="canvas-container"
            aria-hidden="true">
            <canvas
                id="gridCanvas"
                ref={canvasRef}></canvas>
        </div>
    );
};

export default SparkleBackground;

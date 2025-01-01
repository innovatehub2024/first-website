import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points = [];
        const spacing = 40; // Spacing between the mesh points
        const mouse = { x: null, y: null };
        const attractionRadius = 250; // How close the mouse needs to be to affect the points
        const boundaryPadding = 10; // Minimum distance from the screen edges

        // Create a grid of points
        for (let x = 0; x <= width; x += spacing) {
            for (let y = 0; y <= height; y += spacing) {
                points.push({
                    x: x,
                    y: y,
                    originX: x,
                    originY: y,
                    vx: 0,
                    vy: 0
                });
            }
        }

        const drawMesh = () => {
            context.clearRect(0, 0, width, height);

            points.forEach(point => {
                // Calculate the distance between the mouse and the current point
                const dx = point.x - mouse.x;
                const dy = point.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // If the mouse is within the attraction radius, move the point
                if (distance < attractionRadius) {
                    const force = (attractionRadius - distance) / attractionRadius;
                    point.vx += force * dx * 0.01;
                    point.vy += force * dy * 0.01;
                }

                // Apply velocity and smoothly move the points back to their original positions
                point.vx *= 0.95; // Damping to slow down movement
                point.vy *= 0.95;
                point.x += point.vx;
                point.y += point.vy;

                // Ensure the points don't go beyond the canvas boundary
                point.x = Math.max(boundaryPadding, Math.min(point.x, width - boundaryPadding));
                point.y = Math.max(boundaryPadding, Math.min(point.y, height - boundaryPadding));

                // Draw the point as a triangle
                drawTriangle(context, point.x, point.y, 5, '#303050');

                // Draw lines between points to create a mesh
                const neighbors = getNeighbors(point, spacing);
                neighbors.forEach(neighbor => {
                    context.beginPath();
                    context.moveTo(point.x, point.y);
                    context.lineTo(neighbor.x, neighbor.y);
                    context.strokeStyle = `rgba(255, 200, 125, ${1 - distance / attractionRadius})`;
                    context.stroke();
                });
            });

            requestAnimationFrame(drawMesh);
        };

        // Function to draw a triangle at a given position
        const drawTriangle = (ctx, x, y, size, color) => {
            const halfSize = size / 4;
            ctx.beginPath();
            ctx.moveTo(x, y - halfSize); // Top vertex
            ctx.lineTo(x + halfSize, y + halfSize); // Bottom-right vertex
            ctx.lineTo(x - halfSize, y + halfSize); // Bottom-left vertex
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        };

        const getNeighbors = (point, spacing) => {
            return points.filter(p => {
                const dx = Math.abs(p.x - point.x);
                const dy = Math.abs(p.y - point.y);
                return dx <= spacing && dy <= spacing && (dx + dy > 0);
            });
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        drawMesh();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="hero ">
            <canvas ref={canvasRef} className="background-canvas"></canvas>
            <div className="hero-content">
                <h1 className="titlef">InnovateHUB</h1>
                <div className="slogan-container">
                    <h1 className="slogan">
                        <span className="slogan-word">Inspire</span>.
                        <span className="slogan-word">Innovate</span>.
                        <span className="slogan-word">Grow</span>
                    </h1>
                </div>
                <button className="hero-button">Get Started</button>
            </div>
        </section>
    );
};

export default Hero;

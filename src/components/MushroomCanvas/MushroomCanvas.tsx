import React, { useRef, useEffect } from 'react';

interface Pixel {
    x: number;
    y: number;
}

const MushroomCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let pixels: Pixel[] = [];
    let timeoutId: NodeJS.Timeout;

    const createMushroomShape = () => {
        const mushroomPixels: Pixel[] = [];
        const width = canvasRef.current!.width;
        const height = canvasRef.current!.height;

        // The hat
        for (let i = width / 2 - 50; i < width / 2 + 50; i++) {
            for (let j = 50; j < 150; j++) {
                mushroomPixels.push({ x: i, y: j });
            }
        }

        // The foot
        for (let i = width / 2 - 10; i < width / 2 + 10; i++) {
            for (let j = 150; j < height / 2; j++) {
                mushroomPixels.push({ x: i, y: j });
            }
        }

        return mushroomPixels;
    };

    // Random pixels
    const randomizePixels = (numPixels: number) => {
        const randomPixels: Pixel[] = [];
        for (let i = 0; i < numPixels; i++) {
            randomPixels.push({
                x: Math.random() * canvasRef.current!.width,
                y: Math.random() * canvasRef.current!.height,
            });
        }
        return randomPixels;
    };

    const drawPixels = (ctx: CanvasRenderingContext2D, pixelsToDraw: Pixel[]) => {
        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        ctx.fillStyle = 'black';
        pixelsToDraw.forEach(pixel => {
            ctx.fillRect(pixel.x, pixel.y, 1, 1);
        });
    };

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                let formingMushroom = false;
                const mushroomPixels = createMushroomShape();
                pixels = randomizePixels(mushroomPixels.length);

                const animate = () => {
                    // Toggle state
                    formingMushroom = !formingMushroom;

                    // Clear the canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    if (formingMushroom) {
                        drawPixels(ctx, mushroomPixels);
                    } else {
                        drawPixels(ctx, pixels);
                    }

                    // Continue the loop
                    timeoutId = setTimeout(animate, 5000);
                };

                animate();
            }
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <canvas ref={canvasRef} width="405" height="348" />;
};

export default MushroomCanvas;

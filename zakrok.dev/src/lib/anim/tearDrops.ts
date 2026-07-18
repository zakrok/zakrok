import {toGrayscaleHex, toHex} from "$lib/colorUtil";
import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export function tearDrop(screenWidth: number, screenHeight: number): ArttAnimation {
    const dropSpeed = Math.random() * 4 + 1;
    const dropLength = 8;
    
    const drop = {
        x: Math.random() * screenWidth,
        startY: Math.random() * screenHeight,
        color: toGrayscaleHex(Math.floor(10 + Math.random() * 245))
    };
    
    const framesNeeded = Math.ceil((screenHeight + dropLength) / dropSpeed);
    
    const frames: ((ctx: CanvasRenderingContext2D) => void)[] = [];
    
    for (let frame = 0; frame < framesNeeded; frame++) {
        frames.push(ctx => {
            const currentY = (drop.startY + (frame * dropSpeed)) % screenHeight;

            if (currentY < screenHeight && currentY > -dropLength) {
                ctx.strokeStyle = drop.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(drop.x, currentY);
                ctx.lineTo(drop.x, currentY + dropLength);
                ctx.stroke();
            }
        });
    }
    
    return { frames };
}
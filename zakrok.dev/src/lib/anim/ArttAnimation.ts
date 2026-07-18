export interface ArttAnimation {
    frames: ((ctx: CanvasRenderingContext2D) => void)[]
}

export function renderFrame(animations: ArttAnimation[], ctx: CanvasRenderingContext2D, ctr: number) {
    const frameArrays = animations.map(a => a.frames);
    const maxLength = Math.max(...frameArrays.map(frames => frames.length));

    if (maxLength > 0) {
        const currentFrame = ctr % maxLength;
        frameArrays.forEach(frames => frames[currentFrame % frames.length](ctx));
    }
}

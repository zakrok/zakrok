import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export function text(screenWidth: number, screenHeight: number): ArttAnimation {
    const frames: ((ctx: CanvasRenderingContext2D) => void)[] = [];

    const text = 'the world is yours'

    for (let i = 0; i < text.length; i+=2) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillText(text.slice(0, i)+'|', screenWidth/2 + 50, screenHeight/2)
        })
    }
    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillText(text+'|', screenWidth/2 + 50, screenHeight/2)
    })
    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillText(text+'|', screenWidth/2 + 50, screenHeight/2)
    })
    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillText(text+'.|', screenWidth/2 + 50, screenHeight/2)
    })
    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillText(text+'..|', screenWidth/2 + 50, screenHeight/2)
    })
    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillText(text+'...|', screenWidth/2 + 50, screenHeight/2)
    })

    for (let i = 0; i < 20; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillText('the world is yours...|', screenWidth/2 + 50, screenHeight/2)
        })

        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillText('the world is yours...', screenWidth/2 + 50, screenHeight/2)
        })
    }

    return { frames };
}
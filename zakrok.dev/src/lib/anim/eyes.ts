import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export function eyes(screenWidth: number, screenHeight: number): ArttAnimation {
    const frames: ((ctx: CanvasRenderingContext2D) => void)[] = [];

    const genesis = [screenWidth/2, screenHeight/2]

    for (let i = 1; i < 5; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(genesis[0] - 250, genesis[1] - 10*i, 200, 20 * i)
            ctx.fillRect(genesis[0], genesis[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'black'
            ctx.fillRect(genesis[0] - 50 - 50, genesis[1] - 20, 40, 40)
            ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
        })
    }

    for (let i = 0; i < 10; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(genesis[0] - 250, genesis[1] - 50, 200, 100)
            ctx.fillRect(genesis[0], genesis[1] - 50, 200, 100)

            ctx.fillStyle = 'black'
            ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
            ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
        })
    }

    for (let i = 5; i > 0; i--) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(genesis[0] - 250, genesis[1] - 10*i, 200, 20 * i)
            ctx.fillRect(genesis[0], genesis[1] - 10*i, 200, 20 * i)

            ctx.fillStyle = 'black'
            ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
            ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
        })
    }

    for (let i = 0; i < 15; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(genesis[0] - 250, genesis[1] - 10, 200, 20)
            ctx.fillRect(genesis[0], genesis[1] - 10, 200, 20)

            ctx.fillStyle = 'black'
            ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
            ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
        })
    }

    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillRect(genesis[0] - 250, genesis[1] - 30, 60, 20)
        ctx.fillRect(genesis[0] + 140, genesis[1] - 30, 60, 20)
        ctx.fillRect(genesis[0] - 250, genesis[1] - 10, 200, 20)
        ctx.fillRect(genesis[0], genesis[1] - 10, 200, 20)

        ctx.fillStyle = 'black'
        ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
        ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
    })

    frames.push(ctx => {
        ctx.fillStyle = 'white'
        ctx.fillRect(genesis[0] - 250, genesis[1] - 50, 40, 20)
        ctx.fillRect(genesis[0] + 160, genesis[1] - 50, 40, 20)
        ctx.fillRect(genesis[0] - 250, genesis[1] - 30, 100, 20)
        ctx.fillRect(genesis[0] + 100, genesis[1] - 30, 100, 20)
        ctx.fillRect(genesis[0] - 250, genesis[1] - 10, 200, 20)
        ctx.fillRect(genesis[0], genesis[1] - 10, 200, 20)

        ctx.fillStyle = 'black'
        ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
        ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
    })

    for (let i = 0; i < 15; i++) {
        frames.push(ctx => {
            ctx.fillStyle = 'white'
            ctx.fillRect(genesis[0] - 250, genesis[1] - 50, 70, 20)
            ctx.fillRect(genesis[0] + 130, genesis[1] - 50, 70, 20)
            ctx.fillRect(genesis[0] - 250, genesis[1] - 30, 110, 20)
            ctx.fillRect(genesis[0] + 90, genesis[1] - 30, 110, 20)
            ctx.fillRect(genesis[0] - 250, genesis[1] - 10, 200, 20)
            ctx.fillRect(genesis[0], genesis[1] - 10, 200, 20)

            ctx.fillStyle = 'black'
            ctx.fillRect(genesis[0] - 100, genesis[1] - 20, 40, 40)
            ctx.fillRect(genesis[0] + 10, genesis[1] - 20, 40, 40)
        })
    }

    return {frames};
}

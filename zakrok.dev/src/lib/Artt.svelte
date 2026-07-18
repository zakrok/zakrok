<script lang="ts">
    import {onMount} from 'svelte';
    import {renderFrame} from "$lib/anim/ArttAnimation";
    import type {Scene} from "$lib/anim/Scene";
    import {eyes} from "$lib/anim/eyes";
    import {tearDrop} from "$lib/anim/tearDrops";
    import {text} from "$lib/anim/text";

    let canvas: HTMLCanvasElement;
    let windowWidth = $state(1920);
    let windowHeight = $state(1080);


    onMount(() => {
        const handleResize = () => {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        };

        handleResize()

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    const teardropScene: Scene = {
        animations: [],
        rate: 15,
        duration: 4000
    }

    $effect(() => {
        for (let i = 0; i < 50; i++) teardropScene.animations.push(tearDrop(windowWidth, windowHeight))

        const ctx = canvas.getContext('2d')!;

        canvas.width = windowWidth
        canvas.height = windowHeight

        const scenes: Scene[] = [
            {
                animations: [eyes(windowWidth, windowHeight)],
                rate: 10,
                duration: 5300
            },
            teardropScene,
            {
                animations: [text(windowWidth, windowHeight)],
                rate: 2,
                duration: 10000
            }
        ]

        let ctr = 0
        let sceneTimer = Date.now();
        let scene = 0;
        let last = Date.now() - 3000
        let animationId: number;

        function animation_loop(ctx: CanvasRenderingContext2D) {
            let now = Date.now()

            if (now - sceneTimer > scenes[scene].duration) {
                scene++;
                scene = scene % scenes.length
                sceneTimer = now
                ctr = 0;
            }

            if (now - last > 1000/scenes[scene].rate) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                renderFrame(scenes[scene].animations, ctx, ctr);

                ctr++;
                last = now
            }
            animationId = requestAnimationFrame(() => animation_loop(ctx))
        }

        animation_loop(ctx)

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }
    });

</script>

<canvas class="absolute overflow-x-hidden"
        bind:this={canvas}></canvas>

<style>
    canvas {
        z-index: -10;
    }
</style>

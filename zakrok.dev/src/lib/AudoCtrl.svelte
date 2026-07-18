<script lang="ts">
    import {onMount} from "svelte";

    let audio: HTMLAudioElement;

    onMount(() => {
        audio.autoplay = true
        audio.volume = 0.3
    })
</script>

<div class="flex flex-col">
    <div class="flex gap-4">
        <audio bind:this={audio} src="/watch_dogs_2.ogg" autoplay loop>
            browser cannot play audio
        </audio>
        <button on:click={() => audio.play()} class="cursor-pointer underline">play</button>
        <button on:click={() => audio.pause()} class="cursor-pointer underline">un/pause</button>
        <button on:click={() => audio.volume += 0.1} class="cursor-pointer text-2xl">+</button>
        <button on:click={() => audio.volume -= 0.1} class="cursor-pointer text-2xl">-</button>
    </div>

    <i class="text-sm text-gray-300 w-48 leading-4">keep in mind this song is not made by me and it is from Watch Dogs 2</i>
</div>
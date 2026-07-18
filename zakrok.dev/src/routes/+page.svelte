<script lang="ts">
    import Artt from "$lib/Artt.svelte";
    import Window from "$lib/Window.svelte";
    import AudoCtrl from "$lib/AudoCtrl.svelte";
    import My88x31Tag from "$lib/MyTag.svelte";
    import Anchor from "$lib/Anchor.svelte";
    import X8831 from "$lib/X8831.svelte";
</script>

<Artt />

<div class="absolute flex flex-col gap-2" style="bottom: 2em; right: 2em;">
    <Window title="d3ds3c.ogg" bottom={8.5}>
        <AudoCtrl />
    </Window>
    <Window title="c00l_th1ngzz.txt" bottom={8.5}>
        <div class="grid grid-cols-2 gap-y-2 w-full">
            <h3># link me</h3>
            <h3># my pgp</h3>
            <My88x31Tag />
            <a href="ident.txt" target="_blank">
                <X8831 which="pgp.png" />
            </a>
            <hr class="my-2 w-10/12 mx-auto border-gray-300 col-span-2">
            <a href="https://jetbrains.com" target="_blank">
                <X8831 which="jb.png" />
            </a>
            <a href="https://jetbrains.com/webstorm" target="_blank">
                <X8831 which="ws.png" />
            </a>
            <X8831 which="svelte.png" />
        </div>
    </Window>
    <Window title="friends.txt" bottom={2}>
        <div class="grid grid-cols-2">
            <ul class="list-disc list-inside underline">
                <li><a href="https://garden.pacia.tech" target="_blank">bpacia</a></li>
                <li><a href="https://andreats.com/" target="_blank">andtsa</a></li>
                <li><a href="https://dnbln.dev/" target="_blank">dnbln</a></li>
            </ul>
            <ul class="list-disc list-inside underline">
                <li><a href="https://tminnleggen.no/" target="_blank">2bias123</a></li>
            </ul>
        </div>
    </Window>
</div>

<main class="w-screen h-screen p-8 pb-20 flex flex-col-reverse">
    <div class="flex flex-col font-pixel">
        <span class="text-gray-500 text-lg">
             # software engineer @ jetbrains & computer science student @ TUDelft
        </span>
        <h1 class="text-gray-100 font-bold text-4xl">
            // kiril panayotov
        </h1>
        <hr class="p-4">
        <div class="flex gap-4 flex-col lg:flex-row">
            <Anchor href="projects" inverted>
                // explore my work
            </Anchor>
            <Anchor href="blog">
                # browse my blog
            </Anchor>
            <Anchor href="about">
                # learn more about me
            </Anchor>
        </div>
        <div class="flex gap-4 mt-2">
            <Anchor href="https://github.com/zakrok" underlined target="_blank">
                GitHub
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/kiril-panayotov/" underlined target="_blank">
                LinkedIn
            </Anchor>
        </div>
    </div>
</main>

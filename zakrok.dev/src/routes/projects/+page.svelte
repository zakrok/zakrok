<script>
import Anchor from "$lib/Anchor.svelte";
</script>
<nav class="font-pixel text-white w-1/2 mx-auto mb-12 mt-6">
    <a href="/" class="underline">home</a>
    <a href="/projects" class="underline bg-white text-black">projects</a>
    <a href="/blog" class="underline">blog</a>
    <a href="/about" class="underline">about</a>
</nav>


<main class="lg:w-1/2 p-8 lg:p-0 mx-auto text-white font-pixel">
    <span class="text-gray-500 font-pixel">
        - - <del>design</del> engineering is my passion
    </span>
    <h1 class="font-bold text-3xl mb-12">
        // projects
    </h1>

    <h2 class="font-semibold text-xl">
        My own projects
    </h2>

    <ul class="list-disc list-inside text-lg">
        <li><Anchor underlined href="https://github.com/zakrok/ts-automata" target="_blank">ts-automata</Anchor></li>
        <li><Anchor underlined href="https://github.com/delft-hyperloop/serpenta" target="_blank">serpenta</Anchor></li>
        <li>project banner (code name, coming soon)</li>
    </ul>

    <h2 class="font-semibold mt-8 text-xl">
        ...at work, I have fixed:
    </h2>

    <ul class="list-disc list-inside text-lg">
        <li>
            <Anchor href="https://youtrack.jetbrains.com/projects/WEB/issues/WEB-75072/False-positive-Unused-Constant-inspection-for-using" underlined>
                WEB-75072
            </Anchor>
            False positive `Unused Constant` inspection for `using`
        </li>
        <li>
            <Anchor href="https://youtrack.jetbrains.com/projects/WEB/issues/WEB-74737/Exception-breakpoints-are-ignored-in-Vite-tests" underlined>
                WEB-74737
            </Anchor>
            Exception breakpoints are ignored in Vite tests
        </li>
        <li>
            <Anchor href="https://youtrack.jetbrains.com/projects/WEB/issues/WEB-63932/Provide-a-color-preview-for-CSS-color-mix" underlined>
                WEB-63932
            </Anchor>
            Provide a color preview for CSS color-mix()
        </li>
        <li>and more, check this
            <Anchor underlined href="https://youtrack.jetbrains.com/projects/WEB/issues?q=assignee:%20kiril.panayotov" target="_blank">
                search query
            </Anchor>.
        </li>
    </ul>

    <p class="italic p-4 my-2">NB!!! Nearly all of the above issues are however result of collaborative work and guidance
        from my amazing mentors and teammates (both from WebStorm and across JetBrains :)</p>

    <h2 class="font-semibold mt-8 text-xl">
        ...but I have also contributed to:
    </h2>

    <ul class="list-disc list-inside text-lg">
        <li>Mozilla Firefox <Anchor href="https://phabricator.services.mozilla.com/D275400" underlined target="_blank">
            fixing a bug with color mixing and interpolation</Anchor>
        </li>
        <li>Web Platform Tests
            <Anchor href="https://github.com/web-platform-tests/wpt/pull/56561" target="_blank" underlined>
                tests for the above fix
            </Anchor>
        </li>
        <li><a href="https://github.com/SERG-Delft/andy" target="_blank">Andy (by TU Delft)</a></li>
        <li><a href="https://github.com/skalinichev/uplot-wrappers" target="_blank">uplot-wrappers</a></li>
    </ul>

</main>

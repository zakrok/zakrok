<script>
    import X8831 from "$lib/X8831.svelte";

    async function copy_88() {
        try {
            await navigator.clipboard.writeText(
                "<a href=\"https://zakrok.dev\" target=\"_blank\">\n" +
                "    <img src=\"https://zakrok.dev/88x31/me.gif\" alt=\"zakrok.dev personal website banner\" />\n" +
                "</a>\n"
            )
        } catch (e) {}
    }
</script>

<button on:click={copy_88} class="cursor-pointer" aria-label="Click to copy banner link to zakrok.dev!">
    <X8831 which="me.gif" />
</button>
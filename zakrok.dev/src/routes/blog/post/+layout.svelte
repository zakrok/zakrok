<script lang="ts">
    import Nav from "../../../lib/Nav.svelte";

    let { children } = $props();
</script>

<Nav current="blog" />

<main class="mx-4 md:mx-auto md:w-1/2 block prose max-w-none
            prose-p:text-lg
            prose-blockquote:text-white
            prose-h1:text-white
            prose-h2:text-white
            prose-p:text-white
            prose-kbd:text-white
            prose-a:text-white
            prose-code:text-white
            prose-ul:text-white
            prose-il:text-white
            font-pixel">
    {@render children()}
</main>

<script>
    import Nav from "../../lib/Nav.svelte";
</script>

<Nav current="blog" />

<main class="lg:w-1/2 p-8 lg:p-0 mx-auto font-pixel">
    <span class="text-gray-500 font-pixel">
        {" {- From notes to articles -} "}
    </span>
    <h1 class="font-bold text-3xl text-white mb-12">
        // blog
    </h1>
    <ul class="list-inside list-decimal text-white text-lg">
        <li><a href="/blog/post/nix_post">Home manager GitHub GPG commit signing</a></li>
    </ul>
</main>

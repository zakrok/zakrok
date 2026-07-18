<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
    <title>zakrok.dev</title>
    <meta name="author" content="Praxidike">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="personal website of kiril panayotov. explore my projects and blog">
    <meta name="og:type" content="website">
    <meta name="og:title" content="zakrok.dev">
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">

    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage" content="/favicon-144x144.png">
    <meta name="msapplication-config" content="/browserconfig.xml">

    <meta property="og:url"                 content="https://zakrok.dev/" />
    <meta property="og:site_name"           content="zakrok.dev" />
    <meta property="og:image"               content="https://zakrok.dev/ogmeta.png">
    <meta property="og:image:alt"           content="zakrok.dev">
    <meta property="og:image:width"         content="1200">
    <meta property="og:image:height"        content="630">
    <meta property="og:locale"              content="en_US" />

    <meta name="twitter:card" content="summary_large_image">

    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#ffffff">
    <meta name="lang" content="en">
</svelte:head>
{@render children()}

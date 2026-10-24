<script lang="ts">
    let { current }: { current?: 'projects' | 'blog' | 'about' } = $props();

    const active = 'underline bg-white text-black';
    const idle = 'underline';
</script>

<nav class="font-pixel text-white w-11/12 md:w-1/2 mx-auto mb-12 mt-6">
    <a href="/" class={idle}>home</a>
    <a href="/projects" class={current === 'projects' ? active : idle}>projects</a>
    <a href="/blog" class={current === 'blog' ? active : idle}>blog</a>
    <a href="/about" class={current === 'about' ? active : idle}>about</a>
</nav>

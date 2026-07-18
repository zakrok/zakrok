<script lang="ts">
    let { title, bottom, children }: { title: string, bottom: number, children: any } = $props();
</script>

<aside
    class="hidden md:block border-2 grow-0 border-white font-pixel text-white bg-black"
    style="right: 2em; bottom: {bottom}em">
    <div class="flex justify-between gap-8 px-2 border-b-white border-b-2">
        <span>{title}</span>
        <div class="flex gap-2">
            <span>_</span><span>[]</span><span>X</span>
        </div>
    </div>
    <div class="p-4">
        {@render children()}
    </div>
</aside>

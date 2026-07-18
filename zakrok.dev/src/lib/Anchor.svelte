<script lang="ts">
    let {href, inverted, underlined, target, children}: {
        href: string,
        inverted?: boolean,
        underlined?: boolean,
        target?: string,
        children: any
    } = $props()
</script>

<a href={href}
   target={target}
   class="{inverted ? `bg-white text-black hover:bg-gray-300` : `text-white hover:text-gray-300` }
          {underlined ? `underline` : ``}
           px-2 cursor-pointer">
    {@render children()}
</a>
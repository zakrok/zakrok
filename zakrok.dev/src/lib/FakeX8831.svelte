<script lang="ts">
    let {text} : {text: string} = $props()
</script>

<div class="flex justify-center align-middle text-black text-sm">
    <span>{text}</span>
</div>

<style>
    div {
        width: 88px;
        height: 31px;
        background: #cccccc;
        border-top: 2px solid #ebebeb;
        border-left: 2px solid #ebebeb;
        border-bottom: 2px solid #828282;
        border-right: 2px solid #828282;
    }
</style>

<script lang="ts">
  import "./layout.css";

  let { children } = $props();
</script>

<svelte:boundary>
  {#snippet pending()}
    loading layout...
  {/snippet}

  {@render children?.()}
</svelte:boundary>

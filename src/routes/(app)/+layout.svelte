<script lang="ts">
  import ContentPending from "$lib/boundaries/ContentPending.svelte";

  let { children } = $props();
</script>

<ContentPending>
  {@render children?.()}
</ContentPending>

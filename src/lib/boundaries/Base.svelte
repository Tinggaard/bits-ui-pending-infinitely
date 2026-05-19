<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    pending,
    onerror = (e) => console.error(e),
  }: {
    children: Snippet;
    pending: Snippet;
    onerror?: (error: unknown, reset: () => void) => void;
  } = $props();
</script>

<svelte:boundary {onerror} {pending}>
  {@render children?.()}

  {#snippet failed(error, reset)}
    Something went wrong, click to try again...
    <button class="btn" onclick={reset}> Retry </button>
    <pre>{error}</pre>
  {/snippet}
</svelte:boundary>

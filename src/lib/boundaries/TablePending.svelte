<script lang="ts">
  import Base from "./Base.svelte";
  import type { Props } from "./types.js";

  let props: Props = $props();
</script>

{#snippet pending()}
  <div
    class="*:placeholder grid px-2 *:animate-pulse grid-cols-[2fr_1fr_1fr] gap-x-10 gap-y-4 *:h-6"
  >
    {#each { length: 5 } as _, i (i)}
      {#each { length: 3 } as _, j (j)}
        <div></div>
      {/each}
    {/each}
  </div>
{/snippet}

<Base {...props} {pending} />

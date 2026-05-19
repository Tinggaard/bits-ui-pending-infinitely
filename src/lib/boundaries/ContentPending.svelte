<script lang="ts">
  import Base from "./Base.svelte";
  import type { Props } from "./types.js";

  let { ...props }: Props = $props();
</script>

{#snippet pending()}
  <div
    class="*:placeholder mx-auto mt-48 grid max-w-7xl grid-cols-12
          grid-rows-[repeat(3,auto)_100px_auto_repeat(3,auto)] items-start gap-4 *:animate-pulse"
  >
    <div class="col-span-8"></div>
    <div class="col-span-4"></div>

    <div class="col-span-3 col-start-1"></div>
    <div class="col-span-3"></div>
    <div class="col-span-3"></div>

    <div class="col-span-3 col-start-1"></div>
    <div class="col-span-2"></div>
    <div class="col-span-3"></div>

    <div class="col-span-4 col-start-1"></div>
    <div class="col-span-3"></div>
    <div class="col-span-3"></div>

    <!-- big skip here -->

    <div class="col-span-7 col-start-1"></div>
    <div class="col-span-5"></div>

    <div class="col-span-2 col-start-1"></div>
    <div class="col-span-4"></div>
    <div class="col-span-3"></div>

    <div class="col-span-5 col-start-1"></div>
    <div class="col-span-3"></div>
    <div class="col-span-3"></div>
  </div>
{/snippet}

<Base {...props} {pending} />

<!-- 
@component

literally an empty boundary that resolves instantly
but needed to reproduce
-->
<svelte:boundary>
  {#snippet pending()}
    loading...
  {/snippet}

  {@const _ = await Promise.resolve("data")}
</svelte:boundary>

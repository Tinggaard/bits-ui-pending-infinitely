<script lang="ts">
  import TablePending from "$lib/boundaries/TablePending.svelte";
</script>

<TablePending>
  {@const _ = await Promise.resolve("data")}
</TablePending>

<script lang="ts">
  import Boundary from "$lib/components/Boundary.svelte";
  import Form from "$lib/components/Form.svelte";
</script>

<div class="p-4">
  <Form />

  <!-- BUG: commenting this one out, the date value initializes properly -->
  <Boundary />
</div>

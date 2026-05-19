<script lang="ts">
  import DatePicker from "$lib/DatePicker.svelte";
  import { type ZonedDateTime } from "@internationalized/date";

  let value = $state<ZonedDateTime>();
</script>

<DatePicker bind:value />

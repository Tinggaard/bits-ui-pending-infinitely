<script lang="ts">
  import DatePicker from "$lib/DatePicker.svelte";
  import {
    fromDate,
    getLocalTimeZone,
    type DateValue,
  } from "@internationalized/date";
  import { onMount } from "svelte";

  // helper to make it easy to swap the two out
  const initialize = () => fromDate(new Date(), getLocalTimeZone());

  let value = $state<DateValue>();
  // let value = $state<DateValue>(initialize());

  onMount(() => {
    value = initialize();
  });
</script>

<DatePicker bind:value />

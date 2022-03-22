<template>
  <div
    class="
      shadow
      rounded-md
      p-4
      m-3
      bg-white
      flex
      flex-col
      items-center
      justify-center
      h-72
    "
  >
    <div class="animate-pulse flex flex-col items-center">
      <div class="rounded-full bg-gray-200 h-32 w-32"></div>
      <div class="flex-1 mt-3 py-1">
        <div class="h-5 w-48 mt-5 bg-gray-200 rounded"></div>
        <div class="space-y-3">
          <div class="h-2 bg-gray-200 rounded mt-5"></div>
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="h-2 bg-gray-200 rounded col-span-1"></div>
            <div class="h-2 bg-gray-200 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "skeleton-card",
});
</script>
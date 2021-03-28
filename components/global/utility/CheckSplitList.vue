<template>
  <div class="col-span-2 grid grid-cols-1 md:grid-cols-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex space-x-2 flex-row py-4 md:py-1 items-center"
      :class="{ 'md:pl-8 md:border-l border-gray-100': index % 2 }"
    >
      <div class="rounded-full w-4 h-4 bg-green-100">
        <check-icon class="h-4 w-4 text-green-600" />
      </div>
      <p class="text-gray-600">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import checkIcon from '@/assets/icons/check.svg'

export default {
  components: {
    checkIcon,
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>

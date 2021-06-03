<template>
  <div class="flex flex-row mb-12">
    <slot name="header-image"> </slot>

    <div class="ml-4">
      <p class="font-thin text-2xl md:text-2xl">{{ description }}</p>
      <p class="font-thin text-2xl md:text-8xl uppercase">
        {{ title }} <span class="text-3xl">{{ date }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
}
</script>

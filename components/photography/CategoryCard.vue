<template>
  <nuxt-link
    class="self-center cursor-pointer group"
    :to="{ path: `/photography/${to}` }"
  >
    <photo-thumbnail
      :path="`${folder}/${cover}`"
      styles="transform transition-all duration-200 ease-in-out group-hover:opacity-90 group-hover:scale-101 self-center object-cover"
      :size-style="imageSizeStyle"
    />
    <div class="flex flex-col pt-2">
      <p class="text-lg group-hover:text-primary">{{ title }}</p>
      <p class="text-sm text-gray-500 group-hover:text-primary">{{ date }}</p>
    </div>
  </nuxt-link>
</template>

<script>
import PhotoThumbnail from '../photography/PhotoThumbnail'
export default {
  components: { PhotoThumbnail },
  props: {
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    cover: {
      required: true,
      type: String,
    },
    folder: {
      required: true,
      type: String,
    },
    to: {
      required: true,
      type: String,
    },
    imageSizeStyle: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>

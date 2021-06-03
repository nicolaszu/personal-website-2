<template>
  <div>
    <div v-if="!hasLoaded" class="w-auto h-96 bg-gray-200 animate-pulse" />

    <picture :class="{ invisible: !hasLoaded }">
      <source
        :srcSet="require(`~/assets/photos/${path}?webp`)"
        type="image/webp"
        :class="[sizeStyle, styles]"
      />
      <source
        :srcSet="require(`~/assets/photos/${path}`)"
        type="image/jpeg"
        :class="[sizeStyle, styles]"
      />
      <img
        class="img-opt justify-self-center self-center w-full"
        :class="[sizeStyle, styles]"
        :src="require(`~/assets/photos/${path}`)"
        :alt="`${path}`"
        loading="lazy"
        @load.once="setLoad"
      />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      required: true,
      type: String,
    },
    styles: {
      default: '',
      type: String,
    },
    sizeStyle: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      hasLoaded: false,
    }
  },
  methods: {
    setLoad() {
      this.hasLoaded = true
    },
  },
}
</script>

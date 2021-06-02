<template>
  <picture>
    <source
      :srcSet="require(`~/assets/photos/${folder}/${photo}?webp`)"
      type="image/webp"
      :class="[sizeStyle, styles]"
    />
    <source
      :srcSet="require(`~/assets/photos/${folder}/${photo}`)"
      type="image/jpeg"
      :class="[sizeStyle, styles]"
    />
    <img
      class="img-opt justify-self-center self-center"
      :class="[sizeStyle, styles]"
      :src="require(`~/assets/photos/${folder}/${photo}`)"
      :alt="`${folder}/${photo}`"
      loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  props: {
    photo: {
      required: true,
      type: String,
    },
    folder: {
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
}
</script>

<template>
  <div class="w-full relative flex justify-center group">
    <iphone-begin
      class="z-50 translate-x-4 h-64 md:h-96 w-auto transform transition-all duration-300 ease-in-out"
    />
    <img
      class="img-opt absolute w-36 md:w-60 -translate-x-8 transform md:-rotate-12"
      src="/images/homes/hospitals-iphone.png"
      alt="profile"
      loading="lazy"
    />
    <img
      class="img-opt absolute w-40 md:w-60 md:translate-x-32 transform md:rotate-12"
      src="/images/homes/nurses-iphone.png"
      alt="profile"
      loading="lazy"
    />
  </div>
</template>

<script>
import iphoneBegin from '~/assets/svg-images/homes/begin-iphone.svg'

export default {
  components: {
    iphoneBegin,
  },
}
</script>

<style lang="scss" scoped></style>

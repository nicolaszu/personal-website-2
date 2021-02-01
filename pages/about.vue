<template>
  <div class="self-center justify-self-center">
    <lottie-animation
      ref="anim"
      class="row-span-4 w-full md:w-9/12 justify-self-center self-center"
      :animation-data="require('~/assets/animations/comingSoon.json')"
      :loop="true"
      :auto-play="true"
      :speed="1"
    />
  </div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue

export default {
  components: {
    LottieAnimation,
  },
}
</script>

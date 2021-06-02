//Needed so it can be used in the md file. Error with importing lottie globally
<template>
  <lottie-animation
    ref="anim"
    class="w-40 md:w-60"
    :animation-data="require('~/assets/animations/japan.json')"
    :loop="true"
    :auto-play="true"
    :speed="1"
  />
</template>
<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue

export default {
  components: {
    LottieAnimation,
  },
}
</script>

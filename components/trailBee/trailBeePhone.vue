<template>
  <div class="relative flex phone-float" :style="{ width: 'fit-content' }">
    <img
      class="relative h-80 md:h-96 w-auto"
      src="/images/trailBee/iPhoneXTrailBee.png"
      alt="profile"
    />
    <iphone-mask
      class="top-0 right-0 object-contain absolute h-auto mr-4 w-60 md:w-72"
    />
  </div>
</template>

<script>
import iphoneMask from '~/assets/svg-images/trailBee/IphoneMaskLogo.svg?inline'

export default {
  components: {
    iphoneMask,
  },
}
</script>

<style lang="scss" scoped>
.phone-float {
  animation: float 6s alternate infinite ease-in-out;
}
@keyframes float {
  0% {
    transform: translateY(40px) rotate3d(0, 0, 0, 0deg);
  }

  100% {
    transform: translateY(50px) rotate3d(0, 0, 0, 0deg);
  }
}
</style>

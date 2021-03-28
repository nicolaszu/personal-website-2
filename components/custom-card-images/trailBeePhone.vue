<template>
  <div class="w-full flex relative overflow-hidden group">
    <img
      class="img-opt object-contain w-32 md:w-60 transform transition-all duration-300 ease-in-out group-hover:-translate-x-9"
      src="/images/trailBee/White-in-jumper5.png"
      alt="profile"
      loading="lazy"
    />
    <div class="relative flex">
      <img
        class="img-opt relative h-44 md:h-80 lg:h-96 w-auto"
        src="/images/trailBee/iPhoneXTrailBee.png"
        alt="profile"
        loading="lazy"
      />
      <iphone-mask
        class="top-0 right-0 object-contain absolute h-auto mr-4 w-32 md:w-60 lg:w-72"
      />
    </div>
  </div>
</template>

<script>
import iphoneMask from '~/assets/svg-images/trailBee/IphoneMaskLogo.svg'

export default {
  components: {
    iphoneMask,
  },
}
</script>

<style lang="scss" scoped></style>

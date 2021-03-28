<template>
  <div class="relative main-wrapper bg-white py-4">
    <div
      class="col-start-2 flex flex-col justify-center items-center md:items-start"
    >
      <div class="flex items-center gap-1">
        <nuxt-link
          tag="div"
          :to="{ path: '/' }"
          class="cursor-pointer font-extrabold text-2xl md:text-3xl"
        >
          NZ<span class="text-primary">.</span>
        </nuxt-link>
        <a :href="links.linkedin" target="_blank" rel="noopener noreferrer">
          <button class="p-1 shadow-none">
            <linkedin-icon class="text-primary-light" />
          </button>
        </a>
        <a :href="`mailto:${links.email}`">
          <button class="p-1 shadow-none">
            <mail-icon class="text-primary-light" />
          </button>
        </a>
        <a :href="links.donate" target="_blank" rel="noopener noreferrer">
          <lottie-animation
            ref="anim"
            class="w-24 h-full absolute top-0 right-0"
            :animation-data="require('~/assets/animations/fish.json')"
            :loop="true"
            :auto-play="true"
            :speed="1"
          />
        </a>
      </div>
      <p class="text-xs text-gray-400">
        © Copyright 2021 Nicolas Zuluaga. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue
import links from '~/assets/links.json'
import linkedinIcon from '~/assets/icons/linkedin.svg'
import mailIcon from '~/assets/icons/mail.svg'

export default {
  components: { linkedinIcon, mailIcon, LottieAnimation },
  data() {
    return {
      links,
    }
  },
}
</script>

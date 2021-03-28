<template>
  <div class="main-wrapper relative bg-white border-b border-gray-100">
    <nav class="z-50 col-start-2 flex justify-between items-center py-2">
      <nuxt-link
        tag="div"
        :to="{ path: '/' }"
        class="cursor-pointer font-extrabold text-2xl"
      >
        NZ<span class="text-primary">.</span>
      </nuxt-link>
      <div
        class="hamburger"
        :class="{ active: isOpen }"
        @click="isOpen = !isOpen"
      >
        <div></div>
      </div>
    </nav>
    <div
      v-if="isOpen"
      class="col-start-2 flex flex-col col-start-2 justify-between w-full gap-12 bg-white mt-16"
    >
      <div class="w-full flex flex-col col-span-full bg-white">
        <div class="flex flex-col justify-between gap-8">
          <nuxt-link
            :to="{ path: '/', hash: '#work' }"
            class="popup-option animate-fade"
            :style="{ 'animation-delay': '.1s' }"
            @click.native="toggleOption('work')"
          >
            Work
          </nuxt-link>
          <nuxt-link
            class="popup-option animate-fade"
            :style="{ 'animation-delay': '.2s' }"
            :to="{ path: '/', hash: '#personal' }"
            @click.native="toggleOption('personal')"
          >
            Personal</nuxt-link
          >
          <nuxt-link
            class="popup-option animate-fade"
            :style="{ 'animation-delay': '.3s' }"
            to="About"
            @click.native="isOpen = false"
          >
            About</nuxt-link
          >
        </div>
      </div>
      <div
        class="z-50 flex mb-8 animate-fade"
        :style="{ 'animation-delay': '.4s' }"
      >
        <a :href="`mailto:${links.email}`" class="w-full">
          <button class="primary text-sm py-2 w-full">Contact</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import scrollTo from '../mixins/scrollToHash.js'
import links from '~/assets/links.json'
export default {
  mixins: [scrollTo],
  data() {
    return {
      links,
      isOpen: false,
    }
  },
  methods: {
    toggleOption(id) {
      this.scrollToId(id)
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.popup-option {
  @apply font-bold text-3xl;
}
.hamburger {
  @apply w-4 cursor-pointer;
}

.hamburger:after,
.hamburger:before,
.hamburger div {
  content: '';
  height: 2px;
  @apply block bg-black my-1;
  transition: all 0.2s ease-in-out;
}

.hamburger.active:before {
  transform: translateY(6px) rotate(135deg);
}
.hamburger.active:after {
  transform: translateY(-6px) rotate(-135deg);
}

.hamburger.active div {
  transform: scale(0);
}
</style>

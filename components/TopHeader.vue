<template>
  <div class="main-wrapper bg-white bg-opacity-75 py-1">
    <nav class="flex col-start-2 justify-between items-center">
      <nuxt-link
        tag="div"
        :to="{ path: '/' }"
        class="cursor-pointer font-extrabold text-3xl"
      >
        NZ<span class="text-primary">.</span>
      </nuxt-link>
      <div class="flex justify-between w-96">
        <nuxt-link
          :to="{ path: '/', hash: '#work' }"
          @click.native="scrollToId('work')"
        >
          Work
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#personal' }"
          @click.native="scrollToId('personal')"
        >
          Personal</nuxt-link
        >
        <nuxt-link :to="{ path: '/photography' }"> Photography</nuxt-link>
      </div>
      <a :href="`mailto:${links.email}`">
        <button class="primary text-sm rounded-full">Contact</button>
      </a>
    </nav>
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
    }
  },
}
</script>

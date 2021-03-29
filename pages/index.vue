<template>
  <div>
    <div class="main-wrapper">
      <div
        class="col-start-2 grid gap-x-6 grid-cols-1 md:grid-cols-2 pt-16 md:pt-32 pb-12 md:pb-48"
      >
        <h1
          class="col-start-1 text-5xl lg:text-6xl xl:text-8xl leading-none font-extrabold md:font-black animate-fade mb-6 md:mb-3"
          :style="{ 'animation-delay': '.1s' }"
        >
          Nicolas Zuluaga
        </h1>
        <div
          class="row-span-4 justify-self-center self-center w-auto row-start-3 md:row-start-1 col-start-1 md:col-start-2 animate-fade"
          :style="{ 'animation-delay': '.1s' }"
        >
          <picture>
            <source
              :srcSet="require('~/static/me.png?webp')"
              type="image/webp"
            />
            <source :srcSet="require('~/static/me.png')" type="image/png" />
            <img
              ref="meImg"
              class="img-opt justify-self-center self-center w-full h-auto"
              src="/me.svg"
              alt="profile"
              width="311"
              height="325"
              data-src="/me.png"
              @load.once="lazyLoad('meImg')"
            />
          </picture>
        </div>

        <h2
          class="col-start-1 text-gray-700 text-lg md:text-xl lg:text-2xl mb-7 animate-fade"
          :style="{ 'animation-delay': '.2s' }"
        >
          Currently developing and designing the next-generation of enteprise
          tax products at
          <span class="text-kpmg-blue">KPMG Ignition Tax</span>.
        </h2>
        <div
          class="col-start-1 mb-8 md:mb-12 items-center flex animate-fade"
          :style="{ 'animation-delay': '.3s', height: 'fit-content' }"
        >
          <nuxt-link
            class="primary py-2 px-6 mr-4"
            :to="{ path: '/', hash: '#work' }"
            tag="button"
            @click.native="scrollToId('work')"
          >
            Get started
          </nuxt-link>
          <a :href="`mailto:${links.email}`">
            <button class="h-full secondary py-2 px-6">Get in touch</button>
          </a>
        </div>
        <div
          class="col-start-1 flex items-center bg-gray-100 p-4 rounded-lg justify-between animate-fade"
          :style="{ 'animation-delay': '.4s' }"
        >
          <div class="relative flex items-center">
            <div class="relative">
              <picture>
                <source
                  :srcSet="require('~/static/profile.jpeg?webp')"
                  type="image/webp"
                />
                <source
                  :srcSet="require('~/static/profile.jpeg')"
                  type="image/jpeg"
                />
                <img
                  ref="profileImg"
                  class="img-opt justify-self-center self-center rounded-full h-10 md:h-16 w-auto"
                  src="/profile.jpeg?lqip"
                  alt="profile"
                />
              </picture>
              <div
                class="absolute bottom-0 right-0 rounded-full h-3 w-3 bg-green-500 mb-1 border-white border-2"
              />
            </div>
            <p class="text-sm ml-3">
              <span class="font-bold text-sm">Reply Time: </span>1-2 working
              days
            </p>
          </div>
          <div class="flex">
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
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrapper pt-24 bg-gray-100">
      <div id="work" class="col-start-2 animate-fade pb-32">
        <div class="flex flex-col mb-12 md:mb-24 col-start-2">
          <p
            class="font-semibold text-2xl md:text-5xl mb-2 text-black text-center"
          >
            Here's what I've worked on
          </p>
          <p class="text-gray-800 text-md md:text-lg text-center">
            Currently working at KPMG in Toronto, Canada.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <work-card
            v-for="(project, index) of workProjects"
            :key="project.slug"
            :project="project"
            :class="[
              index + 1 === personalProjects.length || index === 0
                ? 'col-span-full'
                : 'col-span-2 lg:col-span-1',
            ]"
          />
        </div>
      </div>
    </div>

    <div id="personal" class="main-wrapper pt-24 bg-gray-50 relative">
      <lottie-animation
        ref="anim"
        class="w-40 md:w-60 top-0 z-50 absolute top-0 -mt-16 md:-mt-32 ml-32 animate-spin-slow"
        :animation-data="require('~/assets/animations/devices.json')"
        :loop="true"
        :auto-play="true"
        :speed="1"
      />
      <div class="flex flex-col mb-12 md:mb-24 col-start-2">
        <p
          class="font-semibold text-2xl md:text-5xl mb-2 text-black text-center"
        >
          What I do for fun
        </p>
        <p class="text-gray-800 text-md md:text-lg text-center">
          Some of my recent projects. I update this every once in a whie.
        </p>
      </div>
      <div
        class="col-start-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-6 pb-24"
      >
        <personal-card
          v-for="project of personalProjects"
          :key="project.slug"
          class="col-span-full lg:col-span-1"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue
import WorkCard from '../components/WorkCard.vue'
import personalCard from '../components/PersonalCard.vue'
import scrollTo from '../mixins/scrollToHash.js'
import linkedinIcon from '~/assets/icons/linkedin.svg'
import mailIcon from '~/assets/icons/mail.svg'
import links from '~/assets/links.json'

export default {
  components: {
    WorkCard,
    linkedinIcon,
    mailIcon,
    personalCard,
    LottieAnimation,
  },
  mixins: [scrollTo],
  async asyncData({ $content, params }) {
    const workProjects = await $content('work', params.slug)
      .sortBy('position', 'asc')
      .fetch()
    const personalProjects = await $content('personal', params.slug)
      .only([
        'title',
        'description',
        'subCategory',
        'img',
        'component',
        'github',
      ])
      .sortBy('position', 'asc')
      .fetch()

    return {
      workProjects,
      personalProjects,
      links,
    }
  },
  methods: {
    lazyLoad(ref) {
      console.count('1')
      const img = this.$refs[ref]
      img.src = img.dataset.src
    },
  },
}
</script>

<style lang="scss" scoped></style>

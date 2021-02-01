<template>
  <div>
    <div
      class="grid gap-x-6 grid-cols-1 md:grid-cols-2 pt-16 md:pt-32 pb-12 md:pb-48"
    >
      <h1
        class="col-start-1 text-6xl md:text-8xl leading-none font-extrabold md:font-black animate-fade mb-6 md:mb-0"
        :style="{ 'animation-delay': '.1s' }"
      >
        Nicolas Zuluaga
      </h1>
      <lottie-animation
        ref="anim"
        class="row-span-4 justify-self-center self-center w-auto row-start-3 md:row-start-1 col-start-1 md:col-start-2"
        :animation-data="require('../static/animations/profile.json')"
        :loop="true"
        :auto-play="true"
        :speed="1"
      />
      <h2
        class="col-start-1 text-gray-700 text-xl md:text-2xl mb-7 animate-fade"
        :style="{ 'animation-delay': '.2s' }"
      >
        Currently developing and designing the next-generation of enteprise tax
        products at
        <span class="text-kpmg-blue">KPMG Ignition Tax</span>. Passionate about
        building impactful solutions.
      </h2>
      <div
        class="col-start-1 mb-8 md:mb-12 flex animate-fade"
        :style="{ 'animation-delay': '.3s' }"
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
            <img
              class="justify-self-center self-center rounded-full h-10 md:h-16 w-auto"
              src="/profile.jpeg"
              alt="profile"
            />
            <div
              class="absolute bottom-0 right-0 rounded-full h-3 w-3 bg-green-500 mb-1 border-white border-2"
            />
          </div>
          <p class="text-sm ml-3">
            <span class="font-bold text-sm">Reply Time: </span>1-2 working days
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

    <div id="work" class="animate-fade pb-8">
      <div class="flex col-start-1 items-center mb-8">
        <hr class="w-12 border-gray-200 mr-3" />
        <p class="text-gray-500 text-lg md:text-xl">Work</p>
      </div>
      <div
        v-for="project of workProjects"
        :key="project.slug"
        class="col-start-1 col-span-full pb-12 md:pb-24"
      >
        <work-card :project="project" />
      </div>
    </div>
    <div id="projects" class="">
      <div class="flex items-center mb-8">
        <hr class="w-12 border-gray-200 mr-3" />
        <p class="text-gray-500 text-lg md:text-xl">Projects</p>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-28 pb-24"
      >
        <personal-card
          v-for="project of personalProjects"
          :key="project.slug"
          class="cols-span-full lg:col-span-1"
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
import linkedinIcon from '../static/icons/linkedin.svg?inline'
import mailIcon from '../static/icons/mail.svg?inline'
import links from '../static/links.json'
import scrollTo from '../mixins/scrollToHash.js'

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
      .only([
        'title',
        'description',
        'subCategory',
        'roles',
        'roleDescriptions',
        'img',
        'component',
        'roleSubTitle',
        'site',
      ])
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
}
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(120px);
    transform: translateY(120px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
.animate-fade {
  animation: fadeUp 2s 0.1s 1 both cubic-bezier(0.2, 0.8, 0.2, 1);
}
</style>

<template>
  <div
    class="group transform bg-white hover:shadow-card-shadow shadow-image rounded-lg transition-all duration-300 ease-in-out hover:scale-101"
    :class="{ 'cursor-pointer': project.github }"
    @click="openLink"
  >
    <div class="relative overflow-hidden">
      <component
        :is="project.component"
        v-if="project.component"
        class="rounded-t-lg max-h-48 md:max-h-64 w-full h-auto img-style transform group-hover:scale-110"
      />
      <img
        v-if="project.img"
        class="img-opt rounded-t-lg object-cover max-h-48 md:max-h-64 w-full h-auto img-style transform group-hover:scale-110"
        :src="project.img"
        alt="profile"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gray-400 bg-opacity-5"></div>
    </div>
    <div class="px-6 py-8 sm:px-8">
      <p class="text-gray-500 text-xs uppercase pb-2">
        {{ project.subCategory }}
      </p>
      <h5
        class="mb-2 text-xl font-bold leading-none sm:text-2xl group-hover:text-primary transition-all duration-500 ease-in-out"
      >
        {{ project.title }}
      </h5>
      <p class="mb-5 text-gray-700 text-md md:text-lg">
        {{ project.description }}
      </p>
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="primary py-2 px-6 rounded-full">View Github</button>
      </a>
    </div>
  </div>
</template>

<script>
import neuroTechCover from '@/assets/svg-images/neurotechX/NTCover.svg'
export default {
  components: {
    neuroTechCover,
  },
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
  methods: {
    openLink() {
      if (this.project.github) {
        window.open(this.project.github, '_blank').focus()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.img-style {
  @apply justify-self-center self-center row-span-2 rounded-sm transform col-start-1 transition-all duration-200 ease-in-out;
}
</style>

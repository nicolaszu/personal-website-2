<template>
  <div class="group transform">
    <component
      :is="project.component"
      v-if="project.component"
      class="w-full h-auto img-style group-hover:shadow-image-hover group-hover:-translate-y-1"
    />
    <img
      v-if="project.img"
      class="img-style group-hover:shadow-image-hover group-hover:-translate-y-1"
      :src="project.img"
      alt="profile"
    />
    <div class="pt-5">
      <p class="text-gray-500 text-xs uppercase pb-2">
        {{ project.subCategory }}
      </p>
      <p
        class="font-bold text-2xl pb-2 group-hover:text-primary transition-all duration-500 ease-in-out"
      >
        {{ project.title }}
      </p>
      <p class="text-lg text-gray-600 pb-8">{{ project.description }}</p>
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="secondary py-2 px-6">View Github</button>
      </a>
    </div>
  </div>
</template>

<script>
import neuroTechCover from '../assets/svg-images/neurotechx/NTCover.svg'
import computerVisionCover from '../assets/svg-images/computerVision/computerVisionCover.svg'
export default {
  components: {
    neuroTechCover,
    computerVisionCover,
  },
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.img-style {
  @apply justify-self-center self-center row-span-2 rounded-md transform col-start-1 shadow-image  transform transition-all duration-500 ease-in-out;
}
</style>

<template>
  <div class="bg-white grid grid-cols-1 gap-8 py-16">
    <div class="self-end col-start-1 px-8 md:px-32 text-center pb-8 md:pb-16">
      <h3 class="font-semibold text-2xl md:text-5xl text-black text-center">
        {{ project.title }}
      </h3>
      <p class="text-gray-700 text-lg md:text-xl text-center">
        {{ project.description }}
      </p>
      <nuxt-link
        v-if="project.hasBlog"
        :to="{ name: 'blogs-slug', params: { slug: project.slug } }"
      >
        <button class="primary rounded-full self-center mt-6">
          Learn More
        </button>
      </nuxt-link>
    </div>
    <img
      v-if="project.img"
      loading="lazy"
      class="img-opt img-style mb-5 md:mb-0 px-8 md:px-0"
      :src="project.img"
      alt="profile"
    />
    <component :is="project.component" v-if="project.component" />
  </div>
</template>

<script>
import trailBeePhone from '../components/custom-card-images/trailBeePhone'
import homesPhones from '../components/custom-card-images/homesPhones'

export default {
  components: {
    trailBeePhone,
    homesPhones,
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
  @apply justify-self-center self-center w-full md:w-128 h-auto rounded-md transform;
}
</style>
>

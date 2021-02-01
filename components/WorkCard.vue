<template>
  <div class="">
    <div class="flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
        <div
          class="row-start-1 self-end"
          :class="[
            project.title === 'KPMG Ignition Tax'
              ? 'col-start-1'
              : 'col-start-1 md:col-start-2',
          ]"
        >
          <p class="text-gray-500 text-xs md:text-base uppercase">
            {{ project.subCategory }}
          </p>
          <h3 class="font-black text-4xl md:text-5xl">{{ project.title }}</h3>
          <p class="text-gray-700 text-xl pb-6 md:pb-8">
            {{ project.description }}
          </p>
        </div>
        <div
          v-for="role in project.roles"
          :key="role"
          class="md:row-start-2 pb-8"
          :class="[
            project.title === 'KPMG Ignition Tax'
              ? 'col-span-1'
              : 'col-start-1 md:col-start-2',
          ]"
        >
          <p class="font-extrabold text-xl md:text-3xl md:pb-2 text-primary">
            {{ role }}
          </p>
          <p class="text-gray-700 text-lg md:text-2xl">
            <strong class="text-black leading-loose">{{
              project.roleSubTitle[0][role]
            }}</strong>
            {{ project.roleDescriptions[0][role] }}
          </p>
          <a
            v-if="project.site"
            :href="project.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="secondary py-2 px-6 mt-5">View Site</button>
          </a>
        </div>
        <img
          v-if="project.img"
          class="img-style mb-5 md:mb-0 shadow-image hover:shadow-image-hover hover:-translate-y-1 transform transition-all duration-500 ease-in-out"
          :src="project.img"
          alt="profile"
        />
        <component
          :is="project.component"
          v-if="project.component"
          class="img-style"
          :class="[
            project.component !== 'trailBeePhone'
              ? 'mb-5 md:mb-0 shadow-image hover:shadow-image-hover hover:-translate-y-1 transform transition-all  duration-500 ease-in-out'
              : 'mb-12 md:mb-0',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import trailBeePhone from '../components/trailBee/trailBeePhone'
import homesCover from '~/static/images/homes/HomesCover.svg?inline'

export default {
  components: {
    trailBeePhone,
    homesCover,
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
  @apply justify-self-center self-center w-full md:w-96 h-auto row-span-2 row-start-2 md:row-start-1 rounded-md transform col-start-1;
}
</style>
>

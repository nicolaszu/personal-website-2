<template>
  <div class="main-wrapper mb-24">
    <div class="w-full col-start-2 grid grid-cols-2 px-0 md:px-24">
      <div
        class="mb-4 justify-self-center col-span-full rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center"
      >
        <component :is="icon" class="h-6 w-6" />
      </div>
      <p
        class="mb-8 text-center col-span-full font-bold text-xl md:text-xl md:pb-2text-black"
      >
        {{ role }}
      </p>
      <p class="text-gray-700 text-md col-span-full mb-6">
        <strong class="text-black leading-loose">
          {{ subtitle }}
        </strong>
        {{ description }}
      </p>
      <check-split-list :items="skills" />
    </div>
  </div>
</template>

<script>
import codeIcon from '@/assets/icons/code.svg'
import designIcon from '@/assets/icons/figma.svg'

export default {
  components: { codeIcon, designIcon },
  props: {
    role: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'codeIcon',
    },
    skills: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>

<template>
  <div class="main-wrapper pt-24 pb-32">
    <div class="col-start-2">
      <div class="animate-fade-up" :style="{ 'animation-delay': '.1s' }">
        <nuxt-content
          v-if="photoCategory.customHeader"
          :document="photoCategory"
        />
        <photo-title-header
          v-else
          :title="photoCategory.title"
          :description="photoCategory.description"
          :date="photoCategory.year"
        />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up"
        :style="{ 'animation-delay': '.2s' }"
      >
        <div class="flex flex-col gap-6">
          <div
            v-for="(photo, index) in photoColumns[0]"
            :key="index"
            class="relative"
          >
            <photo-thumbnail :path="photo" />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="(photo, index) in photoColumns[1]"
            :key="index"
            class="relative"
          >
            <photo-thumbnail :path="photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoTitleHeader from '~/components/global/sections/PhotoTitleHeader.vue'
import PhotoThumbnail from '~/components/photography/PhotoThumbnail.vue'

export default {
  components: {
    PhotoThumbnail,
    PhotoTitleHeader,
  },
  async asyncData({ $content, params }) {
    const photoCategory = await $content('photos', params.slug).fetch()
    return { photoCategory }
  },
  computed: {
    photoColumns() {
      const left = []
      const right = []
      this.photos.forEach((photo, index) => {
        if (index % 2 === 1) {
          right.push(photo)
        } else {
          left.push(photo)
        }
      })
      return [left, right]
    },
    // get array of photo paths by folder
    photos() {
      const imagesPath = require.context('~/assets/photos', true)
      return Array.from(imagesPath.keys())
        .filter((path) => {
          return path.includes(this.photoCategory.folder)
        })
        .map((path) => {
          return path.substring(2)
        })
    },
  },
}
</script>

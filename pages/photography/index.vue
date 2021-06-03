<template>
  <div class="main-wrapper pt-24 pb-32">
    <transition name="slide-fade">
      <div class="col-start-2">
        <p
          class="font-bold text-lg md:text-xl uppercase mb-12 text-center animate-fade-up"
          :style="{ 'animation-delay': '.1s' }"
        >
          Featured Collections
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-0 w-full animate-fade-up"
          :style="{ 'animation-delay': '.2s' }"
        >
          <category-card
            v-for="(category, index) in featuredList"
            :key="category.slug"
            :title="category.categoryTitle"
            :cover="category.cover"
            :folder="category.folder"
            :date="category.year"
            :to="category.slug"
            :image-size-style="
              index % 2 === 1 ? 'h-full md:h-80 ' : 'h-full md:h-60'
            "
          />
        </div>
        <!-- <p class="font-bold text-lg md:text-xl uppercase mb-12 mt-24 text-center">
        all
      </p>
      <div class="grid grid-cols-3 gap-x-3 gap-y-8">
        <category-card
          v-for="(category, index) in featuredList"
          :key="category.slug"
          :title="category.categoryTitle"
          :cover="category.cover"
          :folder="category.folder"
          :date="category.year"
          :to="category.slug"
          :image-size-style="index % 2 === 1 ? 'h-80' : 'h-60'"
        />
      </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
import CategoryCard from '~/components/photography/CategoryCard.vue'

export default {
  components: { CategoryCard },
  async asyncData({ $content, params }) {
    const featuredCategoryNames = await $content('photos', 'featured').fetch()
    const featuredList = []

    await Promise.all(
      featuredCategoryNames.slugs.map(async (slug) => {
        const categoryInfo = await $content('photos', slug).fetch()
        featuredList.push(categoryInfo)
      })
    )

    return { featuredList }
  },
}
</script>
<style lang="scss" scoped></style>

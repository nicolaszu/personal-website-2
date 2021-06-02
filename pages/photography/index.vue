<template>
  <div class="main-wrapper pt-24 pb-32">
    <div class="col-start-2">
      <p class="font-bold text-lg md:text-xl uppercase mb-12 text-center">
        Featured
      </p>
      <div class="flex space-x-8">
        <category-card
          v-for="(category, index) in featuredList"
          :key="category.slug"
          :title="category.categoryTitle"
          :cover="category.cover"
          :folder="category.folder"
          :date="category.year"
          :to="category.slug"
          :total-images="category.photos.length"
          :image-size-style="index % 2 === 1 ? 'h-80' : 'h-60'"
        />
      </div>
      <!-- <p class="font-bold text-lg md:text-xl uppercase mb-12 mt-24 text-center">
        all
      </p>
      <div class="grid grid-cols-3 gap-x-3 gap-y-8">
        <nuxt-link
          v-for="index in 5"
          :key="index"
          class="cursor-pointer group"
          to="/about"
        >
          <picture>
            <source
              :srcSet="require('~/assets/photos/japan/P1140242.jpeg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="require('~/assets/photos/japan/P1140242.jpeg')"
              type="image/jpeg"
            />
            <img
              ref="profileImg"
              class="img-opt justify-self-center self-center h-80 object-cover"
              src="/P1140242.jpeg?lqip"
              alt="profile"
            />
          </picture>
          <div class="flex flex-col pt-2">
            <p class="text-lg group-hover:text-primary">1.1_Tokyo</p>
            <p class="text-sm text-gray-500">1.1.2019</p>
          </div>
        </nuxt-link>
      </div> -->
    </div>
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

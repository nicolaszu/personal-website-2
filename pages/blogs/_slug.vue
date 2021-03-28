<template>
  <div>
    <div class="main-wrapper angled-bg mb-32">
      <div
        class="col-start-2 grid gap-x-24 grid-cols-1 md:grid-cols-2 pt-16 md:pt-32"
      >
        <h1
          class="col-start-1 text-5xl lg:text-6xl leading-none font-extrabold md:font-black animate-fade mb-6 md:mb-3"
          :style="{ 'animation-delay': '.1s' }"
        >
          {{ blog.title }}
        </h1>
        <div
          class="row-span-4 justify-self-center self-center w-auto row-start-3 md:row-start-1 col-start-1 md:col-start-2 animate-fade"
          :style="{ 'animation-delay': '.1s' }"
        >
          <img
            class="img-opt justify-self-center self-center w-full"
            :src="blog.img"
            alt="work image"
          />
        </div>

        <h2
          class="col-start-1 text-gray-700 text-xl md:text-2xl mb-7 animate-fade"
          :style="{ 'animation-delay': '.2s' }"
        >
          {{ blog.description }}
        </h2>
      </div>
    </div>
    <nuxt-content
      :document="blog"
      class="animate-fade"
      :style="{ 'animation-delay': '.3s' }"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('work', params.slug).fetch()

    return { blog }
  },
}
</script>
<style lang="scss" scoped>
.angled-bg {
  background-image: linear-gradient(
    176deg,
    #f3f3f3 80%,
    #ffffff calc(80% + 2px)
  );
}
</style>

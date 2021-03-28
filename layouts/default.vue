<template>
  <div class="grid height-style">
    <top-header class="hidden md:grid col-span-full" />
    <top-header-mobile class="grid md:hidden col-span-full" />
    <Nuxt class="col-span-full" />
    <the-footer class="col-span-full" />
  </div>
</template>

<style lang="scss" scoped>
.height-style {
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>

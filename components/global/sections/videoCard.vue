<template>
  <div class="main-wrapper mb-24 flex flex-col justify-center items-center">
    <div class="flex items-center flex-col">
      <div
        class="mb-4 justify-self-center col-span-full rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center"
      >
        <img
          ref="meImg"
          class="img-opt justify-self-center self-center w-full h-auto"
          src="/images/tesla/lightning-2997171-2516209.webp"
          alt="lightning"
          width="311"
          height="325"
        />
      </div>
      <p
        class="mb-8 text-center col-span-full font-bold text-xl md:text-xl md:pb-2text-black"
      >
        {{ title }}
      </p>
      <iframe
        width="1120"
        height="630"
        :src="video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

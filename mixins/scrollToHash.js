export default {
  methods: {
    scrollToId(id) {
      if (this.$route.hash) {
        const el = document.querySelector(`#${id}`)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }
    },
  },
}

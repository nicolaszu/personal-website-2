<template>
  <div class="main-wrapper">
    <div class="col-start-2 flex flex-col pt-16 md:pt-32 pb-12 md:pb-48">
      <transition name="slide-fade">
        <div v-if="!questionAsked" class="flex flex-col">
          <h1
            class="text-4xl md:text-5xl leading-none font-extrabold md:font-black mb-6 md:mb-3 animate-fade-up"
            :style="{ 'animation-delay': '.1s' }"
          >
            Hi.
          </h1>
          <h2
            class="text-gray-700 text-xl md:text-2xl animate-fade-up"
            :style="{ 'animation-delay': '.2s' }"
          >
            I’m Nick. Nice to meet you. I’m a software developer with design
            experience.
          </h2>
          <p
            class="font-bold text-xl md:text-2xl mb-7 animate-fade-up"
            :style="{ 'animation-delay': '.2s' }"
          >
            Let's talk! Ask me something.
          </p>
        </div>
      </transition>
      <div v-if="!questions.length">
        <div
          v-for="question in initialQuestions"
          :key="question.slug"
          class="animate-fade-up mb-2"
          :style="{ 'animation-delay': '.3s' }"
        >
          <div
            class="flex group cursor-pointer"
            @click="fetchQuestion(question.slug)"
          >
            <comment-icon class="w-5 h-auto mr-2 group-hover:text-primary" />
            <p class="text-lg font-bold group-hover:text-primary">
              {{ question.question }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-for="question in questions"
        :key="question.slug"
        class=""
        :style="{ 'animation-delay': '.3s' }"
      >
        <p class="text-lg font-bold">
          {{ question.question }}
        </p>
        <nuxt-content :document="question" />
        <vue-typed-js
          id="typed-strings"
          :type-speed="10"
          :start-delay="40"
          :show-cursor="false"
          :strings="[question.answer]"
        >
          <p class="typing"></p>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>
import commentIcon from '~/assets/icons/comment.svg'

export default {
  components: { commentIcon },
  async asyncData({ $content }) {
    const initialQuestions = await $content('questions')
      .search('_init')
      .only(['question', 'slug'])
      .fetch()
    return {
      initialQuestions,
    }
  },
  data() {
    return {
      questionAsked: false,
      questions: [],
    }
  },
  methods: {
    async fetchQuestion(id) {
      const question = await this.$content('questions', `${id}`).fetch()
      this.questions.push(question)
    },
  },
}
</script>

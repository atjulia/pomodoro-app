<template>
  <div>
    <div class="min-h-screen max-w-5xl justify-between mx-auto flex flex-col px-5 py-4 md:py-5">
      <div>
        <HeaderBar />
        <ExperienceBar />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExperienceBar from '../components/atoms/ExperienceBar.vue'
import HeaderBar from '../components/atoms/HeaderBar.vue'
import Footer from '../components/atoms/Footer.vue'

export default Vue.extend({
  name: 'default',
  components: {
    ExperienceBar,
    HeaderBar,
    Footer
  }
})
</script>
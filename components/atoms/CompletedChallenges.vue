<template>
  <div class="flex flex-col pb-5 border-b-2 border-gray-line mt-8 lg:mt-14 font-medium">
    <div class="flex flex-row">
      <img src="icons/level.svg" alt="level" class="mr-2">
      <span class="text-base">Level {{ level }}</span>
    </div>
    <div class="flex justify-between items-center">
      <p class="text-lg">
        Completed Challenges
      </p>
      <p class="text-2xl">
        {{ completedChallenges }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex' 

export default Vue.extend({
  computed: mapState('challenges', ['completedChallenges', 'level'])
})
</script>
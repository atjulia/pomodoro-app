<template>
  <section class="flex flex-col lg:flex-row justify-center items-center flex-1 lg:flex-none lg:mt-10 sm:gab-x-10 md:gap-x-20 ">
    <div class="flex flex-col w-full lg:w-1/2 pb-4">
      <CompletedChallenges />
      <Countdown @completed="getNewChallenge" class="pb-2"/>
      <button 
        v-if="hasCountdownCompleted" 
        disabled 
        class="button completed"
      >
        Cycle completed
      </button>
      <button 
        v-else-if="isCountdownActive" 
        @click="setCountdownState(false)" 
        class="button abandon"
      >
        Abandon cycle
      </button>
      <button 
        v-else 
        @click="setCountdownState(true)" 
        class="button start"
      >
        Start a cycle
      </button>
    </div>
    <Card  id="challenge" class="w-full lg:w-1/2" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapState, mapMutations } from 'vuex'
import { Mutations as ChallengesMT } from '@/store/challenges/types' 
import { Mutations as CountdownMT } from '@/store/countdown/types'

import CompletedChallenges from '@/components/atoms/CompletedChallenges.vue'
import Profile from '@/components/molecules/Profile.vue'
import Countdown from '@/components/molecules/Countdown.vue'
import Card from '@/components/organisms/Card.vue'

import allChallenges from '~/assets/challenges/data';

import { playAudio, sendNotification, getRandomNumber, scroollToElement } from '@/utils'
interface Head {
  title: string
}

export default Vue.extend({
  head (): Head {
    return {
      title: 'Home | Pomodorofocus'
    } 
  },
  components: {
    CompletedChallenges,
    Profile,
    Countdown,
    Card
  },
  mounted () {
    if ('Notification' in window) {
      Notification.requestPermission()
    }
  },
  computed: {
    ...mapState('countdown', {
      hasCountdownCompleted: 'hasCompleted',
      isCountdownActive: 'isActive',
    }),
  },
  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `countdown/${CountdownMT.SET_HAS_COMPLETED}`,
      setCountdownIsActive: `countdown/${CountdownMT.SET_IS_ACTIVE}`,
      setCurrentChallengesIndex: `challenges/${ChallengesMT.SET_CURRENT_CHALLENGE_INDEX}`
    }),
    setCountdownState (flag: boolean) {
      this.setCountdownHasCompleted(false)
      this.setCountdownIsActive(flag)
    },
    getNewChallenge () {
      const index = getRandomNumber(0, allChallenges.length);
      console.log(allChallenges)
      this.setCountdownHasCompleted(true)
      this.setCurrentChallengesIndex(index)

      if (Notification?.permission === 'granted') {
        playAudio('/notification.mp3')
        sendNotification('New Challenge', {
          body: 'A new challenge has started! Go complete it!',
          icon: '/favicon.svg'
        })
      }

      this.$nextTick(() => {
        scroollToElement('#challenge')
      })
    }
  }
})
</script>

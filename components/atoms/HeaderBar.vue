<template>
  <div class="flex flex-row justify-between pb-2">
    <img src="/logo-full.svg" :style="{ maxHeight: '40px'}">
    <button @click="setModalUp" class="flex flex-row items-center justify-center gap-x-1 text-white bg-red hover:bg-red-dark rounded-md px-2"><img src="/icons/gear.svg" :style="{ maxHeight: '20px'}">settings</button>
    <SettingsModal />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex';
import SettingsModal from '@/components/atoms/SettingsModal.vue'
import { Mutations as CountdownMT } from '~/store/countdown/types';
export default Vue.extend({
  components: { SettingsModal },
  methods: {
		...mapMutations({
			ModalUp: `countdown/${CountdownMT.SET_SETTINGS_UP_MODAL_OPEN}`,
		}),
    setModalUp () {
      console.log(this.ModalUp)
    }
  }
})
</script>
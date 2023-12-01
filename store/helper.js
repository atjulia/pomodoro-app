import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import * as challenges from '~/store/challenges';
import ChallengesGetters from '~/store/challenges/getters';
import ChallengesMutations from '~/store/challenges/mutations';

import * as countdown from '~/store/countdown';

export const setupLocalVueStore = () => {
	const localVue = createLocalVue();
	localVue.use(Vuex);

	const setupModule = () => ({
		modules: {
			countdown: {
				namespaced: true,
				state: countdown.state(),
				getters: countdown.getters,
				mutations: countdown.mutations,
			},
			challenges: {
				namespaced: true,
				state: {
					...challenges.state(),
					allChallenges: [{
						type: 'type',
						description: 'description',
						amount: 10,
					}],
				},
				getters: ChallengesGetters,
				mutations: ChallengesMutations,
			},
		},
	});

	const configureStore = (countdownState = {}, challengesState = {}) => {
		const storeConfig = setupModule();
		storeConfig.modules.countdown.state = {
			...storeConfig.modules.countdown.state,
			...countdownState,
		};

		storeConfig.modules.challenges.state = {
			...storeConfig.modules.challenges.state,
			...challengesState,
		};

		const store = new Vuex.Store(storeConfig);
		return store;
	};

	return {
		localVue,
		configureStore,
	};
};
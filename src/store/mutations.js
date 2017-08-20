import * as types from './mutations-types'

const mutations = {
	[types.SET_SINGER](state,singer) {
		state.singer = singer
	}
}

export default mutations
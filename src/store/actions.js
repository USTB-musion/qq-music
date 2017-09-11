import * as types from './mutations-types'

export const selectPlay = function({commit,state},{list,index}) {
	commit(types.SET_SEQUNCE_LIST,list)
	commit(types.SET_PLAYLIST,list)
	commit(types.SET_CURRENT_INDEX,index)
	commit(types.SET_FULL_SREEN,true)
	commit(types.SET_PLAYING_STATE,true)

}
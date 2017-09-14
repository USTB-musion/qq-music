export const singer = state => state.singer

export const playing = state => state.playing

export const fullSreen = state => state.fullSreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
	return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList
import {playMode} from 'common/js/config'

const state = {
	singer: {},
	playing: false,
	fullSreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	disc: {}
}

export default state
const playlist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, {
                id: action.id,
                artist: action.artist,
                title: action.title,
                duration: action.duration
                // thumbnail: action.thumbnail
            }]
        case 'REMOVE_SONG':
            return state.filter(song => song.id !== action.id)
        case 'SEND_TO_TOP':
            return [state.find(song => song.id === action.id), ...state.filter(song => song.id !== action.id)]
        case 'BUMP_UP':
            let indexUp = state.findIndex(song => song.id === action.id)
            if (indexUp === 0) {
                return state
            } else {
                return [...state.slice(0, indexUp - 1), state[indexUp], state[indexUp - 1], ...state.slice(indexUp + 1)]  
            } 
        case 'SEND_DOWN':
            let indexDown = state.findIndex(song => song.id === action.id)
            if (indexDown === state.length - 1) {
                return state
            } else {
                return [...state.slice(0, indexDown), state[indexDown + 1], state[indexDown], ...state.slice(indexDown + 2)]
            }
        default:
            return state
    }
}

export default playlist

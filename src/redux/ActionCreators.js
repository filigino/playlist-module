// action creators
let nextSongId = 0
export const addSong = (text) => {
    return {
        type: 'ADD_SONG',
        id: nextSongId++,
        text
    }
}

export const removeSong = (id) => {
    return {
        type: 'REMOVE_SONG',
        id
    }
}

export const sendToTop = (id) => {
    return {
        type: 'SEND_TO_TOP',
        id
    }
}

export const bumpUp = (id) => {
    return {
        type: 'BUMP_UP',
        id
    }
}

export const bumpDown = (id) => {
    return {
        type: 'BUMP_DOWN',
        id
    }
}

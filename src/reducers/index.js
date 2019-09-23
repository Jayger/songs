import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duraction: '4:05' },
        {title: 'Macarena', duraction: '2:30' },
        {title: 'All Star', duraction: '3:15' },
        {title: 'I want it that way', duraction: '2:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
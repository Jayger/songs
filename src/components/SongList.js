import React from 'react';
import { connect } from 'react-redux'

class SongList extends React.Component {
    render() {
        return(
            <div>SongList</div>
        )
    };
};

const getMyState = (state) => {

    return { songs: state.songs };
};


export default connect(getMyState)(SongList);

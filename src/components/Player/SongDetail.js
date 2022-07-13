import { connect } from "react-redux";
import { selectSong } from "../../actions";

const SongDetail = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
}) => {
  const songData = () => {
    if (selectedSongId >= 0) {
    } else {
      selectSong(defaultSong);
      return null;
    }
  };


};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);
